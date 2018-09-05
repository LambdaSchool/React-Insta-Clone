import React from 'react';
import IGLogo from '../../assets/iglogo.png';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className='search-bar-wrapper'>
            <div className='image-wrapper'>
                <i class='fab fa-instagram fa-2x'></i>
                <img alt='instagram logo' src={IGLogo} className='logo-image' />
            </div>

            <div className='search-bar'>
                <input type='text' class='form-control' placeholder='Search' />
            </div>

            <div className='social-wrapper'>
                <div className='social'>
                    <i class='far fa-compass'></i>
                </div>

                <div className='social'>
                    <i class='far fa-heart'></i>
                </div>

                <div className='social'>
                    <i class='far fa-user'></i>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;