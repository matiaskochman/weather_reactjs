import axios from 'axios';

const API_KEY = '221677b0488949888a4644c604039cf5';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

  const url = `${ROOT_URL}&q=${city},ar`;
  const request = axios.get(url);

  console.log("request: ",request);

  return{
    type:FETCH_WEATHER,
    payload:request
  }
}
