<template lang="pug">
form.min-h-20vh.flex.item-center.justify-center.mt-10(@submit.prevent="addTodo")
  input(v-model="newTodoText" type="text" class="h-10 w-1/2")
  button(type="submit" class="p-2 bg-white text-2xl hover:bg-orange-400 h-10") <span class="material-icons">add</span>
</template>

<script>
export default {
  data() {
    return {
      newTodoText: "",
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoText.trim() !== "") {
        this.$emit("addTodo", {
          id: Date.now(),
          text: this.newTodoText,
          completed: false,
        });
        this.newTodoText = "";
      }
    },
  },
};
</script>
