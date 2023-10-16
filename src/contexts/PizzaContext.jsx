import { useState, createContext, useEffect } from 'react';

export const Context = createContext();

export default function Provider({ children }) {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  const getPizzas = async () => {
    const res = await fetch('/pizzas.json');
    const data = await res.json();
    setPizzas(data);
  };

  useEffect(() => {
    getPizzas();
  }, []);

  const monedaLocal = (valor) => {
    return valor.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' });
  };

  const addCart = (pizza) => {
    const foundPizza = cart.findIndex((cartPizza) => cartPizza.id === pizza.id);

    if (foundPizza < 0) {
      pizza.count = 1;
      setCart([...cart, pizza]);
    } else {
      cart[foundPizza].count++;
      setCart([...cart]);
    }
  };

  const totalCart = cart.reduce(
    (acumulador, { price, count }) => acumulador + price * count,
    0
  );

  return (
    <Context.Provider value={{ pizzas, cart, setCart, addCart, totalCart, monedaLocal }}>
      {children}
    </Context.Provider>
  );
}
