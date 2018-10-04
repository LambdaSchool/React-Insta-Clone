import React from "react";
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(){
        super();
        this.state = {
            searchValue: ''
        }
    }

    render(){
        return (
            <div className="searchbar-container">
                {/*Instagram Icon*/}
                <i className="instagram-logo fa fa-instagram fa-2x"></i>
                {/*Instagram logo font: Billabong*/}
                <p className="instagram-letter-logo">Instagram</p>
                {/*Search bar*/}
                <div className="search-area">
                    <input type="text" placeholder="Search" className="search-input" onChange={this.inputHandler} value={this.state.searchValue}/>
                    <i className="fa fa-search"></i>
                </div>
                
                {/*3 icons on the right*/}
                <div className="rigth-container">
                    <div className="rigth-icon-container">
                        <i className="far fa-compass fa-1x"></i>
                        <i className="far fa-heart fa-1x"></i>
                        <i className="far fa-user fa-1x"></i>
                    </div> 
                </div>
            </div>
        )
    }
}

export default SearchBar;