import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext';

function Checkout() {
  const { cart } = useContext(CartContext);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className='checkout-container'>
      <h2>Checkout</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <table border={1}>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
      <h3>Total Price: ${totalPrice}</h3>
      <button className='button'>Confirm Order</button>
    </div>
  );
}

export default Checkout;
