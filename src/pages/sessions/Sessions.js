import "./sessions.css";
// import "@progress/kendo-theme-default/dist/all.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Agenda from "../../components/agenda/Agenda";


function Session(){
    return(
        <>
            <Topbar/>
            <div className="sessionContainer">
                <Sidebar/>
                <div className="sessionRight">
                    <Agenda/>
                </div>

            </div>
        </>
    );
}
export default Session;