<template lang="pug">
.todo-detail
      h2 Todo Detail
      div
        h3 Task Details
        p {{ todo.title }}
        p {{ todo.description }}
      router-link(to="/") Retour à la liste
</template>
  
  <script>
  export default {
    data() {
      return {
        todo: {},
      };
    },
    created() {

    },
  };
  </script>
  
  <style scoped>
  </style>
  