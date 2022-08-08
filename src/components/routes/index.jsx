import { Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard/dash";
import Login from "../Login/login";
import FormRegister from "../FormRegister";
import "./styles";
import { Main } from "./styles";

function RoutesMain() {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<FormRegister />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
      </Routes>
    </Main>
  );
}

export default RoutesMain;
