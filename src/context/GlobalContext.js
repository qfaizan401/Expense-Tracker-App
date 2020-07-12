//Gobal State

import React, { createContext,useReducer } from 'react'
import AppReducer from './AppReducer'

// Create Initial State
const initialState = {
    transection: []
}

// Create Global Context
export const GlobalContext = createContext(initialState)

//Provider
export const GlobalProvider = ( {children} ) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Action
    const deleteTransection = (id) => {
        dispatch({
            type: 'DELETE_TRANSECTION',
            payload: id
        })
    }

    const addTransection = (transection) => {
        dispatch({
            type: 'ADD_TRANSECTION',
            payload: transection
        })
    }

    return(
        <GlobalContext.Provider value={
            {
                transection: state.transection,
                deleteTransection,
                addTransection
            }
        }>
            { children }
        </GlobalContext.Provider>
    )
}