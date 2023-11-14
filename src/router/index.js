import {createRouter, createWebHashHistory} from 'vue-router';
import TodoList from '../components/TodoList';

const routes = [
  {
    path: '/',
    name: 'list',
    component: TodoList,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
});

export default router;
