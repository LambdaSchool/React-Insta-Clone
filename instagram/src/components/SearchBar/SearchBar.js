import React from 'react'
import logos from '../../img/logos.png';
import search from '../../img/search.png';
import compass from '../../img/compass.png';
import heart from '../../img/heart.png';
import friend from '../../img/friend.png';
import './searchBar.css'
class SearchBar extends React.Component {

    render() {
        return (
            <div className="searchBar">
                <div><img className="header" src={logos} alt="logo" /></div>
                <div>
                    <form className="form" onSubmit={(event) => { this.props.filter(event) }}>
                        <input onChange={this.props.searchHandler} type="text" value={this.props.searchInput} placeholder=" Search 🔍" />
                    </form>    
                    <button onClick={(event) => { this.props.reset(event) }}>Reset</button>
                </div>
                <div className="compheartfriend">
                    <img className="icons" src={compass} alt="compass" />
                    <img className="icons" src={heart} alt="heart" />
                    <img className="icons" src={friend} alt="friend" />
                </div>
            </div>
        );
    }
}

export default SearchBar