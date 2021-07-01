import React, { useEffect } from 'react';
import axios from 'axios';

import './styles.css';

const API_KEY = '98b7465353d383f3d0f3bc4a284a48ae';

const Weather = ({ city }) => {
    const [temp, setTemp] = useState(0);

    const fetchTemp = () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

        axios.get(url)
            .then((response) => {
                setTemp(response.data.main.temp);
            })
            .catch((err) => console.error(err));
    };

    // Reloading if data changed
    useEffect(fetchTemp, [city]);

    const color = temp < 15 ? blue : red

    return (
        <div style={{
            backgroundColor: `${color}`,
            }}
        >Coucou    
        </div>
    )
};

export default Weather;