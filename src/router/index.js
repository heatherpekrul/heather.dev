import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import Config from '../config';

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ x: 0, y: 0}),
    routes,
});

router.afterEach((to, from) => {
  const default_title = Config.name;
  if (to.meta.title) {
    document.title = `${to.meta.title} | ${default_title}`;
  } else {
    document.title = default_title;
  }
});

export default router;