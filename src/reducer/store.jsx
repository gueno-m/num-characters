const initialState = {
    messages: [],
    message: '',
    // messageColors: [],
    // messageColor: '',
    // messageSizes: [],
    // messageSize: ''
};

const reducer = (state, action) => {

    switch (action.type) {
        case 'SET_MESSAGE':
            return {
                ...state, message: action.message
            }
        
        // case 'SET_COLOR':
        //     return {
        //         ...state, messageColor: action.messageColor,
        //     }

        // case 'SET_SIZE':
        //     return {
        //         ...state, messageSize: action.messageSize,
        //     }

        case 'ADD':
            console.log(state)
            return {...state, messages: state.messages.concat(state.message),
                message: '',
                // ...state, messageColors: state.messageColors.concat(state.messageColor),
                // messageColor: '',
                // ...state, messageSizes: state.messageSizes.concat(state.messageSize),
                // messageSize: ''
            };

        case 'DELETE':
            return {...state};
        default:
            return state;
    }
}

export {reducer, initialState};