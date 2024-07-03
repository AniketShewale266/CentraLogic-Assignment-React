import React from 'react'


export default function FavoriteResource({name, rating, link,imageUrl}) {
  return (
    <div className="cart-item-container">
      <div className="cart-item">
        <img src={imageUrl} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{rating} ★ ★ ★ ★</p>
        </div>
      </div>
      <div className="item-price">{link}</div>
    </div>
  )
}