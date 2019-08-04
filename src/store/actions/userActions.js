import axios from 'axios'

export const loadUsers = () => {
    return (dispatch) => {
        axios.get('/api/users/list').then((response) => dispatch({
            type: "USERS_LOAD",
            payload: response
        })).catch((response) => console.log(response))
    };
}

export const loadUser = (id) => {
    return (dispatch) => {
        axios.get('/api/users/find', {
            params: { id }
        }).then((response) => dispatch({
            type: "USER_LOAD",
            payload: response
        })).catch((response) => console.log(response))
    };
}