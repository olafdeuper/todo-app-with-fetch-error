<template>
  <form class="todo-input">
    <input
      v-model.lazy="description"
      type="text"
      id="new-todo"
      placeholder="Get sh*t done!"
    />
    <button v-on:click.prevent="addTodo" id="add-todo">Add</button>
  </form>
</template>

<script>
import { useTodosStore } from '@/stores/todos.js'
export default {
  data() {
    return {
      store: useTodosStore(),
      description: '',
    }
  },
  methods: {
    async addTodo() {
      let todo = {
        id: 'id-' + window.crypto.randomUUID(),
        done: false,
        protected: true,
        description: this.description,
      }
      this.store.todos.push(todo)
      this.description = ''
    },
  },
}
</script>

<style scoped>
.todo-input {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--c-td-grey);
}

.todo-input > input {
  height: 2rem;
  aspect-ratio: 7.2;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  padding-left: 0.25rem;
  margin-right: 1rem;
}

.todo-input > input:focus {
  outline: 2px solid var(--c-td-gold);
}

.todo-input > button {
  height: 2rem;
  aspect-ratio: 1;
}
</style>
