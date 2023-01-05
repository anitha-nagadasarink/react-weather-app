import React from "react";
import WeatherHeader from "./WeatherHeader";

import WeatherDesciption from "./WeatherDesciption";


const Weather = ({ weatherData }) => {


  return (
    <section
      className={`flex items-top justify-center min-w-full h-screen text-white pt-14 
      ${weatherData.weather[0].id >= 801 && weatherData.weather[0].id <= 804 ? "cloud-sky" :
          weatherData.weather[0].id >= 600 && weatherData.weather[0].id <= 622 ? "snow-sky" :
            weatherData.weather[0].id >= 701 && weatherData.weather[0].id <= 781 ? "smoke-sky" :
              weatherData.weather[0].id >= 500 && weatherData.weather[0].id <= 531 ? "rain-sky" :
                weatherData.weather[0].id >= 300 && weatherData.weather[0].id <= 321 ? "drizzle-sky" :
                  weatherData.weather[0].id >= 200 && weatherData.weather[0].id <= 232 ? "thunder-sky" :
                    "sunny-sky"}`}>

      <div div className="basis-9/12" >
        <WeatherHeader weatherData={weatherData} />

        <WeatherDesciption weatherData={weatherData} />
      </div >



    </section >
  )
}

export default Weather;
