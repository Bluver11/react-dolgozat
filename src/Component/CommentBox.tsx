import { Comment } from "../Comment";

export function CommentBox(props:Props){
    
    const { comment } = props;
    
    
    
   return (
   <>
   <div className="row">
    <div className="col-6">
    <span className="col-6">
    <img src={comment.avatar} alt="Avatar" />
    </span>
    </div>
    <div className="col-6">
    <span className="col-6">
    <p><a href="mailto:{comment.email}">{comment.email}</a></p>
    </span>
    <p>{comment.content}</p>
    </div>
    </div>
    </>
   )
}




interface Props{
    comment: Comment
}


export default CommentBox;
