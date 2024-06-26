import logo from "./logo.svg";
import "./App.css";
import CountryCard from "./components/CountryCard";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import countriesdata from "./countriesdata";
import { useEffect, useState } from "react";
import CountriesList from "./components/CountriesList";
import ToggleButton from "./components/ToggleButton";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [query, setQuery] = useState("");
  const [isDark, setisDark] = useState(
    JSON.parse(localStorage.getItem("isDarkMode"))
  );

  return (
    <ThemeContext.Provider value={[isDark, setisDark]}>
      <div className={`header-container ${isDark ? "dark" : ""}`}>
        <SearchBar setQuery={setQuery} />
        <div className="right-box">
          <Filter setQuery={setQuery} />
          <ToggleButton />
        </div>
      </div>
      {<CountriesList query={query} />}
    </ThemeContext.Provider>
  );
}

export default App;
