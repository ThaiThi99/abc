import { useState } from "react";
import Navbar1 from "../BackGround/navbar1";

const ThemNguoiDung = () => {
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
              Thêm người dùng
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
              Thêm người dùng
            </p>
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
            Tên người dùng <span style={{ color: "red" }}> *</span>
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
            Email <span style={{ color: "red" }}> *</span>
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
            Vai trò <span style={{ color: "red" }}> *</span>
          </div>
          <div
            style={{
              width: "270px",
              height: "18px",
              top: "418px",
              left: "80px",
              padding: "0px 2px 0px 2px",
              gap: "4px",
              color: "white",
            }}
          >
            <span style={{ color: "red" }}>*</span>là những trường thông tin bắt
            buộc
          </div>
        </div>
        <div style={{ top: "202px", left: "246px", position: "absolute" }}>
          <div>
            <input
              type="text"
              style={{
                width: "405px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
          <div style={{ margin: "24px 0 24px" }}>
            <input
              type="text"
              style={{
                width: "405px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
          <div>
            <select
              style={{
                width: "256px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "white",
                opacity: "50%",
              }}
              name=""
              id=""
            >
              <option value="" selected>
                Chọn vai trò
              </option>
              <option value="super">Super Admin</option>
              <option value="Group Admin">Group Admin</option>
              <option value="Sub - user">Sub - user</option>

              <option value="Content manager">Content manager</option>
            </select>
          </div>
        </div>

        <div
          style={{
            width: "142px",
            position: "absolute",
            top: "213px",
            left: "824px",
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
            Tên đăng nhập <span style={{ color: "red" }}> *</span>
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
            Mật khẩu<span style={{ color: "red" }}> *</span>
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
            Nhập lại mật khẩu<span style={{ color: "red" }}> *</span>
          </div>
        </div>

        <div style={{ top: "202px", left: "1037px", position: "absolute" }}>
          <div>
            <input
              type="text"
              style={{
                width: "405px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
          <div style={{ margin: "24px 0 24px" }}>
            <input
              type="password"
              style={{
                width: "405px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
          <div>
            <input
              type="password"
              style={{
                width: "405px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
        </div>

        <div>
          <div
            style={{
              width: "367px",
              height: "48px",
              top: "476px",
              left: "772px",
              gap: "32px",
              position: "absolute",
            }}
          >
            <button
              className="butoon"
              style={{
                color: "#FF7506",
                backgroundColor: "transparent",
              }}
            >
              Hủy
            </button>
            <button
              className="butoon"
              style={{
                color: "white",
                background: "#FF7506",
                marginLeft: "16px",
              }}
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemNguoiDung;
