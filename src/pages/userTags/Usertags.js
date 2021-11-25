import "./usertags.css"
import {userSchema} from "../../validation/userValidation.js";
import React, {Component, useLayoutEffect, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import firebase from '../../Firebase';

function Usertag(){

    const navigate = useNavigate();

    let uid="";

    // const {register,handleSubmit,formState: { errors }} = useForm();
    const [selectedFile, setSelectedFile] = useState();

    const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
        console.log("atualizei imagem");
	};


    async function setProfilePic(){

        let file = selectedFile;
        console.log(selectedFile);
        console.log("veio até aqui!");
        // console.log(uid);
        // await firebase.storage().ref("ProfilePic").child(uid).put(file)
        //         .then(() => {
        //             console.log("Upload feito!");
        //             navigate("/");
        //         });

        await firebase.auth().onAuthStateChanged((user) =>{
            if(user){
                console.log(user.uid);
                console.log("veio até aqui (2)");
                firebase.storage().ref("ProfilePic").child(user.uid).put(file)
                .then(() => {
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
                    {/* <form onSubmit={setProfilePic}> */}
                        <div>
                            <input id="upPic" type="file" onChange={changeHandler} /*{...register('pic')}*/></input>
                            <br></br>                               
                            <input name="desc" placeholder="Descrição" /*{...register('desc')}*/></input>
                            <br></br>

                            <input type="submit" onClick={setProfilePic}></input>
                        </div>
                    {/* </form> */}
                </div>
            </div>
        </div>
    )
}

export default Usertag;