import React, { useState } from "react";
import "./Login.css";
import backgraund from "../../Assets/Images/loginPageBg.svg";
import viewPas from "../../Assets/Images/eye-Light.svg";
import viewNotPas from "../../Assets/Images/eye-slash.svg";

export function Login() {
  const [viewPassword, setViewPassword] = useState(false);
  const [data, setData] = useState({});

  console.log(data);

  return (
    <section id="loginPage">
      <form className="loginForm">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Login"
          onChange={(e) => setData({...data, login: e.target.value })}
        />
        <label>
          <input
            onChange={(e) => setData({...data, parol: e.target.value })}
            type={viewPassword ? "password" : "text"}
            placeholder="Password"
          />
          <img
            onClick={() => setViewPassword(!viewPassword)}
            src={viewPassword ? viewPas : viewNotPas}
            alt=""
          />
        </label>
        <div>
          <label className="forgot">
            <input type="checkbox" />
            Remember me
          </label>
          <button>Forgot password?</button>
        </div>
        <input type="submit" value="login" />
      </form>
      <img src={backgraund} alt="" />
    </section>
  );
}
