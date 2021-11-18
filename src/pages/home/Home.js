import "./home.css";
import React, {Component, useLayoutEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import firebase from '../../Firebase';


function Home(){

    const navigate = useNavigate();

    let uid="";

    useLayoutEffect(() => {
        firebase.auth().onAuthStateChanged((user) =>{
            if(user){
                console.log("usuário logado");
                uid = user.uid;
            }else{
                console.log("nenhum usuário logado, redirecionando...")
                navigate("/login");
            }
        });
    },[]);


    return(
        <>
            <Topbar/>
            <div className="homeContainer">
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </div>
        </>
    );
}

export default Home;