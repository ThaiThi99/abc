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
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-md-6 text-center"
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
                // position: "absolute",
                width: 383,
                height: 40,
                top: 408,
                // left: 769,
                fontFamily: "Montserrat",
                fontSize: 36,
                fontWeight: 700,
                // lineHeight: 48,
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#FFFFFF",
              }}
            >
              Khôi phục mật khẩu
            </div>

            {/* <h1 className="bb">Khôi phục mật khẩu</h1> */}
            {/* <p style={{ color: "#FFFFFF" }}>
              Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật
              khẩu
            </p> */}
            <div
              className="mt-4"
              style={{
                // position: "absolute",
                width: "567px",
                height: "24px",
                top: "464px",
                left: "662px",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: "400",
                // lineHeight: 24,
                letterSpacing: "-0.002em",
                textAlign: "center",
                color: "#FFFFFF",
              }}
            >
              Vui lòng nhập địa chỉ email đã đăng ký để yêu cầu khôi phục mật
              khẩu
            </div>

            <div className="login1 mt-4">
              <label htmlFor="username">email</label> <br />
              <input
                className="bg-black"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <button
              className="mb-5"
              style={{ background: "#FF7506" }}
              onClick={handleLogin}
            >
              xác nhận
            </button>
            <a className="mt-5" href="/login" style={{ color: "#FF7506" }}>
              quên mật khẩu?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuenMatKhau;
