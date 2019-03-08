// const Book = () => import('@/views/book/Book')
import Testadd from '../../views/test/Testadd'

const Test = () => import('@/views/test/Test')

const testRouter = {
  path: '/test',
  component: Test,
  meta: {
    title: '测试',
    // menuTab: true,
    icon: 'iconfont icon-demo',
  },
  children: [
    {
      path: '/test/add',
      component: Testadd,
      meta: {
        title: '添加',
        icon: 'iconfont icon-demo',
        auths: ['超级管理员独有权限'],
      },
    },
  ],
}


export default testRouter
