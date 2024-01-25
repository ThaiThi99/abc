import React, { useState } from "react";
import HeaderLogin from "../BackGround/headerLogin";

const LinkLoi: React.FC = () => {
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
              color: "#FF4747",
              marginTop: "52px",
            }}
          >
            Không thể kết nối !!
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
            Dường như đã có chút trục trặc hoặc link này đã hết hạn. Vui lòng
            thử lại <br /> hoặc yêu cầu gửi lại link để đặt lại mật khẩu của
            bạn.
          </div>
          <button
            style={{
              width: "220px",
              height: "56px",
              top: "568px",
              left: "850px",
              padding: "16px 24px",
              borderRadius: "8px",
              border: "1px solid #FF7506",
              gap: "8px",
              color: "#FF7506",
              backgroundColor: "transparent",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "center",
              marginTop: "56px",
            }}
          >
            Yêu cầu gửi lại link
          </button>

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

export default LinkLoi;
