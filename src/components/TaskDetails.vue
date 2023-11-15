<template lang="pug">
div
    h2 Liste des tâches
    router-link(to="/", tag="button").bg-blue-500.rounded Retour à l'accueil 
    h2 Tâche sélectionnée, éditable :
    input(v-model="selectedTask.text" type="text" class="h-10 w-1/2")
    button(type="submit" class="bg-blue-500 hover:bg-orange-400 h-10" @click="acceptChanges") <span>Accepter changement</span>
    p ID : {{ selectedTask.id }}
    p Finis ? : {{ selectedTask.completed }}
</template>

<script>
import localStorageService from "../../localStorageService.js";

export default {
  data() {
    return {
      selectedTask: {}
    };
  },
  mounted() {
    this.loadSelectedTask();
  },
  methods: {
    loadSelectedTask() {
      const taskId = this.$route.params.taskId;
      const todosFromLocalStorage = localStorageService.get("todos");

      if (todosFromLocalStorage) {
        const task = todosFromLocalStorage.find(task => task.id.toString() === taskId);
        if (task) {
          this.selectedTask = { ...task };
        }
      }
    },
    acceptChanges() {
      const todosFromLocalStorage = localStorageService.get("todos");

      if (todosFromLocalStorage) {
        const taskId = this.selectedTask.id.toString();
        const updatedTodos = todosFromLocalStorage.map(task => {
          if (task.id.toString() === taskId) {
            task.text = this.selectedTask.text;
          }
          return task;
        });

        localStorageService.set("todos", updatedTodos);
      }
    }
  }
};
</script>
