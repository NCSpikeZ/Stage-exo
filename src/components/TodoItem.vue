<template>
  <div :class="{ 'opacity-50': todo.completed }" class="flex items-center bg-white min-h-20vh w-1/2 mt-5 h-10 p-5">
    <router-link :to="{ name: 'TaskDetails', params: { taskId: todo.id }, props: { todos: todos } }">
    <div :class="{ 'line-through': todo.completed }">{{ todo.text }}</div>
    </router-link>
    <div class="ml-auto flex text-white">
      <button @click="toggleCompletion" class="mr-2 bg-green-500 p-2">{{ todo.completed ? 'Non terminé' : 'Terminé' }}</button>
      <button @click="deleteTask" class="bg-red-500 p-2">Supprimer</button>
    </div>
  </div>
</template>
    
<script>
export default {
  props: {
    todo: Object,
  },
  methods: {
    toggleCompletion() {
      this.$emit('toggleCompletion', this.todo.id);
    },
    deleteTask() {
      this.$emit('deleteTask', this.todo.id);
    },
    editTask() {
      this.$emit('editTask', this.todo.id);
    },
  },
};
</script>
