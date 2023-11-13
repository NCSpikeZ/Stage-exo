<template>
  <div class="flex items-center justify-center flex-col">
        <h1 class="text-5xl font-bold text-white">To do List</h1>
        <TodoForm @addTodo="addTodo" />
        <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" @toggleCompletion="toggleCompletion" @deleteTask="deleteTask"/>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import TodoForm from "./TodoForm.vue";

export default {
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todos.unshift(newTodo);
    },
    toggleCompletion(todoId) {
      const index = this.todos.findIndex((todo) => todo.id === todoId);
      if (index !== -1) {
        this.todos[index].completed = !this.todos[index].completed;
      }
    },
    deleteTask(todoId) {
      this.todos = this.todos.filter((todo) => todo.id !== todoId);
    },
  },
  components: {
    TodoItem,
    TodoForm,
  },
};
</script>