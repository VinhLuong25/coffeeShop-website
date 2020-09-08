import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useContext } from "react";
import { ProductContext } from "../../../context";
import { useHistory } from "react-router-dom";
import ErrorMsg from "../../components/ErrorMsg/ErrorMsg";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [err, setErr] = useState();
  const { setUserData } = useContext(ProductContext);
  const history = useHistory();

  const handleSumit = async (e) => {
    e.preventDefault();
    try {
      const loginRes = await Axios.post("http://localhost:4000/auth/login", {
        email,
        password,
      });
      setUserData({ token: loginRes.data.token, user: loginRes.data.user });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/");
    } catch (error) {
      error.response.data.msg && setErr(error.response.data.msg);
    }
  };

  return (
    <div className="register-container">
      <h2>Login</h2>
      <form onSubmit={handleSumit} className="form-contain">
        {err ? <ErrorMsg msg={err} clearMsg={() => setErr(null)} /> : null}
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" id="btn" />
      </form>
    </div>
  );
}
