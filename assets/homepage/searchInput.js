import React, {useContext, useState} from 'react';
import WeatherProvider, {WeatherContext} from "./weatherProvider";

const SearchInput = () => {
    const [city, setCity] = useState();
    const context = useContext(WeatherContext);
    return (
        <div>
            <form onSubmit={(event) =>{context.getWeather(event, {city: city})}}>
                <input type={"input"} name={"city-search"} onChange={(event) => {
                    setCity(event.target.value)
                }}/>
                <button type={"submit"}>Search</button>
            </form>

        </div>
    );
};

export default SearchInput;