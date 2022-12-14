<template>
  <h1>Lista de tarea de Thanos</h1>
  <!-- <h4>Total Tareas: {{ $store.state.todos.length }}</h4> -->
  <h4>Total Tareas: {{ all.length }} tareas</h4>
  <h4>Total pendientes: {{ todosPending.length }} tareas</h4>
  <h4>Total completadas: {{ todosCompleted.length }} tareas</h4>
  <hr />
  <button :class="{ 'active': currentTab === 'all' }" @click="currentTab = 'all'">
    Todos
  </button>
  <button
    :class="{ 'active2': currentTab === 'todosPending' }"
    @click="currentTab = 'todosPending'"
  >
    Pendientes
  </button>
  <button
    :class="{ 'active3': currentTab === 'todosCompleted' }"
    @click="currentTab = 'todosCompleted'"
  >
    Completados
  </button>
  <div>
    <ul>
      <li
        v-for="todo in getTodosByTab"
        :key="todo.id"
        :class="{ completed: todo.completed }"
      >
        {{ todo.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const currentTab = ref('all')
    return {
      currentTab,
      all: computed(() => store.getters['allTodos']),
      todosCompleted: computed(() => store.getters['completedTodos']),
      todosPending: computed(() => store.getters['pendingTodos']),
      getTodosByTab: computed(() =>
        store.getters['getTodosByTab'](currentTab.value),
      ),
    }
  },
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
}
ul {
  width: 300px;
  text-align: left;
}
li {
  cursor: pointer;
}
.active {
  background-color: #2c3e50;
  color: white;
}
.active2 {
  background-color: red;
  color: white;
}
.active3 {
  background-color: blue;
  color: white;
}
.completed {
  text-decoration: line-through;
}
</style>
