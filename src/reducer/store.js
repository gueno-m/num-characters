const initialState = {
    messages: [],
    message: ''
};

const reducer = (state, action) => {

    switch (action.type) {
        case 'SET_MESSAGE':
            return {
                ...state, message: action.message
            }
            
        case 'ADD':
            console.log(state)
            return {...state, messages: state.messages.concat(state.message),
                message: ''};
        case 'DELETE':
            return {...state};
        default:
            return state;
    }
}

export {reducer, initialState};