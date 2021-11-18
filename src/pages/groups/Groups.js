import "./groups.css";
import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import firebase from '../../Firebase.js';
import PopUp from "../../components/popUp/Popup";

class Groups extends React.Component{
    state = {
        seen: false
      };
    
      togglePop = () => {
        this.setState({
          seen: !this.state.seen
        });
      };
    render(){
        return(
            <>
                <Topbar/>
                <div className="groupsContainer">
                    <Sidebar/>
                    <div className="groupsRight">
                        <div className="groupsRightTop">
                            <div className="groupsCover">
                                <img className="groupsCoverImg" src="/assets/posts/3.png" alt=""/> 
                            </div>
                            <div className="groupsInfo">
                                <h4 className="groupsInfoName">Catarro do cutulo</h4>
                                <span className="groupsInfoDesc">Sessão da galera top!</span>
                            </div>
                        </div>
                    
                        <div className="groupsRightBottom">
                            <Feed/>
                            <div className="buttonCreateSession" onClick={this.togglePop}>
                                <button>Criar sessão</button>
                            </div>
                            {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
                        </div>
                    </div>

                </div>
            </>
        );
    }
}
export default Groups;