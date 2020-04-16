import Vue from 'vue'
import Router from 'vue-router'
import Parent from '../components/parent'
import Child from '../components/child'
import SunZi from '../components/sunzi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Parent',
      redirect: '/child',
      component: Parent,
      children:[
        {
          path: 'child',
          redirect: '/child/sunzi',
          component: Child,
          children:[
            {
              path: 'sunzi',
              component: SunZi
            }
          ]  
        }
      ]
    }
  ]
})
