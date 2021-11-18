import "./login.css"
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import {loginSchema} from "../../validation/loginValidation";
import firebase from '../../Firebase.js';
import 'firebase/auth';


function Login(){

    const navigate = useNavigate();

    const {register,handleSubmit,formState: { errors }} = useForm({
        resolver: yupResolver(loginSchema),
    });

    const submitForm = async (data) => {
        console.log(data);

        await firebase.auth().signInWithEmailAndPassword(data.email,data.password)
        .then( async (value) =>{
            await firebase.firestore().collection("user").doc(value.user.uid)
            .get()
            .then((snapshot)=>{

                var nome = snapshot.data().name;
                alert("bem vindo " + nome);
                navigate("/");
            })
            
        })
        

        // console.log("Usuario não encontrado!");

        
        /// ACESSA O BANCO E CONFERE SE TEM LOGIN E SENHA IGUAIS
        // firebase.ref("users").on("value", (snapshot) => {

        //     let usuario=[];

        //     snapshot.forEach(function(item){
        //         var key = item.key;
        //         var valor=item.val();

        //         console.log(key);
        //         console.log(valor);
        //         if(key == data.login && valor.password == data.password){
        //             navigate("/");
        //         }
        //     });
            
        // });

    };


    return(
        <div className="login">
            <div className="loginLeft">
                <img src="/assets/logo.png" alt="" className="loginLogo"/>
                <div className="loginSlogan">
                    Sua História Começa Aqui!
                </div>
            </div>
            <div className="loginRight">
                <div className="loginCard">
                    <div className="loginCardTop">
                        <div className ="loginSelected">Login</div>
                        <div className ="loginRegister">
                            <Link to="/register" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                <button className="registerButton">Cadastrar</button>
                            </Link>
                        </div>
                         
                    </div>
                    <form onSubmit={handleSubmit(submitForm)}>
                        <div className="loginInputs">
                            <input placeholder="Login" {...register('email')}></input>
                            <span className ="loginMainError">{
                                        errors.login && "Todos os campos são obrigatórios!"
                                    || errors.password && "Todos os campos são obrigatórios!"}
                            </span>
                            <br></br>
                            <input type="password"  placeholder="Senha" {...register('password')}></input>

                        </div>
                        <button className ="loginRetrival"> Esqueci minha senha</button>
                        <input type="submit" name="submit" className="enterButton" value="Entrar"></input>
                        
                        <div className="otherOptions">
                            Ou entre com:
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login;