import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './css/layout/bootstrap.min.css';

import Header from './components/Header'
import RandomPlanet from './components/RandomPlanet'

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <Header />
                    <RandomPlanet />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));