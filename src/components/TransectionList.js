import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalContext'
import Transection from './Transection'

const TransectionList = () => {
    const {transection} = useContext(GlobalContext)
    return(
        <div>
            <h3>History</h3>
            <ul className="list">
                {transection.map(transection => (<Transection key={transection.id} transection={transection}/>))}
            </ul>
        </div>
    )
}

export default TransectionList