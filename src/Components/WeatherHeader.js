import React from "react";
import moment from 'moment';

const WeatherHeader = ({ weatherData }) => {


  return (
    <header className="">
      <h1 className="text-3xl font-medium text-left">{weatherData.name}, {weatherData.sys.country}</h1>

      <p className="text-2xl font-semibod text-left">{moment().format('dddd')}, {moment().format('LLL')}</p>


      {
        // <button className="button" icon='refresh' onClick={refresh} >Refresh</button>
      }


    </header>
  )
}

export default WeatherHeader;