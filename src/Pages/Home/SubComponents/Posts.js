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
    <div className='d-flex flex-column align-items-center w-100 '>
        {
            props?.postId === 0 ? '' : <hr className='w-50' />
        }
        <div className='d-flex w-50 mx-auto flex-column my-2'>
        <div className='shadow-lg p-2 rounded'>
            {props?.post?.content}
        </div>
        <div className='mt-3 d-flex'>
            <span className={`btn ${props?.post?.like ? 'btn-primary' : 'btn-light'} ms-1 w-25`} onClick={addLike}>Like</span>
            <span className='btn btn-secondary ms-2 w-25' onClick={toggleComments}>Comments</span>
        </div>
        <div className={`${!showComments? 'd-none' : 'd-inline'}`}>
            <PostComments postId={props.postId} />
        </div>
    </div>
    </div>
  )
}

Posts.defaultProps = {
    content: '',
    comments: []
}

export default Posts;