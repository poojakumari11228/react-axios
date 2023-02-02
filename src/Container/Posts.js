import Post from "../Component/Post";
import '../Component/Post.css'

const Posts = (props) => {

    console.log("Inside Posts");
    console.log(props.detail)

    const post = props.posts.map(p => {
        return <div className="post">
            <Post
            id={p.id}
            title={p.title}
            author={p.author}
            detail={props.detail}
        />
        </div>
    });
    return post;

}

export default Posts;



