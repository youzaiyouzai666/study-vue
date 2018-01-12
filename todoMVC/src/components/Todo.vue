<template>
    <li :class="{completed: todo.completed, editing: todo.editing}">
        <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed">
            <label @dblclick="editTodo(todo)">{{todo.label}}</label>
            <button class="destroy" @click="$emit('remove',todo)"></button>
        </div>
        <input class="edit" v-model="todo.label" v-auto-focus="todo.editing" @keyup.enter="finishEdit(todo)"
               @blur="finishEdit(todo)" @keyup.esc="cancelEdit(todo)">
    </li>
</template>

<script>
    export  default {
        name:'Todo',
        props: ['todo'],
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
                todo.editing             = true;
            },
            finishEdit     : function (todo) {
                if (!todo.editing) {
                    return;
                }
                todo.editing = false;
                if (!todo.label) {
                    this.removeTodo(todo);
                }
            },
        }
    }
</script>