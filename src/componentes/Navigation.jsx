import { NavLink } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';

export default function Navigation() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container className='py-3'>
        <NavLink to={'/'}>Pizzeria Mamma Mia!</NavLink>
        <NavLink to={'/'}>🛒</NavLink>
      </Container>
    </Navbar>
  );
}
