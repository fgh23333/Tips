import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import content from '../views/content.vue'
import chinese from '../views/chinese.vue'
import mathematics from '../views/mathematics.vue'
import english from '../views/english.vue'
import physics from '../views/physics.vue'
import chemistry from '../views/chemistry.vue'
import biology from '../views/biology.vue'
import politics from '../views/politics.vue'
import history from '../views/history.vue'
import geography from '../views/geography.vue'
import IT from '../views/IT.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: 'content',
        name: 'content',
        component: content
      },          {
        path: 'content0',
        name: 'chinese',
        component: chinese
      },
      {
        path: 'content1',
        name: 'mathematics',
        component: mathematics
      },
      {
        path: 'content2',
        name: 'english',
        component: english
      },
      {
        path: 'content3',
        name: 'physics',
        component: physics
      },
      {
        path: 'content4',
        name: 'chemistry',
        component: chemistry
      },
      {
        path: 'content5',
        name: 'biology',
        component: biology
      },
      {
        path: 'content6',
        name: 'politics',
        component: politics
      },
      {
        path: 'content7',
        name: 'history',
        component: history
      },
      {
        path: 'content8',
        name: 'geography',
        component: geography
      },
      {
        path: 'content9',
        name: 'IT',
        component: IT
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
