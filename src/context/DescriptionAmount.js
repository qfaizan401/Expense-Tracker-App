//Gobal State

import React, { createContext,useReducer } from 'react'

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
export const DescriptionAmountContext = createContext(initialState)

export const GlobalProvider = ( children ) => {

    return(
        <GlobalProvider value={
            {
                transection: state.transection
            }
        }>
            { children }
        </GlobalProvider>
    )
}