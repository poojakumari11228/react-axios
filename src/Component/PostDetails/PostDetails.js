import './PostDetails.css'
const PostDetails = (props) =>{
    console.log(props)
     return(
         <div>
             <label>Id: {props.id}</label>
             <h2> {props.title}</h2>
             <p> {props.content}</p>
             <label>By: {props.author}</label><br/>
             <input type='button' value='Delete' onClick={()=>props.delete(props.id)} />
         </div>
     );

}
export default PostDetails;