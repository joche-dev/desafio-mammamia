import { Container, Table, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { Context } from '../contexts/PizzaContext';

export default function Carrito() {
  const { cart, setCart, totalCart } = useContext(Context);

  return (
    <Container className="carrito p-0 mt-3">
      <h1 className="fs-4">Detalle del pedido:</h1>
      <Table responsive>
        <tbody>
          {cart.map((pizza, index)=>(
            <tr key={index}>
              <td><img src={pizza.img} alt={pizza.name} /></td>
              <td className='w-75 text-capitalize'>{pizza.name}</td>
              <td><Button>-</Button></td>
              <td>{pizza.count}</td>
              <td><Button>+</Button></td>
              <td>=</td>
              <td>{(pizza.count * pizza.price).toLocaleString('es-CL', {
                      style: 'currency',
                      currency: 'CLP',
                    })}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan='5' className='text-end fw-bold'>Total</td>
            <td>=</td>
            <td className='fw-bold'>{totalCart.toLocaleString('es-CL', {
                      style: 'currency',
                      currency: 'CLP',
                    })}</td>
          </tr>
        </tfoot>
      </Table>
      <Button className='float-end'>Ir a pagar</Button>
    </Container>
  );
}
