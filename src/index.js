import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './css/layout/bootstrap.min.css';
import Header from './components/Header'
import RandomPlanet from './components/RandomPlanet'
import ItemList from './components/ItemList'
import PersonDetails from './components/PersonDetails'
import ErrorIndicator from './components/ErrorIndicator';
import ApiService from './services/ApiService';
import PersonPage from './components/PersonPage';

export default class App extends Component {

    apiService = new ApiService();

    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({hasError: true});
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        return (
            <div className='container'>
                <Header />
                <RandomPlanet />
                <PersonPage />

                <div className="row mb2 item-list">
                    <div className="col-md-6">
                        <ItemList 
                            onItemSelected={this.onPersonSelected} 
                            getData={this.apiService.getAllPlanets}
                            renderItem={(item) => item.name}
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>

                <div className="row mb2 item-list">
                    <div className="col-md-6">
                        <ItemList 
                            onItemSelected={this.onPersonSelected} 
                            getData={this.apiService.getAllStarships} 
                            renderItem={(item) => item.name}
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));