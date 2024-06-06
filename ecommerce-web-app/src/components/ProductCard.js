import React, { useRef, useContext } from 'react';
import CartContext from '../contexts/CartContext';

function ProductCard({ img, title, price }) {
  const quantityRef = useRef(1);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const quantity = parseInt(quantityRef.current.value);
    addToCart({ img, title, price, quantity });
  };

  return (
    <div className="product-card">
      <img src={img} alt={title} />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p>
          <b>Price:</b>{price}$
        </p>
        <p>
          <input
            className="quantity"
            type="number"
            defaultValue={1}
            min={1}
            ref={quantityRef}
          />
        </p>
        <p>
          <button className="button" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
