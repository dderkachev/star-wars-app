import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './css/layout/bootstrap.min.css';

import Header from './components/Header'
import RandomPlanet from './components/RandomPlanet'
import ItemList from './components/ItemList'
import PersonDetails from './components/PersonDetails'

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <RandomPlanet />

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails />
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));