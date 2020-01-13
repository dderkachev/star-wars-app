import React, { Component } from 'react'

import '../css/Header.css'

export default class Header extends Component {
    render() {
        return(
            <div className="header d-flex">
                <h3>
                    <a href="#0">
                    StarDB
                    </a>
                </h3>
                <ul className="d-flex">
                    <li>
                        <a href="#0">People</a>
                    </li>
                    <li>
                        <a href="#0">Planets</a>
                    </li>
                    <li>
                        <a href="#0">Starships</a>
                    </li>
                </ul>
            </div>
        );
    }    
}