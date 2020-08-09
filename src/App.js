
// https://www.robinwieruch.de/react-hooks-fetch-data
import React, { useState } from 'react';
import styled from 'styled-components';

import SearchBar  from './component/SearchBar';
import WeatherCard from './component/weather';
import Footer from './component/Footer';

const Home = styled.div`
  background : url(background-img.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .notFound{
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 65px;
    color: #ff0000;
    line-height: 120px;
  }
`;


function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  console.log(weather, error);
  console.log("prabhu");
  return (
    <Home>
        <SearchBar setWeather={setWeather} setError = {setError}/>
        { weather  ? <WeatherCard weather={weather}/> : <div className="notFound"> City Not Found</div> }
        <Footer/>
    </Home>
  );
}

export default App;
