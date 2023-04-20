import './cardform.scss'
import '../../sass/_colors.scss'
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCards } from '../../actions/walletAction';

function CardForm(props) {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [cardNumber, setCardnumber] = useState()
  const [cardHolder, setCardholder] = useState()
  const [cardValid, setCardvalid] = useState()
  const [cardCcv, setCardCcv] = useState()
  const [cardVendor, setCardVendor] = useState()

  function handleClick() {
    const creditCard = {
      cardNumber: cardNumber,
      cardHolder: cardHolder,
      cardValid: cardValid,
      cardCcv: cardCcv,
      cardVendor: cardVendor.split(' '),
      cardId: cardNumber, // Kortnummret får vara ID:et som vi skickar med i Redux för att sena användas när vi väljer kort ur Stack
    }

    dispatch(addToCards(creditCard)); // Skickar vald produkt till Redux store
    navigate(-1)
  }

  return (
    <>
      <section className='card-form'>

        <span className='card-form__number'>Card number</span>

        <input className='card-form__number-input' maxLength='16' type="text" placeholder='1234 5678 9101 1121'
          onChange={(event) => { setCardnumber(event.target.value); props.setInputNumber(event.target.value) }} />

        <span className='card-form__name'>Cardholder name</span>

        <input className='card-form__name-input' type="text" placeholder='FIRSTNAME LASTNAME'
          onChange={(event) => { setCardholder(event.target.value); props.setInputHolder(event.target.value) }} />

        <aside className='card-form__smallinputs'>

          <span className='card-form__valid'>Valid thru MM/YY</span>
          <span className='card-form__ccv'>CCV</span>
        </aside>

        <aside className='card-form__smallinputs'>

          <input className='card-form__valid-input' type="text" maxLength='5' placeholder='01 / 25'
            onChange={(event) => { setCardvalid(event.target.value); props.setInputValid(event.target.value) }} />

          <input className='card-form__ccv-input' type="password" maxLength='3' placeholder='XXX'
            onChange={(event) => setCardCcv(event.target.value)} />

        </aside>

        <span className='card-form__vendor'>Vendor</span>

        <select className='card-form__select' type="text" onChange={(event) => { setCardVendor(event.target.value); props.setInputVendor(event.target.value) }}  >

          <option value=''></option>
          <option value="bitcoin #FFAE34 #000000">BITCOIN INC</option>
          <option value="ninja #222222 #FFFFFF">NINJA BANK</option>
          <option value="blockchain #8B58F9 #FFFFFF">BLOCK CHAIN INC</option>
          <option value="evil #F33355 #FFFFFF">EVIL CORP</option>

        </select>

        <button onClick={handleClick} className='card-form__button'>Add Card</button>

      </section>
    </>
  )
}

export default CardForm;