import React, { Fragment } from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <Fragment>
      <Header isItem={true} />
      <LoginForm />
    </Fragment>
  );
};

export default Login;
