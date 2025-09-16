import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const WeatherWidget =() => {
const [ isLoading, setIsLoading ] = useState(true);
const [ weather, setWeather ] = useState(null);

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const city = "Istanbul";

useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    .then((response) => response.json())
    .then((data) => {
        setWeather(data);
        setIsLoading(false);
    })
    .catch((error) => {
        console.error("Error fetching weather data:", error);
        setIsLoading(false);
    });
}, [API_KEY]);

if (isLoading) {
    return <motion.div className= "container card col-md-8 mt-3 py-3"><motion.h4 className= "text-danger fw-bold">Loading...</motion.h4></motion.div>
}
if (!weather || parseInt(weather.cod) !== 200) {
    return <motion.div className= "container card col-md-8 mt-3 py-3 text-danger"><motion.h3>Failed to load weather data.</motion.h3></motion.div>
}

return (
    <motion.div
      className="weather-widget p-3 mb-3 cold-md-8"
      initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <motion.h2>Weather Widget</motion.h2>
        <motion.h3>{ weather.name }</motion.h3>
        <motion.h3>{ Math.round(weather.main.temp) }°C</motion.h3>
        <motion.h3>{ weather.weather[0].description }</motion.h3>
        <motion.img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
    </motion.div>
)
}

export default WeatherWidget;