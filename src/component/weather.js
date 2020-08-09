import React from 'react';
import styled from 'styled-components';

const Weather = styled.div`
    .card{
        max-width: 664px;
        height:500px;
        margin:10px auto;
        background: rgba(196, 196, 196, 0.33);
        box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.25);
        border-radius: 48px 0px;
        padding:30px;

        .locname{
            text-align:center;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 65px;
            line-height: 120px;
        }

        .datelbl{
            text-align:center;
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
            text-align:center;

            img, span{
                align-self:center;
            }
           
        }

        .suntime{
            padding:10px 30px;
            border-radius: 20px;
            background: #456543a2;
            display:flex;
            justify-content: space-between;
            font-weight: bold;
            font-size: 25px;
            color:#ffffff;

        }

        .temp-details{
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 45px;
            line-height: 120px;
            text-align:center;
        }

    }

    @media only screen and (max-width:500px)
    {
        .card{
            margin:10px 20px;
            height:575px;

            .locname{
                font-size: 45px;
            }
    
            .datelbl{
                font-size: 20px;
            }

            .templbl{
                font-size: 75px;

                img, span{
                    align-self:center;
                }
            
            }

            .suntime{
                padding:10px;
                font-size:15px;
            }
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

function unix_to_time(dt)
{
    var hours = dt.getHours();
    var mm;
    if(hours < 12 )
    {
        mm = "AM";
    }
    else{
        mm = "PM";
        hours = hours - 12;
    }

    var minutes = dt.getMinutes();
    if(minutes < 10 )
    {
        minutes = "0" + minutes;
    }
    var seconds = "0" + dt.getSeconds();

    return hours+":"+minutes+" "+mm;//+":"+seconds;
}

export default  ({weather}) => {
    return <Weather>
        <div className="card">
            <div className="locname">
                {weather.name}, {weather.sys.country}
                
            </div>
            <div className="datelbl">
                {/* {weather.dt} */}
                {dateBuilder(new Date(weather.dt*1000))}
            </div>
            <div className="templbl">
                <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                <span>{weather.main.temp}°C </span>
            </div>
            <div className="suntime">
                <div className="sunrise">
                    <p>sunrise</p>
                     {unix_to_time(new Date(weather.sys.sunrise*1000))}
                </div>
                <div className="sunset">
                    <p>sunset</p>
                    {unix_to_time(new Date(weather.sys.sunset*1000))}
                </div>
            </div>
            <div className="temp-details">
                {weather.weather[0].main}
            </div>
        </div>
    </Weather>
}