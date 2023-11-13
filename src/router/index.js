import Vue from 'vue';
import VueRouter from 'vue-router';
import TodoList from '../components/TodoList';
import TodoDetail from '../components/TodoDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: TodoList,
  },
  {
    path: '/todo/:id',
    name: 'todo-detail',
    component: TodoDetail,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
