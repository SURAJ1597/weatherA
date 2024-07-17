import React, { useState } from "react";

const Weather = ({receiveWeatherData}) => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = "1d46dc19f716401694b111758241707";



  const handleInputChange = (event) => {
    setCityName(event.target.value);
  };


  const submitOnClickHandler = async () => {
   
    try {
        const response =  await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=no`);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData({
            url: data.current.condition.icon,
            temperature: data.current.temp_c,
            feelsLike: data.current.feelslike_c,
            humidity: data.current.humidity,
            windSpeed: data.current.wind_kph,
            code : data.current.condition.code
        });

        setError(null);

        receiveWeatherData(data.current.condition.code);

    } catch (error) {
        setError('Failed to fetch weather data. Please try again.');
        console.error(error);
    }
};



  return (
    <div className="h-auto w-auto border-4 rounded-lg  p-4 bg-gradient-to-r from-blue-200 to-cyan-200 shadow-lg drop-shadow-lg"
    >
      <label
        htmlFor="input-label"
        className="block text-sm font-medium mb-2 text-slate-700"
      >
        Enter City
      </label>
      <input
        type="text"
        id="input-label"
        className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
        value={cityName}
        onChange={handleInputChange}
        placeholder="e.g. Kolkata"
      />
      <div className="flex items-center justify-center">
        <button
          type="button"
          className=" text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-1 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900 mt-8"
          onClick={submitOnClickHandler}
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {weatherData && (
        <div className="mt-4 flex flex-col justify-center items-center gap-4">
          <img src={weatherData.url} alt="" className="mb-4"/>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Feels Like: {weatherData.feelsLike}°C</p>
          <p>Humidity: {weatherData.humidity}%</p>
          <p>Wind Speed: {weatherData.windSpeed} kph</p>
      
        </div>
      )}
    </div>
  );
};

export default Weather;
