import { AuthState, RegisterForm } from "../features/auth";
import LoginForm from "../features/auth/components/LoginForm";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

interface RootState{
    auth: AuthState
}

export const AppRouter = () => {
  const { status } = useSelector((state: RootState) => state.auth);
  return (
    <Routes>
      {status === "loading" ? (
        <>
          <Route path="/auth/*" element={<LoginForm />} />
          <Route path="/auth/register" element={<RegisterForm />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <Navigate to="" />
      )}
    </Routes>
  );
};
