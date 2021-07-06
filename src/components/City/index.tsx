import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { useHistory } from 'react-router-dom';

import './styles.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const City = ({
  formSubmit,
  inputChange,
  input,
}: any) => {
  const history = useHistory();

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    formSubmit(input);
    history.push('/weather');
  };

  const handleInputChange = (e: any) => {
    const { name } = e.target;
    const { value } = e.target;
    inputChange({ [name]: value });
  };

  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <form
      className="form"
      onSubmit={handleFormSubmit}
    >
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <div className="form_flex">
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TextField
          label="Choisissez une ville"
          onChange={handleInputChange}
          value={input}
          name="city"
        />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Button
          color="primary"
          variant="contained"
          type="submit"
        >Valider
        </Button>
      </div>
    </form>
  );
};

export default City;
