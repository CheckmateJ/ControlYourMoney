import './styles/main.scss';
import 'uikit';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import HomePage from './homepage/homepageComponent';
class App extends Component {
    render() {
        return (
            <div>
                <HomePage/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
