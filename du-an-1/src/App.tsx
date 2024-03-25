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
import KhoBanGhi from "./QLKhoBanGhi/khobanghi";
import DSHopDong from "./hopdonguyquyen/DSHopDong";
import KhoBanGhi1 from "./QLKhoBanGhi/khobanghi1";
import PheDuyetBG from "./QLKhoBanGhi/pheduyetBG";
import PheDuyetBG1 from "./QLKhoBanGhi/pheduyetBG1";
import ChiTietHopDong from "./hopdonguyquyen/ChiTietHopDong";
import CTBanGhi from "./QLKhoBanGhi/ctbanghi";
import DSPlayList from "./QLplaylist/Dsplaylist";
import DSPlayList1 from "./QLplaylist/Dsplaylist1";
import PlayListTop from "./QLplaylist/playlistTop";
import SuaPlayList from "./QLplaylist/suaPlaylist";
import ThemPlayList from "./QLplaylist/themPlaylist";

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
            {/* login */}
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/quenMK" element={<QuenMatKhau />} />
              <Route path="/quenMK2" element={<QuenMatKhau2 />} />
              <Route path="/linkloi" element={<LinkLoi />} />
              <Route path="/datlaimk" element={<DatlaiMK />} />
            </Routes>
            {/* qltt */}
            <Routes>
              <Route path="/trang1" element={<Trang1 />} />
              <Route path="/suatt" element={<SuaThongTin />} />
            </Routes>
            {/* quản lý hợp đồng */}
            <Routes>
              <Route path="/dshopdong" element={<DSHopDong />} />
              <Route path="/cthopdong" element={<ChiTietHopDong />} />
            </Routes>
            {/* quản lý kho bản ghi */}
            <Routes>
              <Route path="/khobanghi" element={<KhoBanGhi />} />
              <Route path="/khobanghi1" element={<KhoBanGhi1 />} />
              <Route path="/pheduyetbg" element={<PheDuyetBG />} />
              <Route path="/pheduyetbg1" element={<PheDuyetBG1 />} />
              <Route path="/ctbanghi" element={<CTBanGhi />} />
            </Routes>
            {/* quản lý play list */}
            <Routes>
              <Route path="/dsplaylist" element={<DSPlayList />} />
              <Route path="/dsplaylist1" element={<DSPlayList1 />} />
              <Route path="/playlisttop" element={<PlayListTop />} />
              <Route path="/suaplaylist" element={<SuaPlayList />} />
              <Route path="/themplaylist" element={<ThemPlayList />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
