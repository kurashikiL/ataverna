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
    const [description, setDescription] = useState();
    const [profilePic, setProfilePic] = useState();
    const [backgroundPic, setBackgroundPic] = useState();

    const changeDescription = (event) =>{
        setDescription(event.target.value);
        console.log(event.target.value);
    };

    const changeProfilePic = (event) => {
		setProfilePic(event.target.files[0]);
        console.log("atualizei imagem perfil");
	};

    const changeBackgrounPic = (event) =>{
        setBackgroundPic(event.target.files[0]);
        console.log("atualizei imagem background");
    };


    async function setRegister(){

        let file1 = profilePic;
        let file2 = backgroundPic;
        console.log(profilePic);
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
                firebase.storage().ref("Users").child(user.uid).child("ProfilePic").put(file1)
                .then( async () => {
                    await firebase.firestore().collection("user").doc(user.uid)
                    .update({
                        description: description,
                    });
                    await firebase.storage().ref("Users").child(user.uid).child("BackgroundPic").put(file2)
                    .then(()=>{
                        console.log("Upload feito!");
                        navigate("/");
                    });
                    
                });
                
                // .then(() => {
                //     console.log("Upload feito!");
                //     navigate("/");
                // });
                

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
                            <input id="upPic" type="file" placeholder ="foto perfil" onChange={changeProfilePic} /*{...register('pic')}*/></input>
                            <br></br>
                            <input id="upPic" type="file" onChange={changeBackgrounPic} /*{...register('pic')}*/></input>
                            <br></br>                               
                            <input name="desc" placeholder="Descrição" onChange={changeDescription} /*{...register('desc')}*/></input>
                            <br></br>

                            <input type="submit" onClick={setRegister}></input>
                        </div>
                    {/* </form> */}
                </div>
            </div>
        </div>
    )
}

export default Usertag;