import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../contexts/PizzaContext';
import { Container, Card, Button } from 'react-bootstrap';

export default function Pizza() {
  const { id } = useParams();
  const { pizzas } = useContext(Context);

  return (
    <Container>
      {pizzas
        .filter((pizza) => pizza.id === id)
        .map((pizza, index) => (
          <Card key={index} className="row flex-row py-3">
            <Container className="col-12 col-md-4">
              <Card.Img src={pizza.img} alt={pizza.name} />
            </Container>
            <Container className="col-12 col-md-8">
              <Card.Header>
                <span className="fw-bold fs-5">{pizza.name}</span>
              </Card.Header>
              <Card.Body>
                <Card.Text>{pizza.desc}</Card.Text>
                <Card.Text>
                  Ingredientes:
                  <ul>
                    {pizza.ingredients.map((ingrediente, index) => (
                      <li key={index}>🍕 {ingrediente}</li>
                    ))}
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-center">
                <Card.Text className="d-flex justify-content-around align-items-center">
                  <span className="fw-bold fs-5">
                    {pizza.price.toLocaleString('es-CL', {
                      style: 'currency',
                      currency: 'CLP',
                    })}
                  </span>
                  <Button>
                    Añadir <i className="bi bi-cart-plus"></i>
                  </Button>
                </Card.Text>
              </Card.Footer>
            </Container>
          </Card>
        ))}
    </Container>
  );
}
