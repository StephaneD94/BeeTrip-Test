// == Import npm
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// == Import
import './styles.css';

import City from '../City';
import Weather from '../Weather';

// == Composant
const App = () => {

  const [search, setSearch] = useState('Paris');
  const [inputValue, setInputValue] = useState('');

  const onFormSubmit = (inputValue) => {
    setSearch(inputValue);
    setInputValue('');
  };

  const onInputChange = (objet) => {
    setInputValue(objet.city);
    console.log(objet);
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <City
              formSubmit={onFormSubmit}
              inputChange={onInputChange}
              input={inputValue}
            />
          </Route>
          <Route path="/weather">
            <Weather
              city={search}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

// == Export
export default App;

/*<img src={reactLogo} alt="react logo" />
    <h1>Composant : App</h1>*/