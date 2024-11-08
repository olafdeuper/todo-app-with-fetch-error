<template>
  <div class="todo-output">
    <h2>Your Todos</h2>
    <ul class="todo-list" id="todo-list">
      <SingleTodo />
    </ul>
  </div>
</template>

<script>
import SingleTodo from '@/components/SingleTodo.vue'

export default {
  components: {
    SingleTodo,
  },
}
</script>
<style scoped>
.todo-output > ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.todo-output > h2 {
  margin-bottom: 1rem;
  padding-left: 2rem;
}
</style>
