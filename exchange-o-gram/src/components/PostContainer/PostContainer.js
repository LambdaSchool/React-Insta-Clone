import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection.js';
import './PostContainer.css'

class PostContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            comments: this.props.post.comments
        }
    }

    render(){
        return(
            <div className="post-container">
                <div className="img-name">
                    <img src={this.props.post.thumbnailUrl} alt={`${this.props.post.username} Icon`}></img>
                    <p>{this.props.post.username}</p>
                </div>
                <img src={this.props.post.imageUrl} alt={`${this.props.post.username} Post`}></img>
                <CommentSection comments={this.state.comments} addNewComment={this.props.addNewComment}/>
            </div>
        )
    }
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        }))
    })
}

export default PostContainer;