import { createRouter, createWebHistory } from 'vue-router'
import PublicLayout from '../views/layouts/PublicLayout.vue';
import CabinetLayout from '../views/layouts/CabinetLayout.vue';

// eslint-disable-next-line no-prototype-builtins
const isAuthorized = localStorage.hasOwnProperty('access_token');
const authGuard = function (to, from, next){
  if(!isAuthorized) next({ name: 'LoginPage' });
  else next()
}

const routes = [
  {
    path: '/',
    component: PublicLayout,
    children: [
      {
        path: '',
        name: 'HomePage',
        component: () => import('../views/default-pages/HomePage')
      },
      {
        path: 'login',
        name: 'LoginPage',
        component: () => import('../views/default-pages/LoginPage'),
        meta: {
          footerHidden: true
        }
      },
      {
        path: 'register',
        name: 'RegisterPage',
        component: () => import('../views/default-pages/RegisterPage'),
        meta: {
          footerHidden: true
        }
      },
    ]
  },
  {
    path: '/cabinet',
    component: CabinetLayout,
    beforeEnter: authGuard,
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
        path: 'applications',
        name: 'Applications',
        component: () => import('../views/cabinet-pages/application/ApplicationsPage'),
        meta: {
          title: 'Мои заявки',
          activeNav: '4'
        }
      },
      {
        path: 'application/:application_id',
        name: 'ViewApplication',
        component: () => import('../views/cabinet-pages/application/EditApplicationPage'),
        meta: {
          title: 'Заявка №',
          activeNav: '4'
        }
      },
      {
        path: 'wishlist',
        name: 'Wishlist',
        component: () => import('../views/cabinet-pages/wishlist/WishlistPage'),
        meta: {
          title: 'Мои избранные',
          activeNav: '3'
        }
      },
      {
        path: 'manager/profile',
        name: 'ManagerProfile',
        component: () => import('../views/cabinet-pages/manager/ProfilePage'),
        meta: {
          title: 'Мой профиль',
          activeNav: '1'
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
