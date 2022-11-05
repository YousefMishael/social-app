import React, { useState, useContext } from 'react'
import { AppContext } from '../../../Utils/Utils';
import PostComments from './PostDialog';


function Posts(props) {
    const appContext = useContext(AppContext);
    const [showComments, setShowComments] = useState(false);
 

    const addLike = () => {
        appContext.addLike(props.postId)
    }

    const toggleComments = () => {
        setShowComments(!showComments)
    }

  return (
    <div className='border d-flex w-50 mx-auto p-2 flex-column my-2'>
        {props?.post?.content}
        <div className='mt-3 d-flex'>
            <span className={`btn ${props?.post?.like ? 'btn-primary' : 'btn-light'} ms-1`} onClick={addLike}>Like</span>
            <span className='btn btn-secondary ms-2' onClick={toggleComments}>Comments</span>
        </div>
        <div className={`${!showComments? 'd-none' : 'd-inline'}`}>
            <PostComments postId={props.postId} />
        </div>
    </div>
  )
}

Posts.defaultProps = {
    content: '',
    comments: []
}

export default Posts;