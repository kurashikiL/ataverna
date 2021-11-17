import "./sessions.css";
// import "@progress/kendo-theme-default/dist/all.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
// import PickDateOfBirth from "./components/agenda/PickDateOfBirth";
// import BookDrivingSlot from "./components/agenda/BookDrivingSlot";
// import RoomScheduler from "./components/agenda/RoomScheduler";


function Session(){
    return(
        <>
            <Topbar/>
            <div className="sessionContainer">
                <Sidebar/>
                <div className="sessionRight">
                    {/* <PickDateOfBirth />
                    <hr className="k-my-8" />
                    <BookDrivingSlot />
                    <hr className="k-my-8" />
                    <RoomScheduler /> */}
                </div>

            </div>
        </>
    );
}
export default Session;