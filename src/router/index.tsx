import React, {lazy, Suspense} from 'react'
import {Route, RouteObject, useRoutes} from 'react-router-dom'
import {DesktopOutlined} from "@ant-design/icons";
// TODO @loadable/component后续采用

// const Layout = lazy(() => import('../layout'))
const Login = lazy(() => import('../pages/login'))
const ArticleList = lazy(() => import('../pages/article-list'))
const AddArticle = lazy(() => import('../pages/article-add'))
// const ArticleClassify = lazy(() => import('../pages/article-classify'))
// const ArticleComments = lazy(() => import('../pages/article-comments'))
// const ArticleDraft = lazy(() => import('../pages/article-draft'))
// const AddMessage = lazy(() => import('../pages/message-add'))
// const MessageList = lazy(() => import('../pages/messages-list'))
// const MusicAdd = lazy(() => import('../pages/music-add'))
// const MusicList = lazy(() => import('../pages/music-list'))
// const ProjectAdd = lazy(() => import('../pages/project-add'))
// const Projects = lazy(() => import('../pages/projects'))
const Tags = lazy(() => import('../pages/tags'))
const TagAdd = lazy(() => import('../pages/tag-add'))
const Home = lazy(() => import('../pages/home'))
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
        element: Home,
        children: [
            {
                path: '/article',
                element: ArticleList
            },
            {
                path: '/article-add',
                element: AddArticle
            },
            // {
            //     path: '/article-classify',
            //     component: ArticleClassify
            // },
            // {
            //     path: '/discuss',
            //     component: ArticleComments
            // },
            // {
            //     path: '/article-draft',
            //     component: ArticleDraft
            // },
            // {
            //     path: '/message-add',
            //     component: AddMessage
            // },
            // {
            //     path: '/message',
            //     component: MessageList
            // },
            // {
            //     path: '/music-add',
            //     component: MusicAdd
            // },
            // {
            //     path: '/music',
            //     component: MusicList
            // },
            // {
            //     path: '/project-add',
            //     component: ProjectAdd
            // },
            // {
            //     path: '/project',
            //     component: Projects
            // },
            {
                path: '/tags',
                element: Tags
            },
            {
                path: '/tags-add',
                element: TagAdd
            },
            // {
            //     path: '/',
            //     component: Home
            // }
        ]
    },
    // {
    //     path: '*',
    //     component: Page404
    // }
]
const syncRouter = (table: SyncRoute.Routes[]): RouteObject[] => {
    let mRouteTable: RouteObject[] = []
    table.forEach(route => {
        mRouteTable.push({
            path: route.path,
            element: (
                <Suspense fallback={<div>路由加载ing...</div>}>
                    <route.element/>
                </Suspense>
            ),
            children: route.children && syncRouter(route.children)
        })
    })
    return mRouteTable
}
// 直接暴露成一个组件调用
export default () => useRoutes(syncRouter(RouteTable))
