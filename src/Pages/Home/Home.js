import React, { useState, useContext } from 'react'
import { AppContext } from '../../Utils/Utils';

function Home() {
    const [content, setContent] = useState('');
    const appContext = useContext(AppContext);

    const onContentChange = (e) => {
        setContent(e.target.value);
    }

    const addPost = (e) => {

        e.preventDefault();

        if(content === '')
            return;

        appContext.addPost({
            content: content,
            comments: [],
            likes: 0
        })
        setContent('');
    }

  return (
    <div className='d-flex flex-column align-items-center mt-5'>
        <form className='w-50 form' onSubmit={addPost}>
            <textarea className='w-100 form-control' value={content} onChange={onContentChange} rows={5} placeholder='type something...' />    
            <div className='d-flex alig-items-start w-50'>
                <button className='mt-2 btn btn-success' >Add Post</button>
            </div>
        </form>
    </div>
  )
}

export default Home;