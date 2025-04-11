import { createRouter, createWebHistory } from 'vue-router'
import PublicLayout from '../views/layouts/PublicLayout.vue';
import CabinetLayout from '../views/layouts/CabinetLayout.vue';

// eslint-disable-next-line no-prototype-builtins
// const isAuthorized = localStorage.hasOwnProperty('token');
// const authGuard = function (to, from, next){
//   if(!isAuthorized) next({ name: 'Login' });
//   else next()
// }

const routes = [
  {
    path: '/',
    component: PublicLayout,
    children: [
      {
        path: '',
        name: 'HomePage',
        component: () => import('../views/default-pages/HomeView')
      },
    ]
  },
  {
    path: '/cabinet',
    component: CabinetLayout,
    children: [
      {
        path: '',
        name: 'Profile',
        component: () => import('../views/cabinet-pages/profile/ProfilePage'),
        meta: {
          title: 'Мой профиль',
          activeNav: '1'
        }
      },
      {
        path: 'programs',
        name: 'Programs',
        component: () => import('../views/cabinet-pages/programs/ProgramsPage'),
        meta: {
          title: 'Программы',
          activeNav: '2'
        }
      },
      {
        path: 'university/:university_id',
        name: 'University',
        component: () => import('../views/cabinet-pages/university/UniversityPage'),
        meta: {
          activeNav: '2'
        }
      },
      {
        path: 'new-application',
        name: 'NewApplication',
        component: () => import('../views/cabinet-pages/application/EditApplicationPage'),
        meta: {
          title: 'Подача заявки',
          activeNav: '4'
        }
      },
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/default-pages/NotFoundPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
