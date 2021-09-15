import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import Layout from '@/layout/layout.vue'
import Login from '@/views/login'
import Home from '@/views/home/index.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    redirect: '/home',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/node',
        redirect: '/node/nodeOne',
        name: 'Node',
        meta: {
          title: '节点管理'
        },
        component: () => import('@/views/nodeManager'),
        children: [
          {
            path: '/node/nodeOne',
            name: 'NodeOne',
            meta: {
              title: '节点一'
            },
            component: () => import('@/views/nodeManager/nodeOne')
          },
          {
            path: '/node/nodeTwo',
            name: 'NodeTwo',
            meta: {
              title: '节点二'
            },
            component: () => import('@/views/nodeManager/nodeTwo'),
            children: [
              {
                path: '/node/nodeOne/plus',
                name: 'NodeOnePlus',
                meta: {
                  title: '节点一0'
                },
                component: () => import('@/views/nodeManager/nodeOne')
              },
              {
                path: '/node/nodeTwo/plus',
                name: 'NodeTwoPlus',
                meta: {
                  title: '节点二0'
                },
                component: () => import('@/views/nodeManager/nodeTwo/nodeTwoPlus')
              }
            ]
          }
        ]
      },
      {
        path: '/home',
        name: 'Home',
        meta: {
          title: '工作台'
        },
        component: Home
      },
      {
        path: '/info',
        name: 'Info',
        meta: {
          title: '账户信息'
        },
        component: () => import('@/views/info')
      },
      {
        path: '/data',
        name: 'Data',
        redirect: '/data/dataList',
        meta: {
          title: '数据管理'
        },
        component: () => import('@/views/data'),
        children: [
          {
            path: '/data/dataList',
            name: 'DataList',
            hidden: true,
            meta: {
              title: '数据列表'
            },

            component: () => import('@/views/data/dataList')
          },
          {
            path: '/article/:articleId',
            name: 'DataDetail',
            hidden: true,
            meta: {
              title: '数据详情'
            },
            props: true,
            component: () => import('@/views/data/dataDetail')
          }
        ]
      },
      {
        path: '/item',
        name: 'Item',
        meta: {
          title: '项目管理'
        },
        component: () => import('@/views/item')
      },
      {
        path: '/point',
        name: 'Point',
        meta: {
          title: '站点管理'
        },
        component: () => import('@/views/point')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})
// 判断用户有没有登录 ,依据就有没有tokan
const routerWhiteList = ['/login']

router.beforeEach((to, from, next) => {
  Nprogress.start()
  const token = store.state.user
  if (token) {
    next()
  } else {
    if (routerWhiteList.includes(to.path)) {
      next()
    } else {
      next({ name: 'Login' })
    }
  }
  Nprogress.done()
})

export default router
