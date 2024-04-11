import { useState } from "react";
import Navbar1 from "../BackGround/navbar1";
import "../cssne/khobangi.css";
interface DSNhac {
  id: number;
  ngaychot: string;
}
interface DoanhThu {
  donvi: string;
  soluotphat: number;
}

const PhanPhoiDoanhThu = () => {
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
  ]);
  const [doanhthus, setdoanhthus] = useState<DoanhThu[]>([
    {
      donvi: "CTy TNHH A",
      soluotphat: 200,
    },
    {
      donvi: "CTy TNHH A",
      soluotphat: 200,
    },
    {
      donvi: "CTy TNHH A",
      soluotphat: 200,
    },
    {
      donvi: "CTy TNHH A",
      soluotphat: 200,
    },
    {
      donvi: "CTy TNHH A",
      soluotphat: 200,
    },
    {
      donvi: "CTy TNHH A",
      soluotphat: 200,
    },
    {
      donvi: "CTy TNHH A",
      soluotphat: 200,
    },
    {
      donvi: "CTy TNHH A",
      soluotphat: 200,
    },
    {
      donvi: "CTy TNHH A",
      soluotphat: 200,
    },
    {
      donvi: "CTy TNHH A",
      soluotphat: 200,
    },
    {
      donvi: "CTy TNHH A",
      soluotphat: 200,
    },
    {
      donvi: "CTy TNHH A",
      soluotphat: 200,
    },
  ]);
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div style={{ width: "100%", display: "flex" }}>
        <Navbar1 />
        <div>
          <div
            style={{
              top: 86,
              left: 78,
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
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Phân phối doanh thu
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Chi tiết doanh thu
            </a>
          </div>

          <div
            style={{
              width: 800,
              height: 48,
              top: 114,
              left: 78,
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
              Hợp đồng Ủy quyền UQ123 - Quý 1
            </p>
          </div>
        </div>
        <div className="khungt">
          <div className="khugne">
            <a href="/qlphanphoidoanhthu" style={{ textDecoration: "none" }}>
              <img src="images/dangxuat.png" alt="sua" className="icon1" />
              <div className="texttt">
                Xuât <br /> dữ liệu
              </div>
            </a>
          </div>
        </div>
        <div
          style={{
            width: "235px",
            height: "24px",
            top: "186px",
            left: "80px",
            fontSize: 24,
            position: "absolute",
            color: "white",
          }}
        >
          Danh sách bản ghi
        </div>

        <div
          style={{
            width: "665px",
            height: "48px",
            position: "absolute",
            top: "229px",
            left: "80px",
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
            <a href="#">
              <i
                style={{ color: "white" }}
                className="fa-solid fa-magnifying-glass"
              ></i>
            </a>
          </div>
        </div>

        <div
          style={{
            width: "235px",
            height: "24px",
            top: "186px",
            left: "1121px",
            fontSize: 24,
            position: "absolute",
            color: "white",
          }}
        >
          Doanh thu bản ghi
        </div>
        <div
          style={{
            width: "235px",
            height: "24px",
            top: "215px",
            fontSize: 28,
            left: "1121px",
            position: "absolute",
            color: "#FFAC69",
          }}
        >
          Cuộc gọi nhỡ
        </div>

        <div
          style={{
            width: 1017,
            position: "absolute",
            top: 296,
            left: 80,
            borderRadius: 16,
            gap: 56,
            backgroundColor: "#2F2F41B2",
          }}
        >
          <table
            style={{
              width: 1017,
              height: 723,
              margin: "16px 24px 104px 24px",
            }}
          >
            <thead style={{ color: "#FFAC69" }}>
              <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
                <th style={{ width: "87px" }}>STT</th>
                <th style={{ width: "234px" }}>Bài hát</th>
                <th style={{ width: "146px" }}>Số lượt phát</th>
                <th style={{ width: "147px" }}>Doanh thu (VNĐ)</th>
                <th style={{ width: "186px" }}>Hành chính phí (VNĐ)</th>
                <th style={{ width: "169px" }}>Nhuận bút (VNĐ)</th>
              </tr>
            </thead>
            <tbody
              style={{
                color: "#FFFFFF",
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                letterSpacing: "0.015em",
                textAlign: "left",
              }}
            >
              <tr style={{ height: 47 }}>
                <td>Tổng </td>
                <td>13</td>
                <td>17,527</td>
                <td>1.045.000,000</td>
                <td>209.001.505</td>
                <td>835.998.495</td>
              </tr>
              {danhsachs.map((danhsach) => (
                <tr style={{ height: 47 }}>
                  <td>{danhsach.id}</td>
                  <td>Hết thương cạn nhớ </td>
                  <td>1200</td>
                  <td>12.000.000</td>
                  <td>2.500.000</td>
                  <td>2.500.000</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div
            style={{
              width: "fit-content",
              maxWidth: "1485px",
              display: "flex",
              gap: "8px",
              marginLeft: 24,
              marginBottom: 10,
            }}
          >
            <div
              style={{
                width: "max-content",
                maxWidth: "279.82px",
                minHeight: "32px",
                color: "#F5F5FF",
              }}
            >
              Hiển thị
              <div style={{ display: "inline-flex", position: "relative" }}>
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
                  11
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

        <div
          style={{
            width: 645,
            position: "absolute",
            top: 296,
            left: 1121,
            borderRadius: 16,
            gap: 56,
            backgroundColor: "#2F2F41B2",
          }}
        >
          <table
            style={{
              width: 645,
              height: 763,
              margin: "16px 24px 104px 24px",
            }}
          >
            <thead style={{ color: "#FFAC69" }}>
              <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
                <th style={{ width: "199px" }}>Đơn vị khai thác</th>
                <th style={{ width: "199px" }}>Số lượt phát</th>
                <th style={{ width: "199px" }}>Doanh thu (VNĐ)</th>
              </tr>
            </thead>
            <tbody
              style={{
                color: "#FFFFFF",
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                letterSpacing: "0.015em",
                textAlign: "left",
              }}
            >
              <tr style={{ height: 47 }}>
                <td>Tổng </td>
                <td>100</td>
                <td>835.998.495</td>
              </tr>
              {doanhthus.map((doanhthu) => (
                <tr style={{ height: 47 }}>
                  <td>{doanhthu.donvi} </td>
                  <td>{doanhthu.soluotphat}</td>
                  <td> 2.500.000</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PhanPhoiDoanhThu;
