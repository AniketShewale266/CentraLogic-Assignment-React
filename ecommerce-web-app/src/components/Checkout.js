import React from 'react';
import { useCart } from '../contexts/CartContext';

function Checkout() {
  const { cart } = useCart();
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
    <div className='checkout-container'>
      <h2>Checkout</h2>
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
      <button className='button'>Confirm Order</button>
    </div></>
  );
}

export default Checkout;
