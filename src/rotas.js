import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

const Rotas = () =>{

    return (
        <BrowserRouter>
            <Routes>
                <Route exact={true} path="/" element={<Home />} />
                <Route exact={true} path="/profile" element={<Profile />} />
                <Route exact={true} path="/login" element={<Login />} />
                <Route exact={true} path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;