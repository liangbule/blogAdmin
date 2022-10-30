import {lazy} from 'react'
import {Route} from 'react-router-dom'
// TODO @loadable/component后续采用

const Layout = lazy(() => import('../common/layout'))
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
const Page404 = lazy(() => import('../pages/pages404 '))

export const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: '/article',
                component: ArticleList
            },
            {
                path: '/article-add',
                component: AddArticle
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
                component: Tags
            },
            {
                path: '/tags-add',
                component: TagAdd
            },
            {
                path: '/',
                component: Home
            }
        ]
    },
    {
        path: '*',
        component: Page404
    }
]

export function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => <route.component {...props} {...route} />}
        />
    )
}