import React, { Component } from 'react';
import './PostContainer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CommentSection from '../CommentSection/CommentSection';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {comments: props.post.comments, currentComment: '', currentUser: 'Bobby123'};
    }

    commentHolder = (event) => {
        this.setState({ currentComment: event.target.value });
    }

    addComment = (event, prevState) => {
        event.preventDefault();
        let comment = this.state.currentComment;
        let user = this.state.currentUser;
        let newList = this.state.comments.slice();
        let newComment = {text: comment, username: user};
        newList.push(newComment);
        this.setState({comments: newList});
    }

    render() {
        return (
            <div className="post" key={this.props.post.timestamp}>
                <div className="header row">
                    <div className="col-sm-12 d-flex">
                        <img src={this.props.post.thumbnailUrl} alt="thumbnail of user" />
                        <p className="username">{this.props.post.username}</p>
                    </div>
                </div>
                <img src={this.props.post.imageUrl} alt="user's beautiful post" />
                <div className="bottom">
                    <div className="icons">
                        <FontAwesomeIcon icon={['far', 'heart']} className="icon" />
                        <FontAwesomeIcon icon={['far', 'comment']} className="icon" />
                    </div>
                    <p>{this.props.post.likes} likes</p>
                    <CommentSection comments={this.state.comments} />
                    <p>{this.props.post.timestamp}</p>
                    <form onSubmit={this.addComment} className="add-comment">
                        <input type="text" placeholder="Add a comment" onChange={this.commentHolder} ></input>
                    </form>
                </div>
            </div>
        );
    }
}

export default Post;