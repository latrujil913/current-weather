import React, { useState } from "react";
import "./App.css";
import secrets from "./secrets";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

function App() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [conditions, setConditions] = useState("");
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [err, setErr] = useState("");

  async function fetchWeather(e) {
    e.preventDefault();
    const cityInput = e.target.elements.cityInput.value;
    const countryInput = e.target.elements.countryInput.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityInput},${countryInput}&appid=${secrets.API_KEY}&units=imperial`
    );
    const weather_data = await api_call.json();

    setCity(cityInput);
    setCountry(countryInput);
    setConditions(weather_data);
    setTemp(weather_data);
    console.log(weather_data);
  }

  return (
    <div>
      <Title />
      <Weather
        city={city}
        country={country}
        conditions={conditions}
        temp={temp}
      />
      <Form fetchWeather={fetchWeather} />
    </div>
  );
}

export default App;
