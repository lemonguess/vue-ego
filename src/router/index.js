import Vue from 'vue'
import VueRouter from 'vue-router'
import Lauout from '../views/Layout/index.vue'
import Home from '../views/Home/index.vue'
import Login from '../views/Login/Login.vue'
// 异步
const Report = ()=>import('../views/Report/Report.vue')
const Base = ()=>import('../views/Base/Base.vue')
const Inspection = ()=>import('../views/Inspection/Inspection.vue')
const Maintain = ()=>import('../views/Maintain/Maintain.vue')
const Process = ()=>import('../views/Process/Process.vue')
const Order = ()=>import('../views/Process/Order/index.vue')
const Plan = ()=>import('../views/Process/Plan/index.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Lauout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/report', //分析报表概览
        name: 'Report',
        component: Report
      },
      {
        path: '/base', // 设备台账信息
        name: 'Base',
        component: Base
      },
      {
        path: '/inspection', // 设备检查管理
        name: 'Inspection',
        component: Inspection
      },
      {
        path: '/maintain', // 设备维修保养
        name: 'Maintain',
        component: Maintain
      },
      {
        path: '/process', // 业务流程管理
        name: 'Process',
        component: Process,
        // redirect: '/process/order',
        children: [
          {
            path: 'order',
            component: Order,
          },
          {
            path: 'plan',
            component: Plan,
          },
        ]
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
