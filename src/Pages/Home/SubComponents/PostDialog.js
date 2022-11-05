import React, { useState, useContext } from 'react'
import { AppContext } from '../../../Utils/Utils';
import './PostsDialog.css'

function PostComments(props) {
    const [comment, setComment] = useState('');
    const appContext = useContext(AppContext);
    // console.log(props.post)

    const onCommentChanged = (e) => {
        setComment(e.target.value);
    }   

    const addComment = (e) => {
        if(comment === '')
            return;

        e.preventDefault();        
        appContext.addComment(comment, props.postId);
        setComment('')
        
    }

  return (
    <div>
        <div className='d-flex flex-column'>
            <form onSubmit={addComment}>
            <input className='my-3 form-control' placeholder='Add comment...' value={comment} onChange={onCommentChanged} />
            </form>
        </div>
        <div className='d-flex flex-column'>
            {
                appContext?.posts[props.postId]?.comments.map((com, idx) => {
                    return <div className='d-flex flex-column' key={idx}>
                        {
                            idx === 0 ? '' : 
                            <hr className='w-100 comments-separator' />
                        }
                        <span className=''>{com?.value}</span>
                        <span className='small mt-1 text-muted'>{typeof com?.date === 'number' ?  new Date(com?.date).toLocaleTimeString(): ''}</span>
                    </div>
                })
            }
        </div>
    </div>
  )
}

PostComments.defaultProps = {
    comments : []
}

export default PostComments;