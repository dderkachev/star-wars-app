import React, { Component } from 'react'

import ApiService from '../services/ApiService';
import Preloader from './Preloader';
import '../css/PersonalDetails.css'

export default class PersonalDetails extends Component {

    apiService = new ApiService();

    state = {
        person: null
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.personId !== prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { personId } = this.props;
        if(!personId) {
            return <Preloader/>;
        }

        this.apiService
            .getPerson(personId)
            .then((person) => {
                this.setState({person});
            });
    }

    render() {

        if(!this.state.person) {
            return <span>Select a person from a list</span>;
        }

        const {id, name, gender, birthYear, eyeColor} = this.state.person;

        return(
            <div className="person-details card">
                <img className="person-image"
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt='person'/>

                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }    
}