import "./sidebar.css"
import {Chat,Forum, Group, GroupWork, Help, Person, Settings, Videocam, DateRange} from "@material-ui/icons";
import { Link } from "react-router-dom";

function Sidebar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <Link to="/profile" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <li className="sidebarListItem">
                            <Person className="sidebarIcon"/>
                            <span className="sidebarListItemText">Perfil</span>
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chat</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">Amigos</span>
                    </li>
                    <Link to="/sessions" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <li className="sidebarListItem">
                            <DateRange className="sidebarIcon"/>
                            <span className="sidebarListItemText">Sessões</span>
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <Forum className="sidebarIcon"/>
                        <span className="sidebarListItemText">Comunidades</span>
                    </li>
                    <li className="sidebarListItem">
                        <GroupWork className="sidebarIcon"/>
                        <span className="sidebarListItemText">Grupos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Videocam className="sidebarIcon"/>
                        <span className="sidebarListItemText">Streams</span>
                    </li>
                    <li className="sidebarListItem">
                        <Settings className="sidebarIcon"/>
                        <span className="sidebarListItemText">Configurações</span>
                    </li>
                    <li className="sidebarListItem">
                        <Help className="sidebarIcon"/>
                        <span className="sidebarListItemText">Ajuda</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;