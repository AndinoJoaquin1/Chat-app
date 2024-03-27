import Layout from "./Layout";

export const RegisterForm = () => {
  return (
    <Layout title="Registro">
      <div className="flex flex-col">
        <h2>Nombre</h2>
        <input type="text" />
        <h2>Correo</h2>
        <input type="email" />
        <h2>Contraseña</h2>
        <input type="password" />
        <h2>Contraseña</h2>
        <input type="password" />
      </div>
      <div className="flex p-2 m-2">
        <button className="bg-blue-300 rounded-lg p-2">Siguiente</button>
      </div>
    </Layout>
  );
};

export default RegisterForm;
