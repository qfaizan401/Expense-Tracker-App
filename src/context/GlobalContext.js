//Gobal State

import React, { createContext,useReducer } from 'react'
import AppReducer from './AppReducer'

// Create Initial State
const initialState = {
    transection: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

// Create Global Context
export const GlobalContext = createContext(initialState)

//Provider
export const GlobalProvider = ( {children} ) => {
    const [state, /*dispatch*/] = useReducer(AppReducer, initialState)

    return(
        <GlobalContext.Provider value={
            {
                transection: state.transection
            }
        }>
            { children }
        </GlobalContext.Provider>
    )
}