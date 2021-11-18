import "./usertags.css"
import {userSchema} from "../../validation/userValidation.js";
import React, {Component} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@material-ui/core";
import { Person } from "@material-ui/icons";
import firebase from '../../Firebase';

function Usertag(){
    
    const {register,handleSubmit,formState: { errors }} = useForm({
        resolver: yupResolver(userSchema),
    });

    const submitForm = async (data) => {
        console.log(data);
    }

    return(
        <div className="cardScreen">
            <div className="cardTags">
                <div className="cardTagsItem">
                    <h1>Informações de Perfil</h1>
                    <form onSubmit={handleSubmit(submitForm)}>
                        <div>
                            <Person font-size="32px"/>
                            <input id="upPic" type="file" placeholder="FotoPerfil"></input>
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