import React, {Component, createContext} from 'react';
import axios from 'axios';

export const WeatherContext = createContext();

class WeatherProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {city: '', main: {}, weather: '', wind: {}}
    }

    getWeather(event, city) {
        event.preventDefault()
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.city}&lang=en&appid=4618bc0350ff8036acafc7f2463a71dd&units=metric`).then(response => {
            this.setState({
                city: city.city,
                main: response.data.main,
                weather: response.data.weather[0].description,
                wind: response.data.wind
            })

        })

    }

    render() {
        return (
            <WeatherContext.Provider value={{
                ...this.state,
                getWeather: this.getWeather.bind(this)
            }}>
                {this.props.children}
            </WeatherContext.Provider>
        );
    }
}

export default WeatherProvider;