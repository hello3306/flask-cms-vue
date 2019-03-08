// const Book = () => import('@/views/book/Book')
import Hospital_add from '../../views/hospital/Hospital_add'

const Hospital = () => import('@/views/hospital/Hospital')

const testRouter = {
  path: '/hospital',
  component: Hospital,
  meta: {
    title: '医院',
    // menuTab: true,
    icon: 'iconfont icon-demo',
  },
  children: [
    {
      path: '/hospital/add',
      component: Hospital_add,
      meta: {
        title: '添加医院',
        icon: 'iconfont icon-demo',
        auths: ['超级管理员独有权限'],
      },
    },
  ],
}


export default testRouter
