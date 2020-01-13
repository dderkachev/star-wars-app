import React, {Component} from 'react'

import ItemList from './ItemList'
import PersonDetails from './PersonDetails'
import ErrorIndicator from './ErrorIndicator';
import ApiService from '../services/ApiService';
import Row from './Row'
import '../css/PersonPage.css'

export default class PersonPage extends Component {

    apiService = new ApiService();

    state = {
        selectedPerson: 3,
        hasError: false
    };

    onPersonSelected = (selectedPerson) => {
        this.setState({selectedPerson});
    };

    componentDidCatch() {
        this.setState({hasError: true});
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        const itemList = (
            <ItemList 
                onItemSelected={this.onPersonSelected} 
                getData={this.apiService.getAllPeople} 
                renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}
            />
        );

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson}/>
        );

        return(
            <Row 
                left={itemList} 
                right={personDetails}
            />
        );
    }
}