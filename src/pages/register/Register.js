import "./register.css"
import {userSchema} from "../../validation/userValidation.js";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@material-ui/core";

function Register(){
  

    const {register,handleSubmit,formState: { errors }} = useForm({
        resolver: yupResolver(userSchema),
    });

    const submitForm = data => console.log(data);

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
                            
                                <input name="name" placeholder="Nome ou apelido"  {...register('name')}></input>
                                {errors.name && "Todos os campos são obrigatórios!" 
                                || errors.login && "Todos os campos são obrigatórios!"
                                || errors.email && "Todos os campos são obrigatórios!"
                                || errors.password && "Todos os campos são obrigatórios!"
                                || errors.confirmPassword && errors.confirmPassword.type==="required" && "Todos os campos são obrigatórios!"}
                                <br></br>                               
                                <input name="login" placeholder="Login" {...register('login')}></input>
                                {errors.login && "Esse campo é obrigatório"}
                                <br></br>
                                <input name="email" placeholder="E-mail" {...register('email')}></input>
                                {errors.email && "Insira um e-mail válido"}
                                <br></br>
                                <input name="password" type="password"  placeholder="Senha" {...register('password')}></input>
                                {errors.password && "Esse campo é obrigatório"}
                                <br></br>
                                <input name="confirmPassword" type="password"  placeholder="Confirmar Senha" {...register('confirmPassword')}></input>
                                {errors.confirmPassword && "Senhas não são iguais"}

                        </div>
                        <input type="submit" name="submit" className="enterButton" value="Cadastrar"></input>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Register;