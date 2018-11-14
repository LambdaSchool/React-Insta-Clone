import React, { Component } from 'react';
import './SearchBar.css';

const SearchBar = props => {
    return (
        <div className='search-section'>
            <div className='instagram-icons'>
                <i className="fa fa-instagram fa-3x" aria-hidden="true"></i>
                <img src='https://itsdcdn.com/resources/services/logowide/170/instagram.png' className ='instagram-title' alt='Instagram Logo' />
            </div>

            <input 
                type='text' 
                placeholder='Search' 
                className='search-bar'
                value={props.searchText}
                onChange={props.handleSearch}
            />

            <div className='menu-icons'>
                <i className="fa fa-compass fa-3x" aria-hidden="true"></i>
                <i className="fa fa-heart-o fa-3x" aria-hidden="true"></i>
                <i className="fa fa-user-o fa-3x" aria-hidden="true"></i>
            </div>
        </div>
    )
}

export default SearchBar;