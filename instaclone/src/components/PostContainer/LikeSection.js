import React from 'react';
import heart from '../../assets/heart.png';
import redheart from '../../assets/redheart.png';
import comment from '../../assets/comment.png';
import styled from 'styled-components';
import share from '../../assets/shareicon.jpg';
import bookmark from '../../assets/bookmark.png';

const LikeImg = styled.img`
    width: 25px;
    padding: 2px 10px 0 5px;
`
const LikeSectionIcons = styled.div`
    display: flex;
    justify-content: space-between;
`

const LikeSection = props => {
    return(
        <div>
            <LikeSectionIcons>
        <div>
        <LikeImg src={heart} onClick={props.incrementLike}/>
        <LikeImg src={comment} />
        <LikeImg src={share} />
        </div>
        <div>
        <LikeImg src={bookmark} />
        </div>
        </LikeSectionIcons>
        <div>
            <p><strong>{props.likes}</strong> likes</p>
        </div>
        </div>
    )
}

export default LikeSection;