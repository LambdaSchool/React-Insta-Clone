import React, { Component } from 'react';
import Likes from './likes';
import UserComments from './UserComment.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

class Comment extends Component {
    render() {
       
        return (
            <div className='comment'>
              <div className="comment-container">
                <Likes />  
                <p>{this.props.likes} likes</p>
                <UserComments notes={this.props.comments} />
              </div>
              <div className='input input-holder'>
                <input type='text' placeholder='Add a Comment' className="comment-input" />
                <div className='fonta'>
                    <FontAwesomeIcon className="crossmark" icon={["fa", "ellipsis-h"]} />
                </div>
              </div>
            </div>
        );
    }
}

Comment.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text:PropTypes.string
        }).isRequired
    )
}

export default Comment;
