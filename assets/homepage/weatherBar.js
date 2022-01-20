import React, {useContext} from 'react';
import WeatherProvider, {WeatherContext} from "./weatherProvider";
import rain from "../../public/images/gif/Raining.gif";
import clouds from "../../public/images/gif/clouds.gif";
import drizzle from "../../public/images/gif/drizzle.gif";
import snow from "../../public/images/gif/snow.gif";
import clear from "../../public/images/gif/sun.gif";
import thunderstorm from "../../public/images/gif/storm.gif";
import SearchInput from "./searchInput";

function WeatherBar(props) {
    const context = useContext(WeatherContext);
    const weather = () => {
        let gif = null
        let description = context.weather.toLowerCase();
        if (description.indexOf('clouds') > -1) {
            gif = clouds;
        }else if(description.indexOf('rain') > -1){
            gif = rain;
        }else if(description.indexOf('drizzle') > -1){
            gif = drizzle;
        }else if(description.indexOf('snow') > -1){
            gif = snow
        }else if(description.indexOf('clear') > -1){
            gif = clear;
        }else if(description.indexOf('thunderstorm') > -1){
            gif = thunderstorm;
        }
        return gif;
    }
    const imageStyle = {
        backgroundImage: "url(" + weather() + ")",
        backgroundRepeat: 'no-repeat',
        position: 'absolute',
        height: '100px',
        width: '100px',
        left: '50%',
        transform: 'translateX(-50%)',
        top: 0,
        mixBlendMode: 'multiply'
    }

    return (
        <div className={"weather-images uk-text-center"}>
            <span className={"weather-nav"} style={imageStyle}></span>
            <SearchInput/>
            <span>City: {context.city} </span>
            <span>Description: {context.weather} </span>
            <span>Temp: {context.main.temp} </span>
            <span>Feels like: {context.main.feels_like} </span>
            <span>Temp min: {context.main.temp_min} </span>
            <span>Temp max: {context.main.temp_max} </span>
        </div>
    );
}


export default WeatherBar;