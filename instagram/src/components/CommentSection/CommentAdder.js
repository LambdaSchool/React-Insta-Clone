import React from 'react';
import './Comment.css';

const CommentAdder = (props) => {
    return (<form onSubmit = {e => {
        e.preventDefault();
        }}>
        <input type='text' name={'comment' + props.index} className='comment-adder' placeholder='Add a comment...'
        onChange={props.changeCommentHandler}
        onKeyDown={e => {
            
            if (e.keyCode === 13) {
                
                props.addCommentHandler(e, props.index)
                
            }
        }

        } />
        </form>
    );

}

export default CommentAdder;