import "./usertags.css"
import {userSchema} from "../../validation/userValidation.js";
import React, {Component, useLayoutEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import firebase from '../../Firebase';

function Usertag(){

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

    async function setProfilePic(e){

        let file = e.target.files[0];

        await firebase.auth().onAuthStateChanged((user) =>{
            if(user){

                firebase.storage().ref("ProfilePic").child(uid).put(file)
                .then((e) => {
                    console.log("Upload feito!");
                    navigate("/");
                });
                

            }else{
                navigate("/login");
            }

        });



    };

    return(
        <div className="cardScreen">
            <div className="cardTags">
                <div className="cardTagsItem">
                    <h1>Informações de Perfil</h1>
                    <form /*onSubmit={handleSubmit(submitForm)}*/>
                        <div>
                            <input id="upPic" type="file" onChange={(e) => {setProfilePic(e)}}></input>
                            <br></br>                               
                            <input name="desc" placeholder="Descrição"></input>
                            <br></br>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Usertag;