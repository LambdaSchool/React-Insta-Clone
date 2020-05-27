import React from 'react';
import './comment.css';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      comment: props.comment,
      likes: this.props.likes,
      username: this.props.users.username,
      isLiked: false
    };
  }

  handleChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  addComment = event => {
    event.preventDefault();

    const newComment = {
      text: this.state.text,
      username: this.state.username
    };

    this.setState({
      comment: [...this.state.comment, newComment]
    });
  };

  addLikes = event => {
    if (this.state.isLiked) {
      this.setState(prevState => {
        return {
          isLiked: false,
          likes: prevState.likes - 1
        };
      });
    } else {
      this.setState(prevState => {
        return {
          isLiked: true,
          likes: prevState.likes + 1
        };
      });
    }

    // this.setState({
    //   // likes: [...this.state.likes, newLikes]
    //   ...this.state,
    //   likes: this.state.likes + 1
    // });
  };

  render() {
    console.log(this.state.comment);
    return (
      <div className='comments'>
        <div onClick={this.addLikes} className='hearts'>
          <p>
            <i className='heart outline icon' />
          </p>
          <p>
            <i className='comment outline icon say' />
          </p>
        </div>

        <p className='likes'>{this.state.likes}&nbsp;likes</p>

        {this.state.comment.map(comment => {
          return (
            <div className='user-comment'>
              <p className='user'>{comment.username}</p>
              <p>{comment.text}</p>
            </div>
          );
        })}

        <div class='time'>
          <p>{this.props.time}</p>
        </div>

        <form onSubmit={this.addComment}>
          <input type='text' placeholder='Add a comment' onChange={this.handleChange} value={this.state.value} className='input' />
        </form>
      </div>
    );
  }
}

export default CommentSection;
