import { useContext } from 'react';

import StyleRendu from '../Styles/StyleRendu';

import { ProviderContext } from '../Provider';

export default function Rendu(props) {

    const [state, dispatch] = useContext(ProviderContext);
    const {message} = state;
    // const {messageColor} = state.messageColors;
    // const {messageSize} = state.messageSizes;
    const messages = state.messages.map( message =>
        <li>{state.messages}</li>
    );

    console.log(state);
    // console.log(state.messageColors)
    // console.log(state.messageSizes)

    // const StyleMessage = {
    //     color: ${state.messageColors},
    //     font-siez: ${state.messageSizes},
    // }

    return (
        <StyleRendu>
            <div>
                <h2>Liste des messages :</h2>
                {/* <li style={StyleMessage}>{message}</li> */}
                <ul>{messages}</ul>

                {/* <button onClick={() => props.onDelete(props.messages)}>Supprimer</button> */}
            </div>
        </StyleRendu>
    );
}