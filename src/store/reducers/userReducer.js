const starsReducer = (state = {
    list: [],
    current: {
        name: null
    }
}, action) => {
    switch (action.type) {
        case "USERS_LOAD":
            state = {
                ...state,
                list: action.payload.data
            }
            break;

        case "USER_LOAD":
            state = {
                ...state,
                current: action.payload.data
            }
            break;

        default:
            break;
    }
    return state;
};

export default starsReducer;