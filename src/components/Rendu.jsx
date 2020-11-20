// import Message from 'Message';

import StyleRendu from '../Styles/StyleRendu';

// const [messages, setMessages] = React.useState(data);

// function onDelete(messageASupprimer) {
//     let indice = messages.indexOf(messageASupprimer);
//     messages.splice(indice, 1);
//     setMessages([...messages]);
// }

export default function Rendu(props) {
    return (
        <StyleRendu>
                <h2>Liste des messages :</h2>

                {/* <button onClick={() => props.onDelete(props.messages)}>Supprimer</button> */}
        </StyleRendu>
    );
}