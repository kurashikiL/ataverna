import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";

function Profile(){
    return(
        <>
            <Topbar/>
            <div className="profileContainer">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="/assets/person/1.jpg" alt=""/>
                            <img className="profilePicImg" src="/assets/person/1.jpg" alt=""/>     
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">MrPickles</h4>
                            <span className="profileInfoDesc">Mestre de DnD</span>
                        </div>
                    </div>
                
                    <div className="profileRightBottom">
                    </div>
                </div>

            </div>
        </>
    );
}
export default Profile;