import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useContext } from "react";
import { ProductContext } from "../../../context";
import { useHistory } from "react-router-dom";
import ErrorMsg from "../../components/ErrorMsg/ErrorMsg";

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [name, setName] = useState();
  const [err, setErr] = useState();

  const { setUserData } = useContext(ProductContext);
  const history = useHistory();
  const handleSumit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { email, password, passwordCheck, name };
      await Axios.post("http://localhost:4000/auth/register", newUser);
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
      <h2>Register</h2>
      <form onSubmit={handleSumit} className="form-contain">
        {err ? <ErrorMsg msg={err} clearMsg={() => setErr(null)} /> : null}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          id="passwordCheck"
          placeholder="Verify password"
          onChange={(e) => setPasswordCheck(e.target.value)}
        />
        <input type="submit" value="Register" id="btn" />
      </form>
    </div>
  );
}
