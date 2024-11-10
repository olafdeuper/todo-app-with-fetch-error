<template>
  <Teleport to="body">
    <div v-if="this.store.showPopup" class="modal">
      <p>Hello from the modal!</p>
      <h3>Hallo world</h3>
      <button @click="this.store.showPopup = false">Close</button>
    </div>
  </Teleport>
</template>

<script>
import { useTodosStore } from '@/stores/todos.js'
export default {
  data() {
    return {
      visible: false,
      store: useTodosStore(),
    }
  },
}
</script>

<style scoped>
.modal {
  --popup-height: 150px;
  --popup-width: 400px;
  background-color: lightgray;
  position: fixed;
  top: 15%;
  left: 50%;
  width: var(--popup-width);
  height: var(--popup-height);
  margin-left: calc(var(--popup-width) / 2 * -1);
  margin-top: calc(var(--popup-height) / 2 * -1);
  border: 3px solid var(--c-td-blue);
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 5px 5px 10px black;
}
</style>
