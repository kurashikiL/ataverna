import "./topbar.css"
import { Search,Group,Home,Notifications } from "@material-ui/icons"
import { Link } from "react-router-dom";

function Topbar(){
    return(
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/">
                    <img src="/assets/logo.png" alt="" className="topbarLogo"/>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="topbarIcon">
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <div className="topbarIconItem">
                            <Home className="homeIcon"/>
                        </div>
                    </Link>
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