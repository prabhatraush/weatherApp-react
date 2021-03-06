import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import axios from 'axios';
// import {base_url, key} from './../api';
import {SearchBtn} from '../icons/icons';

require('dotenv').config();

const base_url = process.env.REACT_APP_BASE_URL;
const key = process.env.REACT_APP_KEY;

const SearchBar = styled.div`
    max-width:664px;
    margin:0 auto;
    padding:20px;

    div{
        padding:20px;
        width:100%;
        display:flex;

        input[type="text"]{
            background: #FFFFFF;
            box-shadow: 0px 4px 19px rgba(0, 0, 0, 0.25);
            width:70%;
            line-height:50px;
            border:none;
            outline:none;
            padding-left:10px;
            font-weight:900;
            font-size:20px;
        }

        button{
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            width:15%;
            height:52px;
            border:none;
            font-weight:900;
            font-size:20px;
            background:#00ad41;
            color:#f2f2f2;
            cursor: pointer;
        }
    }


`;

function set_query(query)
{
    const params = "weather?q="+query+
    "&units=metric&APPID=" +
    key;

    return params;
}

function current_location(lat, long)
{
    const params = "weather?lat="+ encodeURI(lat) +
    "&lon=" +
    encodeURI(long) +
    "&units=metric&APPID=" +
    key;

    return params;
}

async function getWeatherByQuery(setWeather, setError, query)
{
    const response =  await axios(base_url+set_query(query));
    if(response)
        setWeather(response.data);
    else{
        setError({cod:404});
    }
}

export default ({setWeather, setError}) => {
    const [query, setQuery] = useState('');

    useEffect(()=>{

        async function FetchWeatherByCurrentLocation(position){
            console.log(base_url+current_location(position.coords.latitude, position.coords.longitude));
            const response =  await axios.get(base_url+current_location(position.coords.latitude, position.coords.longitude));
            if(response)
            {
                setWeather(response.data);
                setQuery(response.data.name+", "+response.data.sys.country)
            }

        }

        if(navigator.geolocation)
        {
            return navigator.geolocation.getCurrentPosition(FetchWeatherByCurrentLocation);
        }
    }, []);

    return <SearchBar>
        <div >
            <input 
                type="text" 
                value={query}
                onChange={(e) => {
                setQuery(e.target.value);
                }}
            />
            <button
                onClick={() => { 
                    setQuery(query);
                    getWeatherByQuery(setWeather, setError, query);
                    }
                }
                >
                <SearchBtn/>
            </button>
        </div>
    </SearchBar>
}