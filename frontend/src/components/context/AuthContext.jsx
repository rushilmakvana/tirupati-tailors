import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext({
  login: (email, password) => {},
  logout: () => {},
  isLoggedin: false,
  signUp: (name, email, password) => {},
  user: { name: "", email: "" },
});

const AuthContextProvider = ({ children }) => {
  const [username, setUsername] = useState();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = async (email, password) => {
    console.log("auth ctx login called");
    await fetch("https://tirupati-tailors.rushilmakvana.repl.co/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          localStorage.setItem("auth-token", data.token);
          setUsername({
            name: data.data.name,
            email: data.data.email,
          });
          navigate("/");
        }
        console.log("res = ", data);
      });
  };
  const signUp = async (name, email, password) => {
    console.log("called signup");
    await fetch("https://tirupati-tailors.rushilmakvana.repl.co/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        name: name,
        password: password,
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          localStorage.setItem("auth-token", data.token);
          setUsername({
            name: name,
            email: email,
          });
          // localStorage.setItem("name", data.name);
          navigate("/");
        }
        console.log("res = ", data);
      });
  };
  const logout = () => {
    setUsername(null);
    localStorage.removeItem("auth-token");
  };
  const verify_token = async () => {
    // console.log("called verify token");
    const token = localStorage.getItem("auth-token");
    if (token) {
      const res = await fetch(
        "https://tirupati-tailors.rushilmakvana.repl.co/verify-token",
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        }
      );
      const data = await res.json();
      // console.log("data = ", data);
      if (data) {
        setUsername({ name: data.data.name, email: data.data.email });
      }
    }
  };
  useEffect(() => {
    verify_token();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login: login,
        signUp: signUp,
        logout: logout,
        isLoggedin: isLoggedIn,
        username: username,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
export { AuthContextProvider };
