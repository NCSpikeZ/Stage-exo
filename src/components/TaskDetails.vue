<template>
  <div>
    <h2>Détails de la tâche</h2>
    <p>ID de la tâche : {{ taskId }}</p>
    <template v-if="taskDetails">
      <p>Texte de la tâche : {{ taskDetails.text }}</p>
    </template>
    <template v-else>
      <p>Tâche non trouvée.</p>
    </template>
  </div>
</template>

<script>
export default {
  props: ['taskId', 'todos'],
  computed: {
  taskDetails() {
    if (Array.isArray(this.todos)) {
      return this.getById(this.taskId);
    }
    return null;
  },
},
methods: {
  getById(taskId) {
    if (Array.isArray(this.todos)) {
      return this.todos.find(task => task.id === taskId);
    }
    return null;
  },
},
};
</script>
