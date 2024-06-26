import React from "react";
import countriesdata from "../countriesdata";

function CountryCard({flag,name,population,region,capital}) {
    
  return (
    <>
      <div className="country-card" >
        <div className="flag-container">
          <img src={flag} />
        </div>
        <div className="card-content">
          <h3 className="card-title">{name}</h3>
          <p>
            <b>Population:</b>
            {population}
          </p>
          <p>
            <b>Region:</b>
            {region}
          </p>
          <p>
            <b>Capital:</b>
            {capital}
          </p>
        </div>
      </div>
    </>
  );
}

export default CountryCard;
