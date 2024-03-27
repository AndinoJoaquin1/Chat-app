import { useDispatch } from "react-redux";
import Layout from "./Layout";
import { useState } from "react";
import { login } from "../authSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";

export const LoginForm = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    console.log(email + " " + password);
    try {
      dispatch(login({ email, password }));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Layout title="Login">
      <div className="flex flex-col">
        <h2>Nombre</h2>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <h2>Contraseña</h2>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="flex p-2 m-2">
        <button className="bg-blue-400 rounded-lg p-2" onClick={handleLogin}>
          Siguiente
        </button>
      </div>
    </Layout>
  );
};

export default LoginForm;
