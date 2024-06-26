import React, { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext';

function ToggleButton() {
    const [isDark,setisDark] = useContext(ThemeContext);

  return (
    <>
      <div className="theme-container">
        <p
          className="theme-changer"
          onClick={() => {
            setisDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
           <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`}></i>&nbsp;&nbsp;<span className="theme-text">{isDark ? "Light" : "Dark"} Mode</span>
        </p>
      </div>
    </>
  );
}

export default ToggleButton;
