import React, { useState, useContext } from 'react'
import {GlobalContext} from '../context/GlobalContext'

const AddTransection = () => {
    const {addTransection} = useContext(GlobalContext)
    const [Description, setDescription] = useState('')
    const [Amount, setAmount] = useState(0)
    const onSubmit = (event) => {
        event.preventDefault()
        const newTransection = {
            id: Math.floor(Math.random() * 1000000),
            Description,
            Amount: +Amount
        }
        addTransection(newTransection)
    }
    return(
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit = {onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" 
                        placeholder="Enter text..."  
                        value={Description} 
                        onChange={ (event) => setDescription (event.target.value) }/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount<br />(negative - expense, positive - income)</label>
                    <input type="number" 
                    placeholder="Enter amount..." 
                    value={Amount}
                    onChange={ (event) => setAmount (event.target.value) }/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransection