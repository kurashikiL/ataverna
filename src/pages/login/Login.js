import "./login.css"

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
                            <button className="registerButton">Registrar</button>
                            
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