<template>
  <div class="flex items-center justify-center flex-col">
    <h1 class="text-5xl font-bold text-white mt-40">To do List</h1>

    <TodoForm @addTodo="addTodo" />
    <div class="mt-4 space-x-4">
      <button @click="filterTasks('all')" :class="{ 'bg-blue-500 p-2': filter === 'all' }">Toutes</button>
      <button @click="filterTasks('completed')" :class="{ 'bg-green-500 p-2': filter === 'completed' }">Terminées</button>
      <button @click="filterTasks('not-completed')" :class="{ 'bg-red-500 p-2': filter === 'not-completed' }">Non terminées</button>
    </div>
    <TodoItem
      v-for="todo in filteredTasks"
      :key="todo.id"
      :todo="todo"
      @toggleCompletion="toggleCompletion"
      @deleteTask="deleteTask"
    />
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import TodoForm from "./TodoForm.vue";
import localStorageService from "../../localStorageService.js";

export default {
  data() {
    return {
      todos: [{ completed: false, id: 0, name: "" }],
      filter: "all",
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
    filterTasks(filter) {
      this.filter = filter;
    },
  },
  computed: {
    filteredTasks() {
      if (this.filter === "all") {
        return this.todos;
      } else if (this.filter === "completed") {
        return this.todos.filter((todo) => todo.completed);
      } else if (this.filter === "not-completed") {
        return this.todos.filter((todo) => !todo.completed);
      }
      return [];
    },
  },
  components: {
    TodoItem,
    TodoForm,
  },
};
</script>
