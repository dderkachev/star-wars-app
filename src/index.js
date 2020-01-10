import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.min.css';

export default class App extends Component {
    render() {
        return (
            <p>Kek</p>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));

class ApiService {
    _apiBase = 'https://swapi.co/api';

    async getResource() {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error('`Could not fetch`');
        }

        return await res.json();
    };

    getAllPeople() {
        return this.getResource(`/people/`);
    }

    getPerson(id) {
        return this.getResource(`people/${id}`);
    }
};

const swapi = new ApiService();

swapi.getAllPeople().then((body) => {
    console.log(body);
});