import React, { useState } from "react";


const WeatherDesciption = ({ weatherData }) => {

  const [weatherIcon] = useState(`${process.env.REACT_APP_ICON_URL}/${weatherData.weather[0]["icon"]}@2x.png`);

  return (
    <section>
      <div className="flex justify-start my-8 ">
        <div className="flex border-b-2 lg:border-r-2 lg:border-b-0 pr-8 mr-8">
          <div className="text-6xl">
            <img
              src={weatherIcon}
              alt="Weather Icon"
              className="w-[130px]"
            />
          </div>
          <div>
            <p className="text-6xl">{weatherData.main.temp}&deg;C</p>
            <p className="text-3xl">{weatherData.weather[0].description}</p>
          </div>
        </div>

        <div className="flex basis-1/2  flex-wrap">

          <div className="w-1/3">
            <h5 className="text-2xl">{weatherData.main.temp_max}&deg;</h5>
            <p className="text-lg text-gray-200"> High</p>
          </div>

          <div className="w-1/3 mb-4">
            <h5 className="text-2xl">{new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</h5>
            <p className="text-lg text-gray-200">Sunrise</p>
          </div>

          <div className="w-1/3">
            <h5 className="text-2xl">{weatherData.main.humidity}%</h5>
            <p className="text-lg text-gray-200"> Humidity</p>
          </div>
          <div className="w-1/3">
            <h5 className="text-2xl">{weatherData.main.temp_min}&deg;</h5>
            <p className="text-lg text-gray-200"> Low</p>
          </div>

          <div className="w-1/3">
            <h5 className="text-2xl">{new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-IN")}</h5>
            <p className="text-lg text-gray-200"> Sunrset</p>
          </div>
          <div className="w-1/3">
            <h5 className="text-2xl">{weatherData.wind.speed}mph</h5>
            <p className="text-lg text-gray-200">Wind</p>
          </div>
        </div>
      </div>

    </section>
  );

}

export default WeatherDesciption;