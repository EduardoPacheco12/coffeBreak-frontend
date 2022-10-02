import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import WithoutNav from "./components/Navbar/WithoutNav";
import WithNav from "./components/Navbar/WithNav";
import "./assets/reset.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route path="/" element={<Navigate replace to="/sign-in" />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path="/home" element={<HomeScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
