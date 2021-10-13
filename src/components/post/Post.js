import "./post.css";
import {MoreVert} from "@material-ui/icons";
function Post(){
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className = "postProfileImg" src="/assets/person/1.jpg" alt=""/>
                        <span className = "postUsername">MestreShow</span>
                        <span className = "postDate">5min</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">primeiroPost</span>
                    <img className="postImg" src="/assets/person/1.jpg" alt=""/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="assets/d20.png" alt="" />
                        <span className="postDisikeCounter">5</span>      
                    </div>
                        <div className="postBottomRight">
                        <span className="postCommentText">5 comentários</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;