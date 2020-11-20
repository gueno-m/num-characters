import React, { createContext, useReducer } from "react";

import {reducer, initialState} from './reducer/store';

export const ProviderContext = createContext({});

export default function Provider(props) {

    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    
    <ProviderContext.Provider value={[state, dispatch]}>
        {props.children}
    </ProviderContext.Provider>

  );
}