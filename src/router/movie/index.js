export default{
    path:'/movie',
    component: () => import('@/views/Movie/index.vue'),//按需加载
    children:[
        {
            path:'city',
            component: () => import('@/components/City/index.vue')
        },
        {
            path:'nowplaying',
            component: () => import('@/components/Nowplaying/index.vue')
        },
        {
            path:'comingsoon',
            component: () => import('@/components/ComingSoon/index.vue')
        },
        {
            path:'search',
            component: () => import('@/components/Search/index.vue')
        },
        {
            path:'/',
            redirect: 'nowplaying'
        }
    ]
}