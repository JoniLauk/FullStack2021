import React, { useState, useEffect } from "react";
import axios from "axios";

const Filter = (props) => {
  return (
    <div>
      <b>Find by name </b>
      <input
        id="filter"
        value={props.filter}
        onChange={(event) => props.setFilter(event.target.value)}
      />
    </div>
  );
};

const Countries = (props) => {
  return (
    <div>
      {props.filtered.map((country) => (
        <div>
          <p key={country.name}>{country.name}</p>
        </div>
      ))}
    </div>
  );
};

const Country = (props) => {
  return (
    <div>
      {props.filtered.map((country) => (
        <div>
          <h1>{country.name}</h1>
          <p>Capital {country.capital}</p>
          <p>Population {country.population}</p>
          <h2>Languages</h2>
          <ul>
            {country.languages.map((language) => (
              <li key={language.name}>{language.name}</li>
            ))}
          </ul>
          <img src={country.flag} alt="Flag" width="100" />
        </div>
      ))}
    </div>
  );
};

const Button = (props) => {
  return <button onClick={props.showCountry}>Show</button>;
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
      console.log(response.data);
    });
  }, []);

  const filtered = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(filter.toLowerCase()) || filter === ""
  );

  if (filtered.length > 10) {
    return (
      <div>
        <div>
          <Filter filter={filter} setFilter={setFilter} />
          <p>Too many matches</p>
        </div>
      </div>
    );
  } else if (filtered.length === 1) {
    return (
      <div>
        <div>
          <Filter filter={filter} setFilter={setFilter} />
        </div>
        <div>
          <Country filtered={filtered} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <Filter filter={filter} setFilter={setFilter} />
        </div>
        <div>
          <Countries filtered={filtered} />
        </div>
      </div>
    );
  }
};

export default App;
