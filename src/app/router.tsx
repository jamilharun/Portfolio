import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Intro from "./Intro";
import Home from "./home/Home";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default AppRouter;
