import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import './styles.css';

const API_KEY = '98b7465353d383f3d0f3bc4a284a48ae';

const Weather = ({ city }) => {
    const history = useHistory();
    const [temp, setTemp] = useState(0);

    const fetchTemp = async () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        await axios.get(url)
            .then((response) => {
                setTemp(response.data.main.temp);
            })
            .catch((err) => console.error(err));
    };

    // Reloading if data changed
    useEffect(fetchTemp, [city]);

    const color = temp < 15 ? "lightskyblue" : "darkorange";
    const text = temp < 15 ? "il fait froid !" : "il fait chaud !";
    return (
        <div style={{
            backgroundColor: color,
            color: 'white',
            width: '100vw',
            height: '100vh',
            }}
        >
            <p style={{
                paddingTop: '100px',
                paddingBottom: '50px',
            }}>En ce moment, à {city} {text}</p>
            <p style={{
                paddingBottom: '50px',
            }}
            >( {temp} °C)</p>
            <Button
                color="primary"
                variant="contained"
                onClick={(e) => {
                    e.preventDefault;
                    history.push("/");
                }}
            >Retour
            </Button>
        </div>
    )
};

export default Weather;