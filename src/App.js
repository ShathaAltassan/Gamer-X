import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { CartProvider } from './CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Components/Main';
import GameList from './Components/GameList';
import Cart from './Components/Cart';
import Bill from './Components/Bill';
import Contact from './Components/Contact'
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/gamelist' element={<GameList />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/bill' element={<Bill />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
