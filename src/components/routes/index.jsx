import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../Dashboard/index";
import Login from "../Login/index";
import FormRegister from "../FormRegister";
import "./styles";
import { Main } from "./styles";
import ProtectedRoutes from "../../ProtectedRoutes";

function RoutesMain() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<FormRegister />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard/" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Navigate to="/register" />} />
      </Routes>
    </Main>
  );
}

export default RoutesMain;
