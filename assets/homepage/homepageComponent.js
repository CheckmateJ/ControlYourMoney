import React, {Component} from 'react';
import Weather from './weatherBar';
import WeatherProvider from "./weatherProvider";
import SearchInput from "./searchInput";

class HomepageComponent extends Component {
    render() {
        return (
            <div>
                <WeatherProvider >
                    <SearchInput/>
                    <Weather/>
                </WeatherProvider>
            </div>
        );
    }
}

export default HomepageComponent;