<template>
  <div class="flex items-center justify-center flex-col">
    <h1 class="text-5xl font-bold text-white">To do List</h1>
    <TodoForm @addTodo="addTodo" />
    <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @toggleCompletion="toggleCompletion" @deleteTask="deleteTask" />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import TodoForm from "./TodoForm.vue";
import localStorageService from "../../localStorageService.js";

export default {
  data() {
    return {
      todos: [{ completed: false, id: 0, name: '' }],
    };
  },
  created() {
    this.todos = localStorageService.get("todos") || [];
  },
  methods: {
    addTodo(newTodo) {
      this.todos.unshift(newTodo);
      this.updateLocalStorage();
    },
    toggleCompletion(todoId) {
      const index = this.todos.findIndex((todo) => todo.id === todoId);
      if (index === -1) return;
      this.todos[index].completed = !this.todos[index].completed;
      this.updateLocalStorage();
    },
    deleteTask(todoId) {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorageService.set("todos", this.todos);
    },
  },
  components: {
    TodoItem,
    TodoForm,
  },
};
</script>
