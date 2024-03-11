import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visiCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleVisitedCountry = (country) => {
    const NewVisitedCountries = [...visiCountries, country];
    setVisitedCountries(NewVisitedCountries);
    console.log(country);
  };
  const handleVisitedFlags = (flags) => {
    const newVisitedFlags = [...visitedFlags, flags];
    setVisitedFlags(newVisitedFlags);
  };
  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div className="">
        <h5>Visited Countries : {visiCountries.length} </h5>
        <ul>
          {visiCountries.map((country) => (
            <li key={country?.name?.common}>{country?.name?.common}</li>
          ))}
        </ul>
      </div>
      <div className="country-flag">
        <h4>Visited Flags:{visitedFlags.length}</h4>
        <ul>
          {visitedFlags.map((flag) => (
            <img key={flag?.svg} src={flag}></img>
          ))}
        </ul>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country?.name?.common}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
