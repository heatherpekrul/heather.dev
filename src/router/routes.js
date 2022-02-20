export default [
    {
        path: '/',
        name: 'HomeView',
        meta: {
            title: 'Home'
        },
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/about',
        name: 'AboutView',
        meta: {
            title: 'About'
        },
        component: () => import('../views/About.vue'),
    },
    {
        path: '/contact',
        name: 'ContactView',
        meta: {
            title: 'Contact'
        },
        component: () => import('../views/Contact.vue'),
    },
    {
        path: '/work',
        name: 'WorkView',
        meta: {
            title: 'Work'
        },
        component: () => import('../views/Work.vue'),
    },
    {
        path: '/:pathMatch(.*)',
        name: 'ErrorView',
        meta: {
            title: 'Error'
        },
        component: () => import('../views/Error.vue'),
    }
  ];