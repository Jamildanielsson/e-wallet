import React from 'react'
import './top.scss'

function Top() {

    return (
        <>
            <section className='top'>
                <h1 className='top__heading'> E-wallet </h1>
            </section>
            <h2 className='top__activecard'>PRESS LOGO TO ACTIVATE CARD</h2>
            <h6 className='top__activecard'>Active card</h6>
        </>
    )
}

export default Top;