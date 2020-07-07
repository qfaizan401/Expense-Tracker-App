import React, { useState } from 'react'

const AddTransection = () => {
    const [Description, setDescription] = useState('')
    const [Amount, setAmount] = useState(0)
    return(
        <div>
            <h3>Add new transaction</h3>
            <form>
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