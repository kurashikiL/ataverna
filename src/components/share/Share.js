import "./share.css";
import {Photo,AttachFile,Videocam} from "@material-ui/icons";

function Share() {
    return(
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className = "shareProfileImg" src="/assets/person/1.jpg" alt=""/>
                    <input placeholder="Conte sua história" className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <Photo htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Foto ou Video</span>
                        </div>
                        <div className="shareOption">
                            <AttachFile htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Arquivo</span>
                        </div>
                        <div className="shareOption">
                            <Videocam htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Stream</span>
                        </div>
                    </div>
                    <button className="shareButton">Publicar</button>
                </div>
            </div>
        </div>
    )
}

export default Share;