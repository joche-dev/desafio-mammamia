import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './componentes/Navigation';

import Provider from './contexts/PizzaContext';
import Home from './views/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
