import { useState } from "react";
import Layout from "./Layout";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { register } from "../authSlice";

export const RegisterForm = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    console.log(email + " " + password);
    try {
      dispatch(register({ email, password, nickname }));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Layout title="Registro">
      <div className="flex flex-col">
        <h2>Nombre</h2>
        <input type="text" onChange={(e) => setNickname(e.target.value)} />
        <h2>Correo</h2>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <h2>Contraseña</h2>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <h2>Contraseña</h2>
        <input type="password" />
      </div>
      <div className="flex p-2 m-2">
        <button className="bg-blue-300 rounded-lg p-2" onClick={handleLogin}>
          Siguiente
        </button>
      </div>
    </Layout>
  );
};

export default RegisterForm;
