import React, { useState } from "react";
import "./App.css";
import secrets from "./secrets";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

function App() {
  const [city, setCity] = useState(undefined);
  const [country, setCountry] = useState(undefined);
  const [conditions, setConditions] = useState("");
  const [temp, setTemp] = useState("");
  const [err, setErr] = useState("");
  const [status, setStatus] = useState(undefined);

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  async function fetchWeather(e) {
    e.preventDefault();
    const cityInput = e.target.elements.cityInput.value;
    const countryInput = e.target.elements.countryInput.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityInput},${countryInput}&appid=${secrets.API_KEY}&units=imperial`
    );
    const weather_data = await api_call.json();
    console.log(weather_data);
    if (cityInput && countryInput) {
      setStatus(weather_data.cod);
      console.log(weather_data.cod === "404");
      console.log(status);
      if (weather_data.cod === "404") {
        setCity(undefined);
        setCountry(undefined);
        setConditions("");
        setTemp("");
        setErr(capitalize(weather_data.message));
      } else {
        setCity(weather_data.name);
        setCountry(weather_data.sys.country);
        setConditions(weather_data.weather[0].description);
        setTemp(weather_data.main.temp);
        setErr("");
        setStatus(undefined);
      }
    } else {
      setCity(undefined);
      setCountry(undefined);
      setConditions("");
      setTemp("");
      setErr("Enter a city and a country to get the weather.");
    }
    // console.log(weather_data);
  }

  return (
    <div>
      <Title />
      <Form fetchWeather={fetchWeather} />{" "}
      <Weather
        city={city}
        country={country}
        conditions={conditions}
        temp={temp}
        err={err}
      />
    </div>
  );
}

export default App;
