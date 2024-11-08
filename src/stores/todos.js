import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', {
  state() {
    return {
      todos: [
        {
          id: 'id-' + window.crypto.randomUUID(),
          done: true,
          protected: true,
          description: 'Learn Vue',
        },
        {
          id: 'id-' + window.crypto.randomUUID(),
          done: false,
          protected: true,
          description: 'Learn Python',
        },
        {
          id: 'id-' + window.crypto.randomUUID(),
          done: false,
          protected: true,
          description: 'Learn Astro.js',
        },
      ],
      todosFiltered: [],
      serverUrl: 'http://localhost:3030/todos/',
      showPopup: false,
    }
  },
  getters: {},

  actions: {
    async getTodos() {
      try {
        this.todos = await fetch(this.serverUrl).json()
      } catch (error) {
        console.log('GET: Keine Verbindung zum Server!!')
        this.showPopup = true
        let result = localStorage.getItem('state') || []
        if (result.length > 0) {
          this.todos = JSON.parse(result)
        }
        return error
      }
    },

    async saveTodosOnServer() {
      try {
        await this.todos.forEach(item =>
          fetch(this.serverUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item),
          }),
        )
      } catch (error) {
        console.log('POST: Keine Verbindung zum Server!!')
        console.log(error)
        this.showPopup = true
        return error
      }
    },

    async deleteTodo(id) {
      try {
        const request = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
        }
        await fetch(this.serverUrl + id, request)
      } catch (error) {
        console.log('DELETE: Keine Verbindung zum Server!!')
        this.showPopup = true
        return error
      }
    },

    async changeTodo(id, todo) {
      try {
        const request = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(todo),
        }
        await fetch(this.serverUrl + id, request)
      } catch (error) {
        console.log('PUT: Keine Verbindung zum Server!!')
        this.showPopup = true
        return error
      }
    },

    async clearTodosOnServer() {
      try {
        const response = await fetch(this.serverUrl)
        let allIds = await response.json()
        allIds = allIds.map(item => item.id)
        await allIds.forEach(id => {
          this.deleteTodo(id)
        })
      } catch (error) {
        console.log('DELETE: Keine Verbindung zum Server!!')
        this.showPopup = true
        return error
      }
    },
  },
})
