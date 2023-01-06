import React, { useState, useEffect } from "react";
import './App.css';
import Weather from "./Components/Weather";


function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [city, setCity] = useState("");


  // Fetch Data from Weather API

  const fecthWeatherData = async () => {

    if (city) {
      await fetch(`${process.env.REACT_APP_API_URL}/weather/?q=${city}&units=metric &APPID=${process.env.REACT_APP_API_KEY} `)
        .then(response => response.json())
        .then(result => {
          setData(result);
          console.log(result);
        });
    }
    else {
      navigator.geolocation.getCurrentPosition(function (positon) {
        setLat(positon.coords.latitude);
        setLong(positon.coords.longitude);
      });

      // console.log(`
      // Latitude: ${lat}
      // Longitude: ${long}
      // `);

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(result => {
          setData(result);
          console.log(result);
        });
    }
  }

  useEffect(() => {
    fecthWeatherData();
  }, [lat, long]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fecthWeatherData();
    setCity("");


  }

  const refresh = () => {
    window.location.reload();
  }

  return (
    <main className="App">
      <div className="flex align-center justify-center bg-gradient-to-b from-cyan-500 to-sky-700 p-4">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter the City"
            name="city"
            className="p-2 mr-2 rounded-md outline-none w-58"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" className="bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-2 rounded-md text-white">Search</button>
        </form>
        <button className="button ml-10 text-white text-4xl" icon='refresh' onClick={refresh} >↻</button>
      </div>


      {(typeof data.main != "undefined") ? (

        <div>


          <Weather weatherData={data} />
        </div>
      ) :
        (
          <div className="h-min-100 h-screen bg-gradient-to-r from-cyan-500 to-blue-500 p-3 lg:p-7 text-white text-xl lg:text-2xl">
            Invalid City to fecth the Weather Data
          </div>
        )
      }
    </main>
  );
}

export default App;
