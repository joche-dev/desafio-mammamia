import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { Context } from '../contexts/PizzaContext';

export default function Home() {
  const { pizzas } = useContext(Context);

  return (
    <>
      <Container className="home mb-3">
        <div className="home-body">
          <h1 className="fw-bold">Pizzería Mamma Mia!</h1>
          <p>Tenemos las mejores pizzas que podrás encontrar</p>
        </div>
      </Container>
      <Container>
        <Row xs={1} md={3} lg={4} className="g-3 mb-3">
          {pizzas.map((pizza) => (
            <Col key={pizza.id}>
              <Card>
                <Card.Img src={pizza.img} alt={pizza.name} />
                <Card.Header>
                  <Card.Title className='fw-bold'>{pizza.name}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    Ingredientes:
                    <ul>
                      {pizza.ingredients.map((ingrediente) => (
                        <li>🍕 {ingrediente}</li>
                      ))}
                    </ul>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Card.Text className='fw-bold'>{pizza.price.toLocaleString('es-CL', {style:'currency', currency:'CLP'})}</Card.Text>
                  <Button variant="success">Ver Más</Button>{' '}
                  <Button variant="success">Añadir</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
