import React from "react";
import img from '../images/img.jpg'
import { useSelector } from "react-redux";
import FavoriteResource from "../components/FavoriteResource";

function Favouritelist() {
    const favouriteResource = useSelector((state) => state.favourite.favorites);
  return (
    <>
      <div className="cart-container">
        <h2>Resources in Your FavouriteList</h2>
        <div className="cart-items-container">
          <div className="cart-header cart-item-container">
            <div className="cart-item">Resource</div>
            <div className="item-price">Link</div>
          </div>
          {favouriteResource.map(
            ({ id, name, link,rating}) => (
              <FavoriteResource
                key={id}
                name={name}
                imageUrl={img}
                rating={rating}
                link={link}
              />
            )
          )}
          <div className="cart-header cart-item-container">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Favouritelist;
