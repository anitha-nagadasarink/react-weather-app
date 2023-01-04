// Om Ganapathi Siddhi Buddhi
// OMshakthi amma Shivappa
// Vishnu Lakshmi 
// Brahama Sarawathi
// Dakshinamurthy Hauagriva
// Sri Venkateshwara Sri Vidya Vijaya Gnana Dhyrya Aurogya Samayaspoorthi Lakshmi devi

import React, { useState, useEffect } from "react";
import './App.css';
import Weather from "./Components/Weather";


function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [city, setCity] = useState("Bengaluru")

  useEffect(() => {



    const fecthWeatherData = async () => {
      navigator.geolocation.getCurrentPosition(function (positon) {
        setLat(positon.coords.latitude);
        setLong(positon.coords.longitude);
      });

      // console.log(`
      // Latitude: ${lat}
      // Longitude: ${long}
      // `);

      // await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?q=${city}&units=metric &APPID=${process.env.REACT_APP_API_KEY} `)
        .then(response => response.json())
        .then(result => {
          setData(result);
          console.log(result);
        })

    }
    fecthWeatherData();

  }, [lat, long])

  return (
    <main className="App">
      {(typeof data.main != "undefined") ? (
        <Weather weatherData={data} />
      ) :
        (
          <div>Invalid City to fecth the Weather Data</div>
        )
      }
    </main>
  );
}

export default App;
