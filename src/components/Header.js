import React, { Component } from 'react'
import '../css/Header.css'

export default class Header extends Component {
    render() {
        return(
            <div className='header'>
                <div className='logo'>
                    MyApp
                </div>
                <ul>
                    <li>Planets</li>
                    <li>Persons</li> 
                    <li>Starships</li>   
                </ul>
            </div>
        );
    }    
}