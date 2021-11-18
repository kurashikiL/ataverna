import "./login.css"
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import {loginSchema} from "../../validation/loginValidation";
import firebase from '../../Firebase.js';



function Login(){

    const navigate = useNavigate();

    const {register,handleSubmit,formState: { errors }} = useForm({
        resolver: yupResolver(loginSchema),
    });

    const submitForm = data => {
        console.log(data);

        /// ACESSA O BANCO E CONFERE SE TEM LOGIN E SENHA IGUAIS
        firebase.ref("users").on("value", (snapshot) => {

            let usuario=[];
            const { user, rememberMe } = this.state;
            snapshot.forEach(function(item){
                var key = item.key;
                var valor=item.val();

                console.log(key);
                console.log(valor);
                if(key == data.login && valor.password == data.password){
                    navigate("/");
                }
            });
            
        });

        console.log("Usuario não encontrado!");
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
                            <input placeholder="Login" {...register('login')}></input>
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