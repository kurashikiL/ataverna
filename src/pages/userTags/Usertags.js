import "./usertags.css"
import {userSchema} from "../../validation/userValidation.js";
import React, {Component, useLayoutEffect, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, makeStyles } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import firebase from '../../Firebase';
import StarRating from "../../components/starrating/Star";
import { RadioGroup, Radio, FormControlLabel, FormControl, FormLabel } from "@material-ui/core";


function Usertag(){

    const navigate = useNavigate();

    let uid="";

    // const {register,handleSubmit,formState: { errors }} = useForm();
    const [description, setDescription] = useState();
    const [profilePic, setProfilePic] = useState();
    const [backgroundPic, setBackgroundPic] = useState();
    const [otimin, setOtimin] = useState('1');
    const [roleplay, setRoleplay] = useState('1');
    const [homebrew, setHomebrew] = useState('0');

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
        let otm = otimin;
        let rp = roleplay;
        let hb = homebrew;
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
                        otimin: otm,
                        roleplay: rp,
                        homebrew: hb
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
                            <label>O quanto você gosta de Role Play?</label>
                            <RadioGroup value = {roleplay} className = "radioGroup" onChange={(e) => setRoleplay(e.target.value)} row>
                                <FormControlLabel value="1" labelPlacement="bottom" control={<Radio />} label="1" />
                                <FormControlLabel value="2" labelPlacement="bottom" control={<Radio />} label="2" />
                                <FormControlLabel value="3" labelPlacement="bottom" control={<Radio />} label="3" />
                                <FormControlLabel value="4" labelPlacement="bottom" control={<Radio />} label="4" />
                                <FormControlLabel value="5" labelPlacement="bottom" control={<Radio />} label="5" />
                            </RadioGroup>
                            <br></br>
                            <label>O quanto você gosta de Otimização de Personagem?</label>
                            <RadioGroup value = {otimin} className = "radioGroup" onChange={(e) => setOtimin(e.target.value)} row>
                                <FormControlLabel value="1" labelPlacement="bottom" control={<Radio />} label="1" />
                                <FormControlLabel value="2" labelPlacement="bottom" control={<Radio />} label="2" />
                                <FormControlLabel value="3" labelPlacement="bottom" control={<Radio />} label="3" />
                                <FormControlLabel value="4" labelPlacement="bottom" control={<Radio />} label="4" />
                                <FormControlLabel value="5" labelPlacement="bottom" control={<Radio />} label="5" />
                            </RadioGroup>
                            <br></br>
                            <label>Aceita Regras da casa?</label>
                            <RadioGroup value = {homebrew} className = "radioGroup" onChange={(e) => setHomebrew(e.target.value)}>
                                <FormControlLabel value="1" control={<Radio />} label="Sim" />
                                <FormControlLabel value="0" control={<Radio />} label="Não" />
                            </RadioGroup>
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