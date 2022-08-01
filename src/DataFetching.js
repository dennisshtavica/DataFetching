import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "./DataFetching.css"


function DataFetching() {
    const [post, setPost] = useState({})
    const [user, setUsers] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }


    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res);
                setPost(res.data)
            })
            .catch(err => {
                console.log(err);
        })
    }, [idFromButtonClick])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${idFromButtonClick}`)
            .then(res => {
                console.log(res);
                setUsers(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [idFromButtonClick])

  return (
    <div>
      <input type="text" className='input' value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" className='button' onClick={handleClick}>
        Fetch Post
      </button>
      <div className='flex-container'>
        <h1>{user.name}</h1>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default DataFetching