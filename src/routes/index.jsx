import { Routes, Route, Navigate } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import "./styles";
import { Main } from "./styles";
import ProtectedRoutes from "../ProtectedRoutes";

function RoutesMain() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard/" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Navigate to="/register" />} />
      </Routes>
    </Main>
  );
}

export default RoutesMain;
