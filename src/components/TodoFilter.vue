<template>
  <form
    @change="filterTodos($event.target)"
    class="todo-filter"
    id="todo-filter"
  >
    <h2>Filter & Options</h2>
    <input
      type="radio"
      class="btn-radio"
      name="todo-filter"
      value="all"
      id="filter-all"
      checked
    />
    <label for="filter-all">All</label><br />
    <input
      type="radio"
      class="btn-radio"
      name="todo-filter"
      value="open"
      id="filter-open"
    />
    <label for="filter-open">Open</label><br />
    <input
      type="radio"
      class="btn-radio"
      name="todo-filter"
      value="done"
      id="filter-done"
    />
    <label for="filter-done">Done</label>
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
    filterTodos(target) {
      this.filter = target.id

      if (this.filter === 'filter-all') {
        this.store.todosFiltered = this.store.todos
      } else if (this.filter === 'filter-done') {
        this.store.todosFiltered = this.store.todos.filter(
          todo => todo.done === true,
        )
      } else if (this.filter === 'filter-open') {
        this.store.todosFiltered = this.store.todos.filter(
          todo => todo.done === false,
        )
      }
    },
  },
}
</script>

<style scoped>
h2 {
  margin-bottom: 0.5rem;
}

label {
  position: absolute;
  margin-left: 0.5rem;
}

.todo-filter {
  position: relative;
  height: 120px;
  padding-left: 2rem;
}

.todo-filter > input {
  margin-bottom: 0.5rem;
}

.btn-radio {
  appearance: none;
  border-radius: 50%;
  /* background: var(--c-td-blue); */
  border: 0.5rem solid var(--c-td-grey);
  box-shadow: 0 0 0 1px black;
}

.btn-radio:checked {
  border: 0.5rem solid var(--c-td-blue);
}

.btn-radio:focus {
  box-shadow: 0 0 0 1px var(--c-td-gold);
}
</style>
