<script setup></script>

<template>
  <TodoHeader />
  <TodoInput />
  <TodoFilter />
  <PopUp />
  <TodoActions />
  <TodoOutput />
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue'
import TodoInput from '@/components/TodoInput.vue'
import TodoFilter from '@/components/TodoFilter.vue'
import TodoActions from '@/components/TodoActions.vue'
import TodoOutput from '@/components/TodoOutput.vue'
import PopUp from '@/components/PopUp.vue'

import { useTodosStore } from '@/stores/todos.js'

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoFilter,
    TodoActions,
    TodoOutput,
    PopUp,
  },
  data() {
    return {
      filter: 'filter-all',
      store: useTodosStore(),
    }
  },

  created() {
    console.log('created')
    this.store.todos = JSON.parse(localStorage.getItem('state'))
    this.store.todosFiltered = this.store.todos
    window.addEventListener('beforeunload', this.backupTodos())
  },

  async deactivated() {
    console.log('before deac APP')
  },

  methods: {
    async backupTodos() {
      try {
        console.log('Backing up')
        await this.store.clearTodosOnServer()
        await this.store.saveTodosOnServer()
      } catch (error) {
        return error
      }
    },
  },
}
</script>
