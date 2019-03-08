import poemsRouter from '@/plugins/poem/router.js'

import adminRouter from './modules/admin'
import bookRouter from './modules/book'
import testRouter from './modules/test' // 引入图书管理路由文件


const About = () => import('@/views/about/About')
const Log = () => import('@/views/log/Log')
const Hospital = () => import('@/views/hospital/Hospital')

const homeRouter = [
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: '主页',
      icon: 'iconfont icon-iconset0103',
    },
  },
  // {
  //   path: '/hospital',
  //   name: 'hospital',
  //   component: Hospital,
  //   meta: {
  //     title: '医院',
  //     icon: 'iconfont icon-rizhiguanli',
  //   },
  // },
  {
    path: '/log',
    name: 'log',
    component: Log,
    meta: {
      title: '日志管理',
      icon: 'iconfont icon-rizhiguanli',
      auths: ['查询所有日志'],
    },
  },
  testRouter,
  bookRouter, // 插入路由树
  adminRouter,
  ,
  // poemsRouter,
]

export default homeRouter
