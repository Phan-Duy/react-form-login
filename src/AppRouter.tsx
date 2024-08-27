import { Routes, Route } from "react-router";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
}