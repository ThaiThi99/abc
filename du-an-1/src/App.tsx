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
import ChinhSuaTT from "./hopdonguyquyen/chinhsuatt";
import ThemHDUyQuyen from "./hopdonguyquyen/themHopDongUQ";
import TacPhamUQ from "./hopdonguyquyen/tacphamUQ";
import HDUyQuyen from "./hopdonguyquyen/hduyquyen";
import ThemTTBanGhi from "./hopdonguyquyen/themTTBanGhi";
import DSHDKhaiThac from "./hopdongkhaithac/dshopdongkhaithac";
import BansaoHDKhaiThac from "./hopdongkhaithac/bansaohdkhaithac";
import ThemHDKT from "./hopdongkhaithac/themhdkhaithac";
import HopDongKT from "./hopdongkhaithac/hopdongkhaithac";
import DSLichPhat from "./laplichphat/dslichphat";
import ThemLichPhat from "./laplichphat/themlichphat";
import ChonThietBi from "./laplichphat/chonthietbi";
import DSDonViSD from "./donvisudung/dsdonvisudung";
import DonViSuDung from "./donvisudung/donvisudung";
import ThemNguoiDung from "./donvisudung/themnguoidung";
import ThongTinNguoiDung from "./donvisudung/thongtinND";
import ChinhSuaTTND from "./donvisudung/chinhsuatt";
import DSDoiTacUyQuyen from "./doitacuyquyen/dsdoitacuyquyen";
import CapNhatThongTin from "./doitacuyquyen/capnhatthongtin";
import DSThietBI from "./danhsachthietbi/dsthietbi";
import ThemThietBiMoi from "./danhsachthietbi/themthietbi";
import ThongTinThietBi from "./danhsachthietbi/thongtinthietbi";
import QLPhanPhoiDoanhThu from "./qlphanphoidoanhthu/QlPhanPhoiDoanhThu";
import PhanPhoiDoanhThu from "./qlphanphoidoanhthu/phanphoidoanhthu";
import LichSuDoiSoat from "./lichsudousoat/lichsudoisoat";
import DoanhThuTheoHD from "./lichsudousoat/doanhthutheohopdong";
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
            {/* Quản lý thông tin */}
            <Routes>
              <Route path="/trang1" element={<Trang1 />} />
              <Route path="/suatt" element={<SuaThongTin />} />
            </Routes>
            {/* quản lý hợp đồng */}
            <Routes>
              <Route path="/dshopdong" element={<DSHopDong />} />
              <Route path="/cthopdong" element={<ChiTietHopDong />} />
              <Route path="/chinhsuatt" element={<ChinhSuaTT />} />
              <Route path="/themhduyquyen" element={<ThemHDUyQuyen />} />
              <Route path="/tacphamUQ" element={<TacPhamUQ />} />
              <Route path="/hduyquyen" element={<HDUyQuyen />} />
              <Route path="/themttbg" element={<ThemTTBanGhi />} />
            </Routes>
            {/* Hợp đồng khai thác */}
            <Routes>
              <Route path="/dshopdongkt" element={<DSHDKhaiThac />} />
              <Route path="/bansaoHDKT" element={<BansaoHDKhaiThac />} />
              <Route path="/themhdkt" element={<ThemHDKT />} />
              <Route path="/hopdongkt" element={<HopDongKT />} />
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
            {/* lập lịch Phát */}
            <Routes>
              <Route path="/dslichphat" element={<DSLichPhat />} />
              <Route path="/themlichphat" element={<ThemLichPhat />} />
              <Route path="/chonthietbi" element={<ChonThietBi />} />
            </Routes>
            {/* Đơn vị sử dụng */}
            <Routes>
              <Route path="/dsdonvisd" element={<DSDonViSD />} />
              <Route path="/donvisudung" element={<DonViSuDung />} />
              <Route path="/themnguoidung" element={<ThemNguoiDung />} />
              <Route path="/thongtinnd" element={<ThongTinNguoiDung />} />
              <Route path="/chinhsuattnd" element={<ChinhSuaTTND />} />
            </Routes>
            {/* Đối tác ủy quyền */}
            <Routes>
              <Route path="/dsdoitacuq" element={<DSDoiTacUyQuyen />} />
              <Route path="/capnhathongtin" element={<CapNhatThongTin />} />
            </Routes>
            {/* Danh sách thiết bị */}
            <Routes>
              <Route path="/dsthietbi" element={<DSThietBI />} />
              <Route path="/themthietbimoi" element={<ThemThietBiMoi />} />
              <Route path="/thongtinthietbi" element={<ThongTinThietBi />} />
            </Routes>
            {/* quản lý phân phối doanh thu */}
            <Routes>
              <Route
                path="/qlphanphoidoanhthu"
                element={<QLPhanPhoiDoanhThu />}
              />
              <Route path="/phanphoidoanhthu" element={<PhanPhoiDoanhThu />} />
            </Routes>
            {/* lịch sử đối soát */}
            <Routes>
              <Route path="/lichsudoisoat" element={<LichSuDoiSoat />} />
              <Route path="/doanhthutheohd" element={<DoanhThuTheoHD />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
