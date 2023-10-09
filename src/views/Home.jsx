import React from 'react'
import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <Container className='home'>
      <div className='home-body'>
        <h1 className='fw-bold'>Pizzería Mamma Mia!</h1>
        <p>Tenemos las mejores pizzas que podrás encontrar</p>
      </div>
    </Container>
  )
}
