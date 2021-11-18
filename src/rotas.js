import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Session from "./pages/sessions/Sessions";
import Community from "./pages/communities/Community";
import Groups from "./pages/groups/Groups";
import Usertag from "./pages/userTags/Usertags";
const Rotas = () =>{
    
    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/" element={<Home />} />
                <Route exact={true} path="/profile" element={<Profile />} />
                <Route exact={true} path="/login" element={<Login />} />
                <Route exact={true} path="/register" element={<Register />} />
                <Route exact={true} path="/sessions" element={<Session />} />
                <Route exact={true} path="/community" element={<Community />} />
                <Route exact={true} path="/groups" element={<Groups />} />
                <Route exact={true} path="/tags" element={<Usertag />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;