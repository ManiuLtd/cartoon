
import { RouterURL,routerAuth} from '@/common/env'

const Index = () => import(/* webpackChunkName: "ubi-index" */ '@/pages/Index')
const Detail = () => import(/* webpackChunkName: "ubi-Detail" */ '@/pages/web/Detail')
const Preview = () => import(/* webpackChunkName: "ubi-preview" */ '@/pages/web/Preview')
const NotFound = () => import(/* webpackChunkName: "ubi-index" */ '@/pages/common/NotFound')



const Routers = [
    {
        path:RouterURL['*'].path,
        name: RouterURL['*'].name,
        meta:{
            title:RouterURL['*'].title,
        },
        component: NotFound
    },
    {
        path: RouterURL['index'].path,
        name: RouterURL['index'].name,
        meta:{
            title:RouterURL['index'].title,
        },
        component: Index
    },
    {
        path: RouterURL['detail'].path,
        name: RouterURL['detail'].name,
        meta:{
            title:RouterURL['detail'].title,
        },
        component: Detail
    },
    {
        path: RouterURL['preview'].path,
        name: RouterURL['preview'].name,
        meta:{
            title:RouterURL['preview'].title,
        },
        component: Preview
    },
]

export default Routers
