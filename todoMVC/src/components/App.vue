<style src="todomvc-app-css/index.css"></style>
<template>
    <section class="todoapp">
        <!-- header -->
        <header class="header">
            <h1>todos</h1>
            <input class="new-todo" placeholder="What needs to be done?" autofocus v-model="newTodo"
                   @keyup.enter="addTodo">
        </header>
        <!-- main section -->
        <section class="main" v-show="todoList.length">
            <input id="toggle-all" class="toggle-all" type="checkbox">
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                <todo v-for="(todo,index) in filteredTodos" :key="index" :todo="todo" @remove="removeTodo" ></todo>
            </ul>
        </section>
        <!-- footer -->
        <!-- This footer should hidden by default and shown when there are todos -->
        <footer class="footer" v-show="todoList.length">
            <!-- This should be `0 items left` by default -->
            <span class="todo-count"><strong>{{remainingText}}</strong> item left</span>
            <!--Remove this if you don't implement routing-->
            <ul class="filters">
                <li>
                    <a :class="{selected: visibility == 'all'}" href="#/">All</a>
                </li>
                <li>
                    <a :class="{selected: visibility == 'active'}" href="#/active">Active</a>
                </li>
                <li>
                    <a :class="{selected: visibility == 'completed'}" href="#/completed">Completed</a>
                </li>
            </ul>
            <!-- Hidden if no completed items are left ↓ -->
            <button v-show="isCompleted" @click="removeCompleted()" class="clear-completed">Clear completed</button>
        </footer>

    </section>
</template>


<script>
    import Todo from './Todo.vue';


    const filters = {
        all      : function (todos) {
            return todos;
        },
        active   : function (todos) {
            return todos.filter(function (todo) {
                return !todo.completed;
            })
        },
        completed: function (todos) {

            return todos.filter(function (todo) {
                return todo.completed;
            })
        }
    };
    export default {
        components: {Todo},
        data() {
            return {
                newTodo   : '',
                visibility: 'all'
            }
        },

        computed  :  {
            todoList(){
               return this.$store.state.todos
            },
            filteredTodos: function () {
                return filters[this.visibility](this.todoList);
            },
            //active 剩余数量
            remaining    : function () {
                return filters.active(this.todoList).length;
            },
            remainingText: function () {
                if (this.remaining === 0 || this.remaining > 1) {
                    return this.remaining + 'items';
                } else {
                    return this.remaining + 'item';
                }
            },
            //是否显示 “Clear completed”按钮
            isCompleted  : function () {
                return filters.completed(this.todoList).length > 0;
            }
        },
        methods   : {
            addTodo        : function () {
                if (this.newTodo) {
                    let text = this.newTodo.trim();
//                    this.todoList.push({label: text, completed: false, editing: false});
                    this.$store.commit('addTodo',{text});
                    this.newTodo = '';
                }
            },

            removeTodo     : function (todo) {
                let index = this.todoList.indexOf(todo);
                this.todoList.splice(index, 1);
            },
            /**
             * 删除所有 completed
             */
            removeCompleted: function () {
                this.todoList = filters.active(this.todoList);
            }
        }
    }
</script>