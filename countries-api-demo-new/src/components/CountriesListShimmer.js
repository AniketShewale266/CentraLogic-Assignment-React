import React, { useContext } from "react";
import "./CountriesListShimmer.css";
import { ThemeContext } from "../context/ThemeContext";

function CountriesListShimmer() {
  // new Array(10).fill('')
  // console.log("hiiiiiiiiiiiiiiiiiii");
  const [isDark] = useContext(ThemeContext);
  return (
    <>
      <div className={`container ${isDark ? 'dark': ''}`}>
        {Array.from({ length: 10 }).map((el, i) => {
          return (
            <>
              <div key={i} className="country-card shimmer-card">
                <div className="flag-container shimmer-flag-container"></div>
                <div className="card-content shimmer-card-content">
                  <h3 className="card-title shimmer-card-title"></h3>
                  <p className="shimmer-card-p">
                   
                  </p>
                  <p className="shimmer-card-p">
                    
                  </p>
                  <p className="shimmer-card-p">
                    
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default CountriesListShimmer;
