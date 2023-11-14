import {createRouter, createWebHashHistory} from 'vue-router';
import TodoList from '../components/TodoList';
import TaskDetails from '../components/TaskDetails.vue';

const routes = [
  {
    path: '/',
    name: 'list',
    component: TodoList,
  },
  {
    path: '/tasks/:taskId',
    name: 'TaskDetails',
    component: TaskDetails, 
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
});

export default router;
