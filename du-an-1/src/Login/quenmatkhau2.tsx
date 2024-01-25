import React, { useState } from "react";
import HeaderLogin from "../BackGround/headerLogin";

const QuenMatKhau2: React.FC = () => {
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
              marginTop: "52px",
            }}
          >
            Khôi phục mật khẩu
          </div>
          <div
            style={{
              width: "625px",
              height: "24px",
              top: "464px",
              left: "643px",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "center",
              color: "#FFFFFF",
              marginTop: "16px",
            }}
          >
            Link khôi phục mật khẩu đã được gửi vào mail của bạn. Vui lòng kiểm
            tra mail.
          </div>
          <div
            style={{
              width: "683px",
              height: "24px",
              top: "492px",
              left: "643px",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "center",
              color: "#FFFFFF",
            }}
          >
            Click vào đường link được đính kèm trong mail để chuyển đến trang
            đặt lại mật khẩu.
          </div>

          <a
            href="/login"
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
              marginBottom: "52px",
            }}
          >
            Quay lại đăng nhập
          </a>
        </div>
      </div>
    </>
  );
};

export default QuenMatKhau2;
