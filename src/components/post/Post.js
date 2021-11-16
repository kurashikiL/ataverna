import "./post.css";
import {MoreVert} from "@material-ui/icons";
import {Users} from "../../dummyData";
import {useState} from "react";

function Post({post}){
    const [ like, setLike] = useState(post.like);
    const [ isLiked, setIsLiked] = useState(false);

    const likeHandler = () =>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className = "postProfileImg" src="/assets/person/1.jpg" alt=""/>
                        <span className = "postUsername">{Users.filter((u)=>u.id === post.userId)[0].username}</span>
                        <span className = "postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post?.photo} alt=""/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/d20.png" onClick={likeHandler} alt="" />
                        <span className="postLikeCounter">{like}</span>      
                    </div>
                        <div className="postBottomRight">
                        <span className="postCommentText">{post.comment}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;