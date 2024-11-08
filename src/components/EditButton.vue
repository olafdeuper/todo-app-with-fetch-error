<template>
  <button
    @click.prevent="editDescription($event.target, singleTodo)"
    id="edit-todo"
  >
    Edit
  </button>
</template>

<script>
export default {
  props: ['singleTodo'],
  methods: {
    editDescription(target, todo) {
      todo.protected = !todo.protected
      todo.protected
        ? (target.innerText = 'Edit ')
        : (target.innerText = 'Save')
    },
  },
}
</script>
<style>
button {
  grid-area: edit;
  justify-self: end;
}
</style>
