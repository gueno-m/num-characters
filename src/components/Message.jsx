import React, { useState, useContext } from 'react';

import { ProviderContext } from '../Provider';

import StyleMessage from '../Styles/StyleMessage';

export default function Message(props) {

    const [state, dispatch] = useContext(ProviderContext);
    const {message} = state;
    // const {messageColor} = state;
    // const {messageSize} = state;
    const [messageSize, setTaille ] = useState('');
    const [messageColor, setTheme ] = useState('');

    const texte = message => message
    .split(' ')
    .map( word => word.length)
    .filter(number => number != 0) + ' ';

    const totalTexte = message => message
    .split(' ').map( word => word.length).reduce(function(a, b){
        return a + b;
    }, 0);

    function onTexteChange(event) {
        dispatch({type:'SET_MESSAGE', message: event.target.value});
    }

    function onTailleChange(event) {
        //     dispatch({type:'SET_SIZE', messageSize: event.target.value});
        setTaille(event.target.value);
    }

    function onThemeChange(event) {
        //     dispatch({type:'SET_COLOR', messageColor: event.target.value});
        setTheme(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch({type: 'ADD'})
    };

    return (
            <StyleMessage>
                <div>
                <h2>Votre message :</h2>
                <form onSubmit={handleSubmit}>

                <input type="text" onChange={onTexteChange} value={message} />
                
                <label>Sélectionner la couleur du texte :</label>

                <select value="messageColor" onChange={onThemeChange} id="" defaultValue = "palevioletred"> 
                    <option value="palevioletred">palevioletred</option>
                    <option value="tomato">tomato</option>
                </select>

                <label>Selectionner la taille du texte :</label>

                <select value="messageSize"  onChange={onTailleChange} id="">
                    <option value="15 px">15 px</option>
                    <option value="16 px">16 px</option>
                    <option value="17 px">17 px</option>
                    <option value="18 px">18 px</option>
                    <option value="19 px">19 px</option>
                    <option value="20 px">20 px</option>
                </select>

                <input type="submit" value="Valider"/>
                </form>
            <h3>Message : <span>{message}</span></h3>
            </div>
            <div>
                <div>
                    <p>Nombre de lettres par mot : <span>{ texte(message) }</span></p>

                    <p>Nombre total de charactère du texte : <span>{ totalTexte(message) } </span></p>

                    <p>Couleur utilisée : <span>{ messageColor } </span></p>

                    <p>Taille de police : <span> { messageSize }</span> </p>
                </div>
            </div>

            </StyleMessage>
    );
}