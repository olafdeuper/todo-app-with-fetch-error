<template>
  <form class="todo-actions">
    <button @click.prevent="removeTodos" id="delete-todos">
      Remove done Todos
    </button>
  </form>
</template>
<script>
import { useTodosStore } from '@/stores/todos.js'
export default {
  data() {
    return {
      store: useTodosStore(),
    }
  },
  methods: {
    removeTodos() {
      this.store.todos = this.store.todos.filter(todo => todo.done === false)
      this.store.todosFiltered = this.store.todos
    },
  },
}
</script>
<style scoped>
.todo-actions {
  padding-left: 2rem;
}

.todo-actions > button {
  height: 2rem;
  aspect-ratio: 6;
  font-size: 1rem;
  margin: 0.75rem 0 3rem;
}
</style>
