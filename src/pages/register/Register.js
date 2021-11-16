import "./register.css"

function Register(){
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
                            <button className="loginButton">Login</button>
                        </div>
                        <div className ="registerSelected">Cadastrar</div>
                         
                    </div>
                    <div className="registerInputs">

                        <input placeholder="Nome Completo"></input>
                        <br></br>
                        <input placeholder="Login"></input>
                        <br></br>
                        <input placeholder="E-mail"></input>
                        <br></br>
                        <input type="password"  placeholder="Senha"></input>
                        <br></br>
                        <input type="password"  placeholder="Confirmar Senha"></input>

                    </div>
                    <button className="enterButton"> Cadastrar </button>
                    
                </div>
            </div>

        </div>
    )
}

export default Register;