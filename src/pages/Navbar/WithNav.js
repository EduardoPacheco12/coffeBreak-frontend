import React from "react";
import { Outlet } from "react-router";
import NavBar from "../../components/Navbar/NavBar";

export default () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
