import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
    const favouriteResource = useSelector((state) => state.favourite.favorites);
  return (
    <header>
      <div className="header-contents">
        <div className="logo">
          <h1>
            <Link to="/">ResourceHub</Link>
          </h1>
        </div>
        <div className="left">
          <Link className="cart-icon" to="/favouriteList">
            <i class="fa-solid fa-heart"></i>&nbsp;
            <span className="text">{favouriteResource.length}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
