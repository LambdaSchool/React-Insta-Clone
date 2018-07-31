import React from 'react';
import PropTypes from 'prop-types';
import Comment from '../Comment/Comment.js';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      time: props.time,
      inputValue: "",
      newComments: {}
    };
  }

  inputChange = event => {
    this.setState({
      inputValue: event.target.value,
      newComments: {text: event.target.value, username: "mike" }
    })
  }

  addNewComment = (newComment, i) => {
    newComment.preventDefault();
    const newCommentArray = this.state.comments.slice();
    newCommentArray.push(this.state.newComments)
    this.setState({
      inputValue: '',
      comments: newCommentArray
    })
  }

  render() {
    return (
      <div className="comment-section">
        {this.state.comments.map( (comment, i) => {
          return <Comment
            key={i}
            comments={comment} />
        })}
        <p className="timestamp">{this.state.time}</p>
        <form onSubmit={this.addNewComment}>
          <input value={this.state.inputValue} onChange={this.inputChange} className="add-comment" placeholder=" Add a comment...">{this.inputValue}</input>
        </form>

      </div>
    )
  };
}

CommentSection.propTypes = {
  comments: PropTypes.array
}

export default CommentSection;
