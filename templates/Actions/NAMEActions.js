import axios from 'axios'

export const normalAction = (data) => {
    return {
        type: "NORMAL",
        payload: data
    }
}

export const trunkAction = (data) => {
    return (dispatch) => {
        dispatch({
            type: "TRUNK",
            payload: data
        })
    };
}

export const axiosAction = () => {
    return (dispatch) => {
        axios.get('/api/axios').then((response) => dispatch({
            type: "AXIOS",
            payload: response
        })).catch((response) => console.log(response))
    };
}