import './NewPost.css'
const NewPost = (props) =>{
    return(

        <div className='new-post'>
           <form ref={props.newPostRef}>
               <h1>Add New Post</h1>
               <label>Title   : </label><input type="text" name='title' /><br/>
               <label>Content : </label><input type="text" name='content' /><br/>
               <label>Author  : </label><input type="text" name='author'/><br/>
               <input type='button' value='Add' onClick={()=>props.addNewPost()}/>
           </form>
        </div>
    )
}

export default NewPost;