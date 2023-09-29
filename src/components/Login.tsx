import React, {useState} from "react";
import logo from "./../assets/logo-svg.svg";
import "./login.scss";

interface Auth {
    email: string,
    password: string
}

export const Login = () => {

  const [detail, setDetail] = useState<Auth>({
    email: "",
    password: ""
  });

  const handleInpuChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDetail({
      ...detail,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="auth-container">
      <form className="box-login">
        <div>
          <img src={logo} alt="logo"/>
        </div>
        <div className="form-control">
          <label className="label-input" htmlFor="email">Email</label>
          <input className="text-input" type="text" id="email" name="email" onChange={handleInpuChange}/>
        </div>
        <div className="form-control">
          <label className="label-input" htmlFor="password">Password</label>
          <input className="text-input" type="password" id="password" name="password"
            onChange={handleInpuChange}/>
        </div>
        <button className="btn btn-primary block">Submit</button>
      </form>
    </div>
  );
};

