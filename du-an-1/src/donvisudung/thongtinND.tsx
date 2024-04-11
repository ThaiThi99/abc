import { useState } from "react";
import Navbar1 from "../BackGround/navbar1";
import "../cssne/khobangi.css";

const ThongTinNguoiDung = () => {
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
              Quản lý
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Đơn vị sử dụng
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Chi tiết
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Thông tin người dùng
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
              Thông tin người dùng
            </p>
          </div>
        </div>
        <div className="khungt" style={{ top: 189 }}>
          <div className="khugne">
            <a href="/chinhsuattnd" style={{ textDecoration: "none" }}>
              <img src="images/sua.png" alt="sua" className="icon1" />
              <div className="texttt">Chỉnh sửa </div>
            </a>
          </div>
        </div>
        <div
          style={{
            width: "142px",
            position: "absolute",
            top: "213px",
            left: "80px",
            gap: "4px",
          }}
        >
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            Tên người dùng :
          </div>
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              marginTop: 49,
              marginBottom: 48,
            }}
          >
            Vai trò :
          </div>
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              marginBottom: 36,
            }}
          >
            Email:
          </div>
        </div>

        <div
          style={{
            width: "142px",
            position: "absolute",
            top: "213px",
            left: "246px",
            gap: "4px",
          }}
        >
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            Nguyễn văn A
          </div>
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              marginTop: 49,
              marginBottom: 48,
            }}
          >
            QA
          </div>
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              marginBottom: 36,
            }}
          >
            nguyenvana@gmail.com
          </div>
        </div>

        <div
          style={{
            width: "142px",
            position: "absolute",
            top: "213px",
            left: "978px",
            gap: "4px",
          }}
        >
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            Tên đăng nhập:
          </div>
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              marginTop: 49,
              marginBottom: 48,
            }}
          >
            Mật khẩu:
          </div>
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              marginBottom: 36,
            }}
          >
            Trạng thái thiết bị:
          </div>
        </div>

        <div
          style={{
            width: "142px",
            position: "absolute",
            top: "213px",
            left: "1153px",
            gap: "4px",
          }}
        >
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            nguyenvana@gmail.com
          </div>
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              marginTop: 49,
              marginBottom: 48,
            }}
          >
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
          </div>
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              marginBottom: 36,
            }}
          >
            Đã kích hoạt
          </div>
        </div>
      </div>
    </>
  );
};

export default ThongTinNguoiDung;
