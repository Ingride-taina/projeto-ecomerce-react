import "../components/login.css";

function Login() {
  return (
        
    <div className="container">
      <div className="login-box">
        <h1 className="title">Login</h1>

        <div className="form">
          
          <div className="email">oioioi</div>
          <input placeholder="E-mail" />

          <input placeholder="Senha" type="password" />
          <p className="forgot">Esqueceu a senha?</p>
        </div>

        <button className="button">Entrar</button>
      </div>
    </div>

  )
}

export default Login