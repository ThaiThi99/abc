import React from "react";
import "./App.css";
import LoginForm from "./Login/login1";
// import { Routes, Route } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuenMatKhau from "./Login/quenmatkhau";
import QuenMatKhau2 from "./Login/quenmatkhau2";
import LinkLoi from "./Login/linkloi";
import DatlaiMK from "./Login/datlaimk";
import Trang1 from "./QuanLyTT/trang1";
import SuaThongTin from "./QuanLyTT/suaTT";

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
              <Route path="/quenMK2" element={<QuenMatKhau2 />} />
              <Route path="/linkloi" element={<LinkLoi />} />
              <Route path="/datlaimk" element={<DatlaiMK />} />
            </Routes>
            <Routes>
              <Route path="/trang1" element={<Trang1 />} />
              <Route path="/suatt" element={<SuaThongTin />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
