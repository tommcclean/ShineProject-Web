import axios from 'axios';

export default {
    addTodo(listId, todoItemName) {
        var requestModel = {
            title: todoItemName
        };

        return axios.post(`/lists/${listId}/todoItems`, requestModel)
            .then(response => response.data);
    },
    changeTitle(listId, todoItemId, newTitle) {
        return axios.put(`/lists/${listId}/todoItems/${todoItemId}/title`, {
            title: newTitle
        });
    },
    changeState(listId, todoItemId, state) {
        var requestModel = {
            state: state
        };

        return axios.put(`/lists/${listId}/todoItems/${todoItemId}/state`, requestModel);
    },
    deleteTodo(listId, todoItemId) {
        return axios.delete(`/lists/${listId}/todoItems/${todoItemId}`);
    },
    toggleImportance(listId, todoItemId, isImportant) {
        var requestModel = {
            isImportant: !isImportant
        };

        return axios.put(`/lists/${listId}/todoItems/${todoItemId}/importance`, requestModel);
    }
}