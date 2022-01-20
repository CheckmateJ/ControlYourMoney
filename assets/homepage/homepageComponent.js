import React, {Component, useContext} from 'react';
import Weather from './weatherBar';
import WeatherProvider, {WeatherContext} from "./weatherProvider";

class HomepageComponent extends Component {
    render() {
        return (
            <div >
                <div>
                    <WeatherProvider>
                        <Weather/>
                    </WeatherProvider>
                </div>
            </div>
        );
    }
}

export default HomepageComponent;