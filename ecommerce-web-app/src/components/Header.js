import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

function Header() {
  const { cart } = useCart();
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <header className="header-container">
        <div className="header-content">
          <h2 className="title"><Link to="/" className="header-text">E-Commerce</Link></h2>
          <p className="cart">
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;
              <span className="count-text">{totalQuantity}</span>
            </Link>
          </p>
        </div>
      </header>
    </>
  );
}

export default Header;
