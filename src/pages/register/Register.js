import "./register.css"
import {userSchema} from "../../validation/userValidation.js";
import React, {Component} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@material-ui/core";

import firebase from '../../Firebase';

function Register(){
  
    const navigate = useNavigate();
    
    const {register,handleSubmit,formState: { errors }} = useForm({
        resolver: yupResolver(userSchema),
    });



    const submitForm = async (data) => {
        console.log(data);

        // CADASTRAR
        await firebase.auth().createUserWithEmailAndPassword(data.email,data.password)
        .then( async (value) => {
            await firebase.firestore().collection("user").doc(value.user.uid)
            .set({
                name: data.name,
                nick: data.nick,
            });
            console.log("Cadastrou com sucesso!");
            navigate("/tags");
        })
        .catch((error) => {
            if(error.code === 'auth/email-already-in-use'){
                alert("email já está em uso!");
            }else{
                console.log("Deu ruim!");
                console.log("Erro: " + error);
            }
        })

        
        

        // firebase.ref("users").on("value", (snapshot) => {

        //     let usuario=[];

        //     snapshot.forEach(function(item){
        //         var key = item.key;

        //         if(key == data.login){
        //             console.log("usuário já cadastrado!");
        //             return;
        //         }
        //     });
        // });



        // firebase.ref('users').child(data.login).set({name:data.name, email:data.email, password:data.password})
        // .then(() => {
        //     console.log("cadastrado com sucesso");
        // })
        // .catch((erro) =>{
        //     console.log("erro: " + erro);
        // })
    };



    return(
        <div className="register">
            <div className="registerLeft">
                <img src="/assets/logo.png" alt="" className="registerLogo"/>
                <div className="registerSlogan">
                    Sua História Começa Aqui!
                </div>
            </div>
            <div className="registerRight">
                <div className="registerCard">
                    <div className="registerCardTop">

                        <div className ="registerLogin">
                            <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                <button className="loginButton">Login</button>
                            </Link>
                        </div>
                        <div className ="registerSelected">Cadastrar</div>
                         
                    </div>
                    <form onSubmit={handleSubmit(submitForm)}>
                        <div className="registerInputs">
                            
                                <input name="name" placeholder="Nome Completo"  {...register('name')}></input>
                                <span className ="registerMainError">{errors.name && "Todos os campos são obrigatórios!" 
                                    || errors.nick && "Todos os campos são obrigatórios!"
                                    || errors.email && errors.email.type==="required" && "Todos os campos são obrigatórios!"
                                    || errors.password && "Todos os campos são obrigatórios!"
                                    || errors.confirmPassword && errors.confirmPassword.type==="required" && "Todos os campos são obrigatórios!"}
                                </span>
                                <br></br>                               
                                <input name="nick" placeholder="Apelido" {...register('nick')}></input>
                                <br></br>
                                 
                                <input name="email" placeholder="E-mail" {...register('email')}></input>
                                <span className ="registerEmailError">
                                    {errors.email && errors.email.type==="email" && "Insira um e-mail válido"}
                                </span>
                                <br></br>

                                <input name="password" type="password"  placeholder="Senha" {...register('password')}></input>
                                <br></br>
                                
                                <input name="confirmPassword" type="password"  placeholder="Confirmar Senha" {...register('confirmPassword')}></input>

                        </div>
                        <input type="submit" name="submit" className="enterButton" value="Cadastrar"></input>
                        <span className ="registerConfirmPasswordError">
                                    {errors.confirmPassword && errors.confirmPassword.type==="oneOf" && "Senhas não são iguais"}
                        </span>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Register;