export const STORAGE_KEY = 'todos-vuexjs';

export const state = {
    todos:JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
};

export const mutations = {
    addTodo(state, {text}) {
        state.todos.push({label: text, completed: false, editing: false})
    },
    removeTodo(state, {todo}) {
        let index = state.todos.indexOf(todo);
        state.todos.splice(index, 1);
    }
};
