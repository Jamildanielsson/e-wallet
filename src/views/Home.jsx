import React from 'react'
import { useNavigate } from 'react-router-dom';
import Top from '../components/top/Top'
import Card from '../components/card/Card';
import CardStack from '../components/cardstack/CardStack';
import './home.scss'

function Home() {

  const navigate = useNavigate()

  function handleClick() {
    navigate('/addcard')
  }

  return (
    <>
      <article className='wallet-article'>

        <Top />
        <Card />
        <CardStack />

        <button onClick={handleClick} className='wallet-article__button'>ADD A NEW CARD</button>
      </article>
    </>
  )
}
export default Home;