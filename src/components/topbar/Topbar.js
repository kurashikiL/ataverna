import "./topbar.css"
import { Search,Group,Home,Notifications } from "@material-ui/icons"

function Topbar(){
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <img src="/assets/logo.png" alt="" className="topbarLogo"/>
            </div>
            <div className="topbarCenter">
                <div className="topbarIcon">
                    <div className="topbarIconItem">
                        <Home className="homeIcon"/>
                    </div>
                    <div className="topbarIconItem">
                        <Group className="groupIcon"/>
                    </div>
                </div>
                <div className="searchbar">
                    <Search className="searchIcon"/>
                    <input placeholder="Buscar na Taverna" className="searchInput"></input>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarIcon">
                    <div className="topbarIconItem">
                        <Notifications className="notificationIcon"/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar;