const lowNAMEReducer = (state = {
    data: null
}, action) => {
    switch (action.type) {
        case "DATA":
            state = {
                ...state,
                data: action.payload.data
            }
            break;

        default:
            break;
    }
    return state;
};

export default lowNAMEReducer;