import "./topbar.css"
import { Search,Group,Home,Notifications,ExitToApp } from "@material-ui/icons"
import { Link } from "react-router-dom";
import { useNavigate} from "react-router";


function Topbar(){
    
    const navigate = useNavigate();
    const navigateTo = () => {
        console.log("entrouuuuu")
        navigate('/login');
    }
    
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
                    <button className="topbarButtonItem" onClick={navigateTo}>
                        <ExitToApp/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Topbar;