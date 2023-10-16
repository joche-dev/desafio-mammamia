import { Link } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import imgLogo from '../assets/imgs/Logo.png';
import { useContext } from 'react';
import { Context } from '../contexts/PizzaContext';
import IconCart from './IconCart';

export default function Navigation() {
  const { totalCart } = useContext(Context);

  return (
    <Navbar sticky="top">
      <Container>
        <Link to={'/home'} className="logo">
          <img src={imgLogo} alt="Logo Pizza" />
          <span>Pizzeria Mamma Mia!</span>
        </Link>
        <Link to={'/carrito'} className={totalCart ? 'cart-price' : 'cart'}>
          <IconCart tamaño='1.3rem' color='white' />
          {totalCart
            ? '  ' + totalCart.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' }) : null}
        </Link>
      </Container>
    </Navbar>
  );
}
