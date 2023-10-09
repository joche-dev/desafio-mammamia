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

  const globalState = {pizzas, setPizzas}

  return (
    <Context.Provider value={globalState}>
        {children}
    </Context.Provider>
  );
}
