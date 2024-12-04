import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

const MainLayout = ({ children }) => {
    const { cart } = useCart(); 
  
    const totalItems = cart.reduce((total, game) => total + game.quantity, 0);
  
    return (
      <div className="main-layout">
        <header className="main-header">
          <nav>
            <ul className="nav-links">
              <li><Link to="/" className="nav-link">الرئيسية</Link></li>
              <li><Link to="/about" className="nav-link">حولنا</Link></li>
              <li><Link to="/contact" className="nav-link">اتصل بنا</Link></li>
              <li><Link to="/gamelist" className="nav-link"> قائمة الألعاب</Link></li>

            </ul>
          </nav>
          <div className="cart-icon">
            <Link to="/cart" className="cart-link">
              🛒
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </Link>
          </div>
        </header>
  
        <main className="main-content">
          {children}
        </main>
  
        <footer  className="footer">
        <p className="rights-text">تم التطوير بواسطة </p>

        <a href="https://www.linkedin.com/in/shatha-altassan/" target="_blank" rel="noopener noreferrer">
            <img src="\mylogo.png" alt="Your Logo" className="footer-logo" />
          </a>
          <p className="rights-text">جميع الحقوق محفوظة</p>


        </footer>

      </div>
    );
  };
export default MainLayout;