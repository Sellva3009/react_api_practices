import React, { useState, useEffect } from 'react'

// https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    const [country, setCountry] = useState('London');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target[0].value);
        setCountry(e.target[0].value);
        e.target[0].value = '';
    }

    useEffect(() => {
        const fetchWeather = async () => {
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=27ff0ea273e7c5f188c509b2ca5fea37&units=metric`
            );
            const data = await response.json();
            setWeather(data);
            setLoading(false);
        }

        fetchWeather();
        // fetch(
        //   `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=27ff0ea273e7c5f188c509b2ca5fea37&units=metric`
        // )
        //   .then((response) => response.json())
        //   .then((data) => {
        //     setWeather(data);
        //     setLoading(false);
        // })
        // .catch(err => {
        //     console.log(err);
        // })
    }, [country])

        if (country === null || undefined) {
          return country === "London";
        }

    if (loading) {
        return (
            <div>Loading... </div>
        )
    }
  return (
    <div>
      <h2>Weather</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name='city' placeholder='City name' />
        <button>Submit</button>
      </form>
      <p>
        <strong>City:</strong> {weather.name} - {weather.sys.country}
      </p>
      <p>
        <strong>Temp:</strong> {weather.main.temp}
      </p>
      <p>
        <strong>Feels like:</strong> {weather.main.feels_like}
      </p>
      <p>
        <strong>Description:</strong> {weather.weather[0].description}
      </p>
    </div>
  );
}

export default Weather