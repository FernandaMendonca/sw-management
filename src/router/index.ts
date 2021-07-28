import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import firebase from 'firebase';
import Home from '../views/Home.vue';
import ResetSenha from '../views/ResetSenha.vue';
import Login from '../views/Login.vue';
import Cadastro from '../views/Cadastro.vue';
import Novo from '../views/Novo.vue';
import Detalhes from '../views/Detalhes.vue';
import Editar from '../views/Editar.vue';
import NotFound from '../views/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'NotFound',
    component: NotFound,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/reset',
    name: 'ResetSenha',
    component: ResetSenha,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro,
  },
  {
    path: '/detalhes',
    name: 'Detalhes',
    component: Detalhes,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/editar',
    name: 'Editar',
    component: Editar,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/novo',
    name: 'Novo',
    component: Novo,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { currentUser } = firebase.auth();
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('home');
  else next();
});

export default router;
