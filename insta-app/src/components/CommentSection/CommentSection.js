import React from 'react'; 
import PropTypes from 'prop-types'; 
import dummyData from '../../dummy-data'; 

const CommentSection = props =>{
    return(
    <div className="comment-container">
    {props.comments.map((comments, data) =>
    <div key = {data}>
        <h1>{comments.username}</h1>
        <p>{comments.text}</p>
    </div>
    )}
    </div>
    )
}
export default CommentSection; 