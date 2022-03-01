import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import TextField from "../../components/shared/TextField/index";

const Login = () => {
  let navigate = useNavigate();

  return (
    <div className="center">
      <h1>Login</h1>
      <form>
        <TextField label={"User Name"} type={"text"} />
        <TextField label={"Password"} type={"password"} />
        <div className="pass">Forget Password?</div>
        <input
          type={"button"}
          value={"Login"}
          onClick={() => navigate("/dashboad")}
        />
        <div className="signup_link">
          Not a member? <a href="#">Signup</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
