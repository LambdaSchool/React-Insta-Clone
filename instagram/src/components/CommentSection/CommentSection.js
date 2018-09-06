import React from 'react';
import Comment from './Comment';
import './CommentSection.css';

class CommentSection extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      commentInput: '',
      likes: 0,
      username: 'TestUsername',
    };
  }

  componentDidMount() {
    this.setState({
      comments: this.props.post.comments,
      likes: this.props.post.likes,
    });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  increaseLikes = (event) => {
    event.preventDefault();
    this.setState({ likes: this.state.likes + 1 });
  };

  addNewComment = (event) => {
    event.preventDefault();
    // console.log('test add new comment');
    // console.log(...this.state.comments);
    // console.log(this.state.commentInput);
    if (this.state.commentInput) {
      this.setState({
        comments: [
          ...this.state.comments,
          {
            username: this.state.username,
            text: this.state.commentInput,
          },
        ],
        commentInput: '',
      });
    }
  };

  render() {
    console.log('comment section render()');
    console.log(this.props);
    // console.log(this.state.comments);
    // console.log('render', this.state.commentInput);
    console.log('----------------');
    return (
      <div className="comment-section">
        <div className="icon-buttons">
          <div className="like-button" onClick={this.increaseLikes}>
            <i className="far fa-heart" />
          </div>
          <div className="comment-button">
            <i className="far fa-comment" />
          </div>
          <h4>{this.state.likes} likes</h4>
        </div>

        {this.state.comments.map((comment) => (
          <Comment comment={comment} key={comment.text} />
        ))}
        <form onSubmit={this.addNewComment}>
          <input
            value={this.state.commentInput}
            onChange={this.handleChange}
            placeholder="Add a comment..."
            name="commentInput"
          />
        </form>
      </div>
    );
  }
}

export default CommentSection;
