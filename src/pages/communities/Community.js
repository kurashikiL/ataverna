import "./community.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import firebase from '../../Firebase.js';

function Community(){
    return(
        <>
            <Topbar/>
            <div className="communityContainer">
                <Sidebar/>
                <div className="communityRight">
                    <div className="communityRightTop">
                        <div className="communityCover">
                            <img className="communityCoverImg" src="/assets/posts/3.png" alt=""/> 
                        </div>
                        <div className="communityInfo">
                            <h4 className="communityInfoName">Mapas Medievais</h4>
                            <span className="communityInfoDesc">Comunidades para compartilhar seus battlemaps favoritos</span>
                        </div>
                    </div>
                
                    <div className="communityRightBottom">
                        <Feed/>
                        <Rightbar/>
                    </div>
                </div>

            </div>
        </>
    );
}
export default Community;