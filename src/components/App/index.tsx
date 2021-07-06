// == Import npm
import React, { useState } from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// == Import
import './styles.css';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../City' was resolved to '/Users/SDherin/D... Remove this comment to see the full error message
import City from '../City';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Weather' was resolved to '/Users/SDheri... Remove this comment to see the full error message
import Weather from '../Weather';

// == Composant
const App = () => {
  const [search, setSearch] = useState('Paris');
  const [inputValue, setInputValue] = useState('');

  const onFormSubmit = (inputValue: any) => {
    setSearch(inputValue);
    setInputValue('');
  };

  const onInputChange = (objet: any) => {
    setInputValue(objet.city);
    console.log(objet);
  };

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="app">
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <BrowserRouter>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Switch>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Route path="/" exact>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <City
              formSubmit={onFormSubmit}
              inputChange={onInputChange}
              input={inputValue}
            />
          </Route>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Route path="/weather">
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Weather
              city={search}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

// == Export
export default App;

/* <img src={reactLogo} alt="react logo" />
    <h1>Composant : App</h1> */
