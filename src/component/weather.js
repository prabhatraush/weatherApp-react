import React from 'react';
import styled from 'styled-components';

const Weather = styled.div`
    .card{
    max-width: 664px;
    height:471px;
    margin:10px auto;
    background: rgba(196, 196, 196, 0.33);
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.25);
    border-radius: 48px 0px;
    text-align:center;

        .locname{
            
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 65px;
            line-height: 120px;
        }

        .datelbl{
            font-family: Rasa;
            font-style: normal;
            font-weight: bold;
            font-size: 25px;
            line-height: 55px;
        }

        .templbl{
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 95px;
            line-height: 120px;
        }

        .temp-details{
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 45px;
            line-height: 120px;
        }

    }

`;

function dateBuilder(dt)
{
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December" ];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];

    let day = days[dt.getDay()];
    let month = months[dt.getMonth()];
    let date = dt.getDate();
    let year = dt.getFullYear();

    return day+", "+date+" "+month+" "+year;

}

export default  ({weather}) => {
    console.log(weather);
    return <Weather>
        <div className="card">
            <div className="locname">
                {weather.name}, {weather.sys.country}
                
            </div>
            <div className="datelbl">
                {/* {weather.dt} */}
                {dateBuilder(new Date())}
            </div>
            <div className="templbl">
                {weather.main.temp}°C
            </div>
            <div className="temp-details">
                {weather.weather[0].main}
            </div>
        </div>
    </Weather>
}