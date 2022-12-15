import React, { useContext, useRef, useState } from "react";
import "../css/loginform.css";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import AuthContext from "./context/AuthContext";
const LoginForm = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);
  // const [email, setEmail] = useState();
  // const [name, setName] = useState();
  // const [password, setPassword] = useState();
  const email = useRef();
  const name = useRef();
  const password = useRef();

  const authenticate = async () => {
    if (!isLogin && name.current.value < 1) {
      name.current.focus();
      return;
    }
    if (
      email.current.value.trim().length < 1 ||
      !email.current.value.includes("@")
    ) {
      email.current.focus();
      return;
    }
    if (password.current.value.trim().length < 8) {
      password.current.focus();
      return;
    }
    if (isLogin) {
      authCtx.login(email.current.value, password.current.value);
    } else {
    }
  };
  // const emailHandler = (e) => {
  //   setEmail(e.target.value);
  // };
  // const nameHandler = (e) => {
  //   setName(e.target.value);
  // };
  // const passHandler = (e) => {
  //   setPassword(e.target.value);
  // };
  return (
    <div className="form">
      <form className="login-form">
        <div className="form-title">
          <span>{isLogin ? "Login" : "Signup"}</span>
          <span>
            {isLogin ? "Login  into your account" : "Create  new account"}
          </span>
        </div>
        {!isLogin && (
          <Input
            placeholder="Enter your name"
            label="Name"
            type="text"
            ref={name}
          />
        )}
        <Input
          placeholder="Enter your email"
          label="Email"
          type="email"
          ref={email}
        />
        <Input
          ref={password}
          placeholder="Enter your password"
          label="Password"
          type="password"
        />
        <div className="login-btns">
          <div className="form__btn" onClick={authenticate}>
            <span>{isLogin ? "Login" : "Create Account"}</span>
          </div>
          <div
            className="form__btn"
            onClick={() => {
              setIsLogin(!isLogin);
            }}
          >
            {isLogin && (
              <span>
                Don't have an account?{" "}
                <span className="dummy-link">Sing up</span>
              </span>
            )}
            {!isLogin && (
              <span>
                Already have an account?{" "}
                <span className="dummy-link">Log in</span>
              </span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
