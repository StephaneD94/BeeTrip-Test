import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
// import axios from 'axios';

import './styles.css';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const City = ({ formSubmit, inputChange, input }) => {
    const history = useHistory();
    /*const [temperature, setTemperature] = useState();*/

    /*useEffect(() => {
        const baseUrl = process.env.BASE_URL
        const apiKey = process.env.API_KEY
    })*/

    const handleFormSubmit = (e) => {
        e.preventDefault();
        formSubmit();
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