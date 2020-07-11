import React from 'react'

const Transection = ({transection}) => {
    const sign = transection.amount < 0 ? '-' : '+'

    return(
        <div>
            <li className={transection.amount < 0 ? 'minus' : 'plus'}>
                {transection.text} <span>{sign}Rs:{Math.abs(transection.amount)}</span><button className="delete-btn">x</button>
            </li>
        </div>
    )
}

export default Transection