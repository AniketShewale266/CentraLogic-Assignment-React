import React, { useContext, useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";
import { ThemeContext } from "../context/ThemeContext";

function CountriesList({ query }) {
  const [countriesData, setcountriesData] = useState([]);
  const [isDark] = useContext(ThemeContext);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setcountriesData(data);
      });
  });
  
  if (countriesData.length === 0) {
    return <CountriesListShimmer />;
  }

  return (
    <>
      <div className={`container ${isDark ? 'dark': ''}`}>
        {countriesData
          .filter((country) => {
            return (
              country.name.common.toLowerCase().includes(query) ||
              country.region.toLowerCase().includes(query)
            );
          })
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                flag={country.flags.svg}
                name={country.name.common}
                population={country.population.toLocaleString("en-IN")}
                region={country.region}
                capital={country.capital}
              />
            );
          })}
      </div>
    </>
  );
}

export default CountriesList;
