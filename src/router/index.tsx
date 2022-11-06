import React, {lazy, Suspense} from 'react'
import {Route, useRoutes} from 'react-router-dom'
import {DesktopOutlined} from "@ant-design/icons";
import {Spin} from "antd";
// TODO @loadable/component后续采用

// const Layout = lazy(() => import('../layout'))
const Login = lazy(() => import('../pages/login'))
const Dashboard = lazy(() => import('../pages/dashboard'))
const ArticleList = lazy(() => import('../pages/article-list'))
const AddArticle = lazy(() => import('../pages/article-add'))
const ArticleDraft = lazy(() => import('../pages/article-draft'))
const ArticleClass = lazy(() => import('../pages/article-class'))
const Comments = lazy(() => import('../pages/comment'))
const MusicAdd = lazy(() => import('../pages/music-add'))
const MusicList = lazy(() => import('../pages/music'))
// const ProjectAdd = lazy(() => import('../pages/project-add'))
// const Projects = lazy(() => import('../pages/projects'))
const Tags = lazy(() => import('../pages/tags'))
const TagAdd = lazy(() => import('../pages/tag-add'))
const Home = lazy(() => import('../pages/home'))
const Personal = lazy(() => import('../pages/personal'))
const User = lazy(() => import('../pages/user'))
const Links = lazy(() => import('../pages/links'))
// const Page404 = lazy(() => import('../pages/pages404 '))
// 声明类型
namespace SyncRoute {
    export type Routes = {
        path: string,
        name: string,
        meta: any,
        element: React.LazyExoticComponent<any>,
        children?: Routes[]
    }
}


const RouteTable: any = [
    {
        path: '/login',
        name: "login",
        meta: {
            icon: <DesktopOutlined/>,
            title: "登录"
        },
        element: Login
    },
    {
        path: '/',
        name: "首页",
        element: Home,
        children: [
            {
                name: "仪表盘",
                path: '/dashboard',
                element: Dashboard
            },
            {
                name: "文章列表",
                path: 'article/article-list',
                element: ArticleList
            },
            {
                name: "添加文章",
                path: 'article/article-add',
                element: AddArticle
            },
            {
                name: "文章归类",
                path: '/article-class',
                element: ArticleClass
            },
            {
                name: "草稿箱",
                path: '/article-draft',
                element: ArticleDraft
            },
            {
                name: "评论管理",
                path: '/links',
                element: Links
            },
            {
                name: "评论管理",
                path: '/comment',
                element: Comments
            },
            {
                name: "添加音乐",
                path: '/music-add',
                element: MusicAdd
            },
            {
                name: "音乐列表",
                path: '/music-list',
                element: MusicList
            },
            // {
            //     path: '/project-add',
            //     component: ProjectAdd
            // },
            // {
            //     path: '/project',
            //     component: Projects
            // },
            {
                name: "标签列表",
                path: '/tags-list',
                element: Tags
            },
            {
                name: "添加标签",
                path: '/tags-add',
                element: TagAdd
            },
            {
                name: "个人信息",
                path: '/personal',
                element: Personal
            },
            {
                name: "用户管理",
                path: '/user',
                element: User
            }
        ]
    },
    // {
    //     path: '*',
    //     component: Page404
    // }
]
const syncRouter = (table: SyncRoute.Routes[]): any[] => {
    let mRouteTable: any[] = []
    table.forEach(route => {
        mRouteTable.push({
            name: route.name,
            path: route.path,
            element: (
                <Suspense fallback={<Spin tip="Loading..."/>}>
                    <route.element/>
                </Suspense>
            ),
            children: route.children && syncRouter(route.children)
        })
    })
    return mRouteTable
}
console.log(syncRouter(RouteTable))
// 直接暴露成一个组件调用
export default () => useRoutes(syncRouter(RouteTable))
