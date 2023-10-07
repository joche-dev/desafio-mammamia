import { Link } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import imgLogo from '../assets/imgs/Logo.png';

export default function Navigation() {
  return (
    <Navbar>
      <Container className="py-3">
        <Link to={'/'} className='logo'>
          <img src={imgLogo} alt="Logo Pizza" />
          <span>Pizzeria Mamma Mia!</span>
        </Link>
        <Link to={'/carrito'} className='cart'>
            🛒
        </Link>
      </Container>
    </Navbar>
  );
}
