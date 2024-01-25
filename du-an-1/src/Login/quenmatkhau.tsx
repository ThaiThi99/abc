import React, { useState } from "react";
import HeaderLogin from "../BackGround/headerLogin";

const QuenMatKhau: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [language, setLanguage] = useState("en");

  const handleLogin = () => {
    // Xử lý logic đăng nhập tại đây
  };

  return (
    <>
      <HeaderLogin />

      <div className="row justify-content-center">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
          }}
        >
          <img
            style={{
              width: "240px",
              height: "240px",
              borderRadius: "112px",
              top: "116px",
              left: "840px",
            }}
            src="images/logo.png"
            alt=""
          />

          <div
            style={{
              width: "383px",
              height: "40px",
              top: "408px",
              left: "769px",
              fontFamily: "Montserrat",
              fontSize: "36px",
              fontWeight: "700",
              lineHeight: "48px",
              letterSpacing: "-0.002em",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Khôi phục mật khẩu
          </div>
          <div
            style={{
              width: "567px",
              height: "24px",
              top: "464px",
              left: "662px",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật khẩu
          </div>

          <div
            style={{
              width: "598px",
              height: "fit-content", // Sử dụng 'fit-content' thay cho 'hug'
              top: "520px",
              left: "661px",
              gap: "8px",
            }}
          >
            <div
              style={{
                width: "47px",
                height: "24px",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#FFFFFF",
              }}
            >
              email
            </div>
            <input
              className="bg-black"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "598px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background:
                  "linear-gradient(0deg, #2B2B3F, #2B2B3F), linear-gradient(0deg, #727288, #727288)",
                color: "#FFFFFF",
              }}
            />
          </div>

          <button
            className="mt-5"
            style={{
              width: "208px",
              height: "56px",
              top: "648px",
              left: "856px",
              padding: "16px 24px",
              borderRadius: "8px",
              gap: "8px",
              background: "#FF7506",
              animationDuration: "0ms",
            }}
          >
            xác nhận
          </button>
          <a
            href="/"
            style={{
              position: "absolute", // Thêm dòng này để định vị theo tọa độ top và left
              width: "161px",
              height: "24px",
              top: "1005px",
              left: "50%",
              transform: "translateX(-50%)",
              textDecoration: "underline", // Thêm dòng này để tạo gạch chân
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "24px",
              letterSpacing: "0em",
              textAlign: "center",
              color: "#FF7506",
            }}
          >
            Quay lại đăng nhập
          </a>
        </div>
      </div>
    </>
  );
};

export default QuenMatKhau;
