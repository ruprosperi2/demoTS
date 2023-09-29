import React, {FormEvent} from "react";
import {useState} from "react";
import logo from "../assets/logo-svg.svg";
import "./login.scss";
import axios from "axios";

export const Login =()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messageLogin, setMessageLogin] = useState("");

  const handleLogin = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    const {data} = await axios.post(
      "http://localhost:8888/API_Flexio/login_master",
      {email, password});

    const {api_token} = await data.data;
    setMessageLogin(data.message);
    localStorage.setItem("token", api_token);
  };

  const onChangeEmail = ({target}: React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(target.value);
  };
  const onChangePassword = ({target}: React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(target.value);
  };
  return (
    <div className="auth-container">
      <form className="box-login" onSubmit={handleLogin}>
        <div>
          <img src={logo} alt="logo"/>
        </div>
        <div className="form-control">
          <label className="label-input" htmlFor="email">Email</label>
          <input className="text-input" type="text" id="email" name="email" value={email} onChange={onChangeEmail}/>
        </div>
        <div className="form-control">
          <label className="label-input" htmlFor="password">Password</label>
          <input className="text-input" type="password" id="password" name="password" value={password} onChange={onChangePassword}/>
        </div>
        <button className="btn btn-primary block">Submit</button>
        <div>{ messageLogin }</div>
      </form>
    </div>
  );
};