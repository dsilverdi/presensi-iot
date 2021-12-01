import React from "react";
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "./Auth.js";
import style from "./Auth.module.css"
// import img from "../../assets/notebook.png"
// import logo from "../../assets/plain-logo.png"

const Login = () => {
  const { login } = useAuth()
  const history = useHistory()

  async function handleLogin(e) {
    e.preventDefault()
    const { email, password } = e.target.elements;
    try {
      // setError("")
      alert("Sukses Login")
      await login(email.value, password.value)
      history.push("/")
    } catch {
      alert("Failed to log in")
    }
  }

  return (
    <div className={style.container}>

        <div className={style.formWrap}>
          <h1>Masuk Akun</h1>
          <p>Catat Presensi Lebih Mudah</p>
          <form onSubmit={handleLogin}>
            <label>Alamat Email</label>
            <input name="email" type="email" placeholder="Email" />
            
            <label>Password</label>
            <input name="password" type="password" placeholder="Password" />
            <br/>
            <button type="submit">MASUK</button>
          </form>
          <p className={style.bottomText}>Belum Punya Akun ? <span><Link to="/signup">Daftar</Link></span></p>
        </div>   

    </div>
  );
};

export default Login;
