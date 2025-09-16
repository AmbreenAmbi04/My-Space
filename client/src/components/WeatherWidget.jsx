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
    return <motion.div className= "container card col-md-8 mt-3 py-3 px-3"><motion.h4 className= "text-danger fw-bold" whileHover={{ scale: 1.1, color: "#66524bff" }}
        transition={{ type: "spring", stiffness: 200 }}>Loading...</motion.h4></motion.div>
}
if (!weather || parseInt(weather.cod) !== 200) {
    return <motion.div className= "container card col-md-8 mt-3 py-3 px-3 text-danger"><motion.h3 whileHover={{ scale: 1.1, color: "#862020ff" }}
        transition={{ type: "spring", stiffness: 200 }}>Failed to load weather data.</motion.h3></motion.div>
}

return (
    <motion.div
      className="card container col-md-8 mt-3 py-3 mb-3 cold-md-8 px-3 shadow-lg text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03, color: "#66524bff" }}
    >
        <motion.h2
            className= "fw-bold"
            style= {{ color: "#66524bff" }}
            whileHover={{ scale: 1.1, color: "#a06148" }}
            transition={{ type: "spring", stiffness: 200 }}
            ><motion.span><i className="bi bi-cloud-sun me-2" style= {{ color: "#66524bff" }}></i></motion.span>Weather Widget
        </motion.h2>
        <motion.h3 
            class= "fw-semibold" 
            style= {{ color: "#904f35ff" }}
            whileHover={{ scale: 1.1, color: "#a06148" }}
            transition={{ type: "spring", stiffness: 200 }}
            >City: { weather.name }
        </motion.h3>
        <motion.h3 
            class= "fw-semibold" 
            style= {{ color: "#904f35ff" }}
            whileHover={{ scale: 1.1, color: "#a06148" }}
            transition={{ type: "spring", stiffness: 200 }}
            >Temperature: { Math.round(weather.main.temp) }°C
        </motion.h3>
        <motion.h3 
            class= "fw-semibold" 
            style= {{ color: "#904f35ff" }}
            whileHover={{ scale: 1.1, color: "#a06148" }}
            transition={{ type: "spring", stiffness: 200 }}
            >Weather Condition: {weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)}
        </motion.h3>
        <motion.img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather icon"
        width= "100px"
        height= "100px"
        className= "d-flex mx-auto"
      />
    </motion.div>
)
}

export default WeatherWidget;