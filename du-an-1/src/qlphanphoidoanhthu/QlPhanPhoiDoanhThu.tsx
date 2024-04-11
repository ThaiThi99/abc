import { useNavigate } from "react-router-dom";
import Navbar from "../BackGround/navbar";
import React, { useState } from "react";

import "../cssne/khobangi.css";
import "../cssne/playlist.css";

interface DSNhac {
  id: number;
  ngaychot: string;
}

const QLPhanPhoiDoanhThu = () => {
  const [danhsachs, setdanhsachs] = useState<DSNhac[]>([
    { id: 1, ngaychot: "21/07/2021" },
    { id: 2, ngaychot: "-" },
    { id: 3, ngaychot: "21/07/2021" },
    { id: 4, ngaychot: "21/07/2021" },
    { id: 5, ngaychot: "21/07/2021" },
    { id: 6, ngaychot: "21/07/2021" },
    { id: 7, ngaychot: "21/07/2021" },
    { id: 8, ngaychot: "21/07/2021" },
    { id: 9, ngaychot: "-" },
    { id: 10, ngaychot: "-" },
    { id: 11, ngaychot: "-" },
    { id: 12, ngaychot: "-" },
    { id: 13, ngaychot: "-" },
  ]);
  return (
    <>
      <div style={{ width: "100%", display: "flex" }}>
        <Navbar />

        <div>
          <div
            style={{
              top: 86,
              marginTop: "10px",
              left: 229,
              position: "absolute",
            }}
          >
            <a
              className="parent-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Doanh thu
            </a>
            <span style={{ color: "#F5F5FF" }} className="separator">
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Phân phối doanh thu
            </a>
          </div>

          <div
            style={{
              width: 489,
              height: 48,
              top: 114,
              left: 229,
              position: "absolute",
              color: "#FFFFFF",
            }}
          >
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: 36,
                fontWeight: 700,
                letterSpacing: "-0.002em",
                textAlign: "left",
              }}
            >
              Quản lý phân phối doanh thu
            </p>
          </div>

          <div className="khungt">
            <div className="khugne">
              <a href="/phanphoidoanhthu" style={{ textDecoration: "none" }}>
                <img src="images/dangxuat.png" alt="sua" className="icon1" />
                <div className="texttt">
                  Xuât <br /> dữ liệu
                </div>
              </a>
            </div>
          </div>
          <div
            style={{
              width: "372px",
              height: "48px",
              top: "186px",
              left: "230px",
              color: "white",
              position: "absolute",
            }}
          >
            Theo tháng:
            <input
              type="date"
              defaultValue={"Tháng 3/2021"}
              style={{
                color: "white",
                width: "264px",
                height: "48px",
                top: "186px",
                left: "338px",
                padding: "12px 12px 12px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                justifyContent: "space-between",
                background: "#1E1E2E",
              }}
            />
          </div>

          <div
            style={{
              width: "665px",
              height: "48px",
              position: "absolute",
              top: "186px",
              left: "1121px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#2B2B3F",
            }}
          >
            <input
              type="text"
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
                border: "none",
                color: "#FFFFFF",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: "600",
                letterSpacing: "-0.002em",
                outline: "none",
                paddingLeft: 24,
                paddingRight: 67,
              }}
              placeholder="Nhập tên bài hát"
            />
            <div
              style={{
                marginLeft: "12px",
                width: "24px",
                height: "24px",
                marginTop: 11,
                marginRight: 10,
              }}
            >
              <a href="/anhson">
                <i
                  style={{ color: "white" }}
                  className="fa-solid fa-magnifying-glass"
                ></i>
              </a>
            </div>
          </div>

          <div
            style={{
              width: "384px",
              height: "24px",
              top: "258px",
              left: "229px",
              fontFamily: "Montserrat",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#E5E5E5",
              position: "absolute",
            }}
          >
            Danh sách hợp đồng ủy quyền
          </div>

          {/* bảng */}
          <div
            style={{
              width: 1541,
              height: "fit-content",
              position: "absolute",
              top: 306,
              left: 229,
              padding: "16px 24px",
              borderRadius: 16,
              gap: 56,
              backgroundColor: "#2F2F41B2",
            }}
          >
            <table
              style={{
                width: "1492px",
                // height: "604px",
                height: "fit-content",
              }}
            >
              <thead>
                <tr
                  style={{
                    textAlign: "left",
                    height: 48,
                    color: "#FFAC69",
                    width: "100%",
                    fontSize: 14,
                  }}
                >
                  <th style={{ width: "75px" }}>STT</th>
                  <th style={{ width: "199px" }}>Hợp đồng ủy quyền</th>
                  <th style={{ width: "190px" }}>Người ủy quyền</th>
                  <th style={{ width: "178px" }}>Số bài hát ủy quyền</th>
                  <th style={{ width: "176px" }}>Doanh thu (VNĐ)</th>
                  <th style={{ width: "187px" }}>Hành chính phí (VNĐ)</th>
                  <th style={{ width: "194px" }}>Mức nhuận bút (VNĐ)</th>
                  <th style={{ width: "146px" }}>Ngày chốt đối soát</th>
                  <th style={{ width: "147px" }}>Chi tiết doanh thu</th>
                </tr>
              </thead>
              <tbody>
                {danhsachs.map((danhsach) => (
                  <tr
                    style={{
                      color: "#FFFFFF",
                      marginBottom: "1px",
                      borderBottom: "1px solid #727288",
                      height: 47,
                    }}
                  >
                    <td>{danhsach.id}</td>
                    <td>UQ789</td>
                    <td>Vương Anh Tú</td>
                    <td>15</td>
                    <td>365.000.000</td>
                    <td>365.000.000</td>
                    <td>365.000.000</td>
                    <td>{danhsach.ngaychot}</td>
                    <td style={{ width: "182px" }}>
                      <a
                        style={{
                          display: "block",
                          color: "#FF7506",
                          textAlign: "center",
                        }}
                        href="/#"
                      >
                        Xem chi tiết
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div
              style={{
                width: "fit-content",
                maxWidth: "1485px",
                height: "fit-content",
                minHeight: "32px",
                display: "flex",
                justifyContent: "space-between",
                gap: "8px",
                marginTop: 62,
              }}
            >
              <div
                style={{
                  width: "max-content",
                  maxWidth: "279.82px",
                  height: "fit-content",
                  minHeight: "32px",
                  color: "#F5F5FF",
                }}
              >
                Hiển thị
                <div style={{ display: "inline-flex" }}>
                  <div
                    style={{
                      width: "48.37px",
                      height: "32px",
                      borderRadius: "4px",
                      margin: "0px 8px 0px 8px",
                      border: "1px solid #FF7506",
                      background: "#2B2B3F",
                      color: "#FFFFFF",
                      fontFamily: "Montserrat",
                      fontSize: "16px",
                      fontWeight: "600",
                      letterSpacing: "-0.002em",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    13
                  </div>
                </div>
                hàng trong mỗi trang
              </div>

              <div
                style={{
                  width: "203px",
                  height: "26px",
                  position: "absolute",
                  right: 50,
                  color: "#F5F5FF",
                }}
                className="mao"
              >
                <a href="/#" className="sott4">
                  &lt;
                </a>
                <a href="/#" className="sott4">
                  1
                </a>
                <a href="/#" className="sott44">
                  2
                </a>
                <a href="/#" className="sott4">
                  3
                </a>
                <a href="/#" className="sott4">
                  ...
                </a>
                <a href="/#" className="sott4">
                  100
                </a>
                <a href="/#" className="sott4">
                  &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QLPhanPhoiDoanhThu;
