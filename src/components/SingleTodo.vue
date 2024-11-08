<template>
  <li
    tabindex="0"
    class="single-todo"
    id="todo-li"
    v-for="todo in store.todosFiltered"
    :key="todo.id"
  >
    <textarea
      cols="21"
      rows="auto"
      wrap="soft"
      maxlength="58"
      name="text-description"
      id="text-description"
      v-model="todo.description"
      class="form-description"
      @change="todo.description = $event.target.value"
      :class="{ 'p-linethrough': todo.done }"
      :disabled="todo.protected"
    ></textarea>

    <input
      tabindex="-1"
      type="checkbox"
      id="todo-chk"
      class="chk-done"
      :checked="todo.done"
      @change="todo.done = $event.target.checked"
    />
    <label for="todo-chk">done</label>

    <EditButton :singleTodo="todo" />
    <DateInput />
  </li>
</template>

<script>
import EditButton from '@/components/EditButton.vue'
import DateInput from '@/components/DateInput.vue'

import { useTodosStore } from '@/stores/todos.js'

export default {
  beforeUnmount() {
    console.log('before unmount single')
    // await this.store.clearTodosOnServer()
    // await this.store.saveTodosOnServer()
  },
  data() {
    return {
      store: useTodosStore(),
    }
  },

  components: {
    EditButton,
    DateInput,
  },

  updated() {
    console.log('updatedsingle')
    localStorage.setItem('state', JSON.stringify(this.store.todos))
  },
}
</script>

<style scoped>
.single-todo {
  display: inline-grid;
  grid-template-columns: repeat(1fr, 10);
  grid-template-rows: repeat(1fr, 2);
  grid-template-areas:
    'text text text text text text text text text text'
    'done label date edit edit edit edit edit edit edit';
  width: 84%;
  border: none;
  border-radius: 0.25rem;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  padding: 0 0.25rem 0.5rem 0.25rem;
  margin-bottom: 0.75rem;
  background-color: white;
}

.single-todo:focus {
  outline: 2px solid var(--c-td-gold);
  box-shadow: 4px 4px var(--c-td-red);
}

.single-todo:focus-within {
  outline: 2px solid var(--c-td-gold);
  box-shadow: 4px 4px var(--c-td-red);
}

.form-description {
  width: 95%;
  grid-area: text;
  background-color: white;
  font-family: monospace;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  text-decoration: none;
  border: none;
  resize: none;
}

.form-description:focus {
  outline: none;
}

.p-linethrough {
  text-decoration: line-through;
}

.chk-done:checked {
  background-color: var(--c-td-green);
}

.chk-done:checked:after {
  content: '\2714';
  color: white;
}

.chk-done {
  text-align: center;
  vertical-align: middle;
  width: 1.5rem !important;
  height: 1.5rem !important;
  appearance: none;
  border-radius: 20%;
  border: 2px solid black;
  box-shadow: none;
  font-size: 1em;
}

.single-todo > button {
  font-size: 0.65rem;
  height: 1.5rem;
  aspect-ratio: 1;
  box-shadow: 2px 2px var(--c-td-red);
}

label {
  font-family: Arial, Helvetica, sans-serif;
  grid-area: label;

  align-self: center;
}
</style>
