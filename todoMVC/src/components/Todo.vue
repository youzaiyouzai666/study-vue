<template>
    <li :class="{completed: todo.completed, editing: editing}">
        <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed">
            <label @dblclick="editTodo(todo)">{{todo.label}}</label>
            <button class="destroy" @click="$emit('remove',todo)"></button>
        </div>
        <input class="edit" v-model="todo.label" v-auto-focus="editing" @keyup.enter="finishEdit(todo)"
               @blur="finishEdit(todo)" @keyup.esc="cancelEdit(todo)">
    </li>
</template>

<script>
    export  default {
        name:'Todo',
        props: ['todo'],
        data(){
          return{
              editing:false
          }
        },
        directives: {
            'auto-focus': function (el, binding) {
                if (binding.value) {
                    el.focus();
                }
            }
        },
        methods:{

            editTodo       : function (todo) {
                this.editingTodoOldValue = todo.label;
                this.editing             = true;
            },
            finishEdit     : function (todo) {
                if (!this.editing) {
                    return;
                }
                this.editing = false;
                if (!todo.label) {
                    this.removeTodo(todo);
                }
            },
        }
    }
</script>