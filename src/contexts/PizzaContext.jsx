import { useState, createContext, useEffect } from 'react';

export const Context = createContext();

export default function Provider({ children }) {
  const [pizzas, setPizzas] = useState([]);

  const getPizzas = async () => {
    const res = await fetch('/pizzas.json');
    const data = await res.json();
    setPizzas(data);
  };

  useEffect(() => {getPizzas()}, []);

  return (
    <Context.Provider value={[pizzas, setPizzas]}>
        {children}
    </Context.Provider>
  );
}
