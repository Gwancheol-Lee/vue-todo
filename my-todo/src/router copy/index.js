import Vue from 'vue'
import Router from 'vue-router'
import TodoHeader from './components/TodoHeader.vue'
import TodoTitle from './components/TodoTitle.vue'
import TodoInput from './components/TodoInput.vue'
import TodoController from './components/TodoController.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoHeader',
      component: TodoHeader,
    },
    {
      path: '/',
      name: 'TodoTitle',
      component: TodoTitle,
    },
    {
      path: '/',
      name: 'TodoInput',
      component: TodoInput,
    },
    {
      path: '/',
      name: 'TodoController',
      component: TodoController,
    },
    {
      path: '/',
      name: 'TodoList',
      component: TodoList,
    },
    {
      path: '/',
      name: 'TodoFooter',
      component: TodoFooter,
    }
  ]
});
