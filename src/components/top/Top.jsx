import React from 'react'
import './top.scss'

function Top() {

    return (
        <>
            <section className='top'>
                <h1 className='top__heading'> E-wallet </h1>
            </section>
            <h2 className='top__activecard'>PRESS CARDLOGO TO ACTIVATE CARD</h2>
            <h6 className='top__activecard'><u>Active card</u></h6>
        </>
    )
}

export default Top;