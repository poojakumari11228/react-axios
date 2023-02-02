import {useRef, useState} from "react";
import Posts from "./Posts";
import axios from 'axios';
import PostDetails from "../Component/PostDetails/PostDetails";
import NewPost from "../Component/New Post/NewPost";
import './Dashboard.css'


function Dashboard() {


    const [postsState, setPostsState] = useState([
        // {id: 1, title: 'OOP', author: 'Pooja Kumari'},
        // {id: 2, title: 'WAA', author: 'Pooja Kumari'},
        // {id: 3, title: 'EA', author: 'Pooja Kumari'}
    ]);

    const [postDetailState, setPostDetailState] = useState([]);

    const fetchPosts = () => {
        axios.get('http://localhost:8081/api/v1/posts')
            .then(response => {
                setPostsState(response.data);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const deletePost = (id) => {
        axios.delete('http://localhost:8081/api/v1/posts/' + id)
            .then(response => {
                fetchPosts();
                setPostDetailState([]);

            })
            .catch(error => {
                console.log(error);
            })
    }

    const fetchPostById = (id) => {
        axios.get('http://localhost:8081/api/v1/posts/' + id)
            .then(respose => {
                setPostDetailState(respose.data)
            })
            .catch(error => {
                console.log(error);
            })
    }


    const inputRef = useRef();

    const changeName = () => {
        const val = inputRef.current.value;
        const newPosts = [...postsState];
        newPosts[0].title = val;
        setPostsState(newPosts);
    }


    const newPostRef = useRef();

    const addNewPost = () => {
        console.log("Add new Post");
        const ref = newPostRef.current;
        const data = {
            title: ref['title'].value, content: ref['content'].value, author: ref['author'].value
        };

        console.log(data);
        axios.post('http://localhost:8081/api/v1/posts', data)
            .then(response => {
                alert("New Post Added");
                if (Object.entries(postsState).length !== 0)
                    fetchPosts();

            })
            .catch(error => {
                console.log(error);
            })


    }

    return (<div>
        <div className="site-branding, header">
            <h1 className="site-title">Dashboard</h1>
        </div>
        <div className="header-action">

            <input type="text" ref={inputRef}/>
            <button onClick={changeName}>Change Name</button>
            <button onClick={fetchPosts}>Fetch Posts</button>

            <NewPost newPostRef={newPostRef} addNewPost={addNewPost}/>

        </div>
        <div className="centered">
            <div className="posts">
                <Posts posts={postsState} detail={fetchPostById}/>

            </div>

            {Object.entries(postDetailState).length !== 0 ? (
                <div className="post-details"><h1>Details</h1>
                    <PostDetails
                        id={postDetailState.id}
                        title={postDetailState.title}
                        content={postDetailState.content}
                        author={postDetailState.author}
                        delete={deletePost}
                    />
                </div>) : null}


        </div>
    </div>);
}

export default Dashboard;
