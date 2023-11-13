<template>
  <div id="app">
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  components: {
    TodoList,
  },
};
</script>

<style>
body {
  background: linear-gradient(100deg, rgb(226, 207, 129), rgb(232, 139, 97));
}
</style>