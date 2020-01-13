import React, { Component } from 'react'

import ApiService from '../services/ApiService'
import Preloader from './Preloader';
import ErrorIndicator from './ErrorIndicator';
import '../css/RandomPlanet.css'

export default class RandomPlanet extends Component {

    apiService = new ApiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    onPlanetLoaded = (planet) => {
        this.setState({planet, loading: false});
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25) + 3;
        this.apiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 4500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const {planet, loading, error} = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorIndicator/> : null;
        const preloader = loading ? <Preloader /> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return(
            <div className='random-planet jumbotron rounded'>
                {errorMessage}
                {preloader}
                {content}
            </div>
        );
    }    
};

const PlanetView = ({planet}) => {

    const {id, name, population, rotationPeriod, diameter} = planet;

    return(
        <React.Fragment>
            <img className="planet-image" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='planet'/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
    
};