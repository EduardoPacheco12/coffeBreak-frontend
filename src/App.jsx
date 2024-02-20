import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import "./assets/styles/reset.css";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
