import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalContext'

const Transection = ({transection}) => {
    const {deleteTransection} = useContext(GlobalContext)
    const sign = transection.amount < 0 ? '-' : '+'

    return(
        <div>
            <li className={transection.amount < 0 ? 'minus' : 'plus'}>
                {transection.text} <span>{sign}Rs:{Math.abs(transection.amount)}</span><button onClick={() => deleteTransection(transection.id)} className="delete-btn">x</button>
            </li>
        </div>
    )
}

export default Transection