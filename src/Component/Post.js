import './Post.css'
const Post = (props) => {
    // console.log("----------inside post");
    // console.log(props)
    return (
        <div  >
            <label>ID: {props.id}</label><br />
            <label>TITLE: {props.title}</label><br />
            <label>AUTHOR: {props.author}</label><br />
            <input type='button' value='Show Details' onClick={() => props.detail(props.id)}/>

        </div>
    );
}

export default Post;

