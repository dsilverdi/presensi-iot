import React from "react";
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "./Auth";
import style from "./Auth.module.css"

const SignUp = () => {
  const { signup } = useAuth()
  const history = useHistory()

  const handleSignUp = async e => {
    e.preventDefault()
    const { firstname, lastname, email, password, password2 } = e.target.elements;
    if (password2.value !== password.value) {
      alert("Passwords do not match")
    }

    try {
      // setError("")
      alert("Sign Up Success Redirect to Dashboard")
      await signup(email.value, password.value, firstname.value+" "+lastname.value)
      history.push("/")
    } catch {
      alert("Failed to create an account")
    }

    // setLoading(false)

  };

  return (
    <div className={style.container}> 
        <div className={style.formWrap} style={{marginTop:'100px'}}>
          <h1>Daftarkan Akun</h1>
          <form onSubmit={handleSignUp}>
            <label>Nama Depan</label>
            <input name="firstname" type="firstname" placeholder="Nama Depan" />

            <label>Nama Belakang</label>
            <input name="lastname" type="lastname" placeholder="Nama Belakang" />

            <label>Email</label>
            <input name="email" type="email" placeholder="Email" />
            
            <label>Password</label>
            <input name="password" type="password" placeholder="Password" />

            <label>Konfirmasi Password</label>
            <input name="password2" type="password" placeholder="Konfirmasi Password" />

            <button type="submit">Daftar</button>
          </form>
          <p className={style.bottomText}>Sudah Punya Akun ? <span><Link to="/login">Masuk</Link></span></p>
        </div> 
    </div>
  );
};

export default SignUp;
