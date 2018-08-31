import React from 'react';
import './postContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = (props) => {
    return (
        <div>
            <CommentSection comments={props.post.comments} post={props.post}/>
        </div>
    )
}


export default PostContainer;