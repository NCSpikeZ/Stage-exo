<template>
  <div>
    <h2>Détails de la tâche</h2>
    <p>ID de la tâche : {{ taskDetails.id }}</p>
    <p>Texte de la tâche : {{ taskDetails.text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    taskId: Number,
    todos: Array
  },
  data() {
    return {
      taskDetails: {}
    };
  },
  created() {
      if (Array.isArray(this.todos) && this.todos.length > 0) {
      this.taskDetails = this.todos.find(todo => todo.id === this.taskId);
    }
  },
};
</script>
