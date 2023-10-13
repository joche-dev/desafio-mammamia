import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../contexts/PizzaContext';

export default function Home() {
  const { pizzas } = useContext(Context);
  const navigate = useNavigate();

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
                  <Card.Text className='fw-bold m-0'>{pizza.name}</Card.Text>
                </Card.Header>
                <Card.Body>
                    Ingredientes:
                    <ul>
                      {pizza.ingredients.map((ingrediente, index) => (
                        <li key={index}>🍕 {ingrediente}</li>
                      ))}
                    </ul>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Card.Text className='fw-bold mb-2'>{pizza.price.toLocaleString('es-CL', {style:'currency', currency:'CLP'})}</Card.Text>
                  <Card.Text className='d-flex justify-content-around'>
                    <Button onClick={()=>navigate(`/pizza/${pizza.id}`)}>Ver más</Button>
                    <Button>Añadir <i className="bi bi-cart-plus"></i></Button>
                  </Card.Text>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
