import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart } = useCart();
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className='cart-container'>
      <h2>My Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <table border={1}>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>{item.title} </td>
              <td>{item.quantity}</td>
              <td>${item.price}</td>
            </tr>
          </table>
        </div>
      ))}
      <h3>Total Price: ${totalPrice}</h3>
      <Link to="/checkout">
        <button className='button'>Proceed to Checkout</button>
      </Link>
    </div>
  );
}

export default Cart;
