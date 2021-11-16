import "./login.css"
import { Link } from "react-router-dom";


function Login(){
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
                    <div className="loginInputs">
                        <input placeholder="Login"></input>
                        <br></br>
                        <input type="password"  placeholder="Senha"></input>

                    </div>
                    <button className ="loginRetrival"> Esqueci minha senha</button>
                    <button className="enterButton"> Entrar </button>
                    
                    <div className="otherOptions">
                        Ou entre com:
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;