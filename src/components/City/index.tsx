import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const City = ({ formSubmit, inputChange, input }) => {
    const history = useHistory();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        formSubmit(input);
        history.push("/weather");
    };

    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        inputChange({ [name]: value });
    };

    return (
        <form 
            className="form"
            onSubmit={handleFormSubmit}
        >
            <div className="form_flex">
                <TextField
                    label="Choisissez une ville"
                    onChange={handleInputChange}
                    value={input}
                    name="city"
                />
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                >Valider</Button>
            </div>
        </form>
    );
};

export default City;