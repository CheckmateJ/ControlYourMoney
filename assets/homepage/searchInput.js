import React, {useContext, useState} from 'react';
import WeatherProvider, {WeatherContext} from "./weatherProvider";

const SearchInput = () => {
    const [city, setCity] = useState();
    const context = useContext(WeatherContext);
    return (
        <div className={"d-inline uk-padding uk-margin"}>
            <form className={'uk-text-center uk-search uk-search-default'} onSubmit={(event) =>{context.getWeather(event, {city: city})}}>
                <button type={"submit"} className={"uk-search-icon-flip"} uk-search-icon={'true'}></button>
                <input className={"uk-search-input"} type="search" placeholder="Search" name={"city-search"} onChange={(event) => {
                    setCity(event.target.value)
                }}/>
            </form>
        </div>
    );
};

export default SearchInput;