import React, { Component } from 'react';
import './PostContainer.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart'
import faComment from '@fortawesome/fontawesome-free-solid/faComment'
export default class PostContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments:props.comments,
            likes: props.likes,
            newComment: ''
        };
    }

    // increase number of likes
    increaseLikes = (e) => this.setState({likes: this.state.likes + 1});

    render() {
        return (
            <div className='Post'>
                <div className='Post__header'>
                    <img
                    className='Post__thumbnailURL'
                    src={this.props.thumbnailUrl}
                    alt='User Image'
                    />
                    <h1 className='Post__username'>
                        {this.props.username}
                    </h1>
                </div>
                <img
                 className='Post__image'
                 src={this.props.imageUrl}
                 alt='Poster Image'
                />
                <div className='Post__footer'>
                    <div className='Post__action-bar'>
                        <FontAwesomeIcon icon={faHeart} size='sm' onClick={this.increaseLikes} />
                        <FontAwesomeIcon icon={faComment} size='sm'/>
                    </div>
                    <div className='Post__likes'>
                        {this.state.likes} likes
                    </div>
                </div>
            </div>
        )
    }
}

