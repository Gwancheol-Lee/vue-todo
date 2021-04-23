<template>
  <div id="app">
    <TodoHeader/>
    <TodoTitle/>
    <TodoInput/>
    <TodoController/>
    <TodoList/>
    <TodoFooter/>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoTitle from './components/TodoTitle.vue'
import TodoInput from './components/TodoInput.vue'
import TodoController from './components/TodoController.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoTitle,
    TodoInput,
    TodoController,
    TodoList,
    TodoFooter
  }
};
</script>

