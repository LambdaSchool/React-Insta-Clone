import React from "react";
import "./PostContainerStyle.css";

const PostHeader = props => {
  return (
    <div className="postHeader">
      <div className="postThumbnailContiner">
        <img
          alt="postHeader"
          className="postThumbnail"
          src={props.thumbnailUrl}
        />
      </div>
      <div> {props.username}</div>
    </div>
  );
};

export default PostHeader;
