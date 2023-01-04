import React from "react";
import WeatherHeader from "./WeatherHeader";

import WeatherDesciption from "./WeatherDesciption";


const Weather = ({ weatherData }) => {


  return (
    <section
      className={`flex items-top justify-center min-w-full h-screen text-white pt-14 ${weatherData.weather[0].main === "Clouds" ? "bg-gradient-to-t from-blue-700 to-cyan-500" : "bg-gradient-to-t from-orange-500 to-amber-500"}`}>

      <div className="basis-9/12">
        <WeatherHeader weatherData={weatherData} />

        <WeatherDesciption weatherData={weatherData} />
      </div>



    </section>
  )
}

export default Weather;
