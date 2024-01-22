import React from "react";
import "./App.css";
import LoginForm from "./Login/login1";
// import { Routes, Route } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuenMatKhau from "./Login/quenmatkhau";

function App() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      >
        <div
          style={{
            background: "#1E1E2E",
            width: "100%",
            height: "100%",
            overflowY: "auto",
            position: "relative",
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/quenMK" element={<QuenMatKhau />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
