import React, { useState } from "react";
import "./weatherApp.css"
import search_icon from "../assets/search.png";
import clear_icon from "../assets/clear.png"
import cloud_icon from "../assets/cloud.png"
import drizzle_icon from "../assets/drizzle.png"
import humidity_icon from "../assets/humidity.png"
import rain_icon from "../assets/rain.png"
import snow_icon from "../assets/snow.png"
import wind_icon from "../assets/wind.png"
import day_icon from "../assets/day.jpeg"



const WeatherApp = () => {

    const API_KEY= "c87d3cde4972c1bda94e1ee234032b02";

    const [wicon, setWicon] = useState(cloud_icon);
    const [backG, setBackG] = useState(day_icon);




    const search = async () => {
        const element = document.getElementsByClassName("city-input")
        if(element[0].value===""){
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${API_KEY}`;
        


        let response = await fetch(url);
        let data = await response.json();
        const humidity = document.getElementsByClassName("humidity-percent")
        const wind = document.getElementsByClassName("wind-speed")
        const temp = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-location")
        const thernal = document.getElementsByClassName("thernal-sentation")

        humidity[0].innerHTML=data.main.humidity;
        wind[0].innerHTML=Math.floor(data.wind.speed) + "km";
        temp[0].innerHTML = Math.floor(data.main.temp)+ "°C";
        location[0].innerHTML = data.name;
        thernal[0].innerHTML = data.main.feels_like + "°C";



        if(data.weather[0].icon==="01d"|| data.weather[0].icon==="01n"){
            setWicon(clear_icon);
        }
        else if(data.weather[0].icon==="02d"|| data.weather[0].icon==="02n"){
            setWicon(cloud_icon);
        }
        else if(data.weather[0].icon==="03d"|| data.weather[0].icon==="03n"){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="04d"|| data.weather[0].icon==="04n"){
            setWicon(drizzle_icon);
        }
        else if(data.weather[0].icon==="09d"|| data.weather[0].icon==="09n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="10d"|| data.weather[0].icon==="10n"){
            setWicon(rain_icon);
        }
        else if(data.weather[0].icon==="13d"|| data.weather[0].icon==="13n"){
            setWicon(snow_icon);
        }
        else{
            setWicon(clear_icon);
        }

    }

    return(
        <div className="container">
            <div className="card">
                <h1>Hava Durumu </h1>
                <div className="top-bar">
                    <input type="text" className="city-input" placeholder="Başlamak için şehir giriniz:" />
                    <div className="search-icon" onClick={()=>{search()}}>
                        <img src={search_icon} alt="" />
                    </div>
                </div>
                <div className="weather-image">
                    <img src={wicon} alt="" />
                </div>
                <div className="weather-temp"></div>
                <div className="weather-location"></div>
            </div>
            <div className="data-container">             
                <table>
                    <tr>
                        <div className="element">
                            <td><img src={humidity_icon} alt="" className="icon" /></td>
                            <td> <div className="text">Nem</div></td>
                            <td> <div className="humidity-percent"></div></td>                            
                        </div>
                    </tr>
                    <tr>
                        <div className="element">
                           <td> <img src={wind_icon} alt="" className="icon" /></td>    
                           <td><div className="text">Rüzgar Hızı</div></td>
                            <td> <div className="wind-speed"></div></td>       
                            </div>             
                    </tr> 
                    <tr>
                        <div className="element">
                           <td> <img src={wind_icon} alt="" className="icon" /></td>                          
                           <td><div className="text">Hissedilern Sıcaklık</div></td>
                            <td> <div className="thernal-sensation"></div></td>                               
                            </div>                        
                    </tr>  
                    <tr></tr>  
                </table>
            </div>
        </div>
    )
}

export default WeatherApp