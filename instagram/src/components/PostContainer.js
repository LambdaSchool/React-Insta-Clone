import React from 'react';
import './PostContainer.css';
import heartIcon from '.././assets/Instagram-Heart.png';
import commentBubbelIcon from '.././assets/Instagram-CommentBubbleIcon.png';
import CommentSection from './CommentSection';
import PropTypes from 'prop-types';

const PostContainer = (props) => {
    return (
        <div>
            {props.instaData.map(user => {
                return (
                    <div className= "postcontainer-wrapper" key= {user.username}>
                    {/* PostContainer Header Section Start */}
                        <div className= "postContainer-header">
                            <img className= "postContainer-header-img" src={user.thumbnailUrl} alt= "userProfileImg" width="50px"></img>
                            <h4 className="postContainer-header-user">{user.username}</h4>
                        </div>
                    {/* PostContainer Header Section End */}

                    {/* PostContainer Post Content Section Start */}
                        <div className= "post-content-wrapper-main">
                        <div className= "post-content-wrapper" key={user.username}>
                            <div className= "post-content-body">
                                <img className= "post-content-body-img" src={user.imageUrl} alt= "userPostImg" width="700px"></img>
                            </div>

                            {/* PostContainer Post Content Footer Section Start */}
                            <div className= "post-content-footer">
                                <div className= "post-nav">
                                    <div className="post-nav-icons">
                                        <img className= "post-nav-heartIcon" alt="heartIcon" src= {heartIcon} width = "30px" height ="30px"></img>
                                        <img className= "post-nav-TextBubbelIcon" alt= "TextBubbelIcon" src= {commentBubbelIcon} width = "30px" height ="30px"></img>
                                    </div>
                                    <div className="post-nav-likes">
                                        <h4 className= "post-nav-total-likes">{user.likes} likes</h4>
                                    </div>
                                </div>
                            </div >
                            {/* PostContainer Post Content Footer Section end */}

                            {/* PostContainer Comment Section Start */}
                            <CommentSection comments = {user.comments} />
                            {/* <div className= "comments">
                                {props.instaData.map()}
                            </div> */}
                            
                            {/* <div className= "post-content-comments-wrapper">
                                COMMENT SECTION PLACEHOLDER
                            </div> */}
                            {/* PostContainer Comment Section End */}

                        </div>
                    )
            </div>
            {/* PostContainer Post Content Section Start */}
        </div>
                     

                     
                )
            })}


        </div>
    )
}

PostContainer.propTypes = {
    username: PropTypes.string.isRequired, 
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default PostContainer;
