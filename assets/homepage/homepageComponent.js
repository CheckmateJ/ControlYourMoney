import React, {Component} from 'react';
import Weather from './weatherBar';
import WeatherProvider from "./weatherProvider";

class HomepageComponent extends Component {
    render() {
        return (
            <div>
                <WeatherProvider>
                    <Weather/>
                </WeatherProvider>
            </div>
        );
    }
}

export default HomepageComponent;