import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalContext'

const Balance = () => {
    const {transection} = useContext(GlobalContext)

    const amounts = transection.map(transection => transection.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return(
        <div>
            <h4>Your Balance</h4>
            <h1>Rs: {total}/=</h1>
        </div>
    )
}

export default Balance