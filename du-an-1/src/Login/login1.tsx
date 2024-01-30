import React, { useState } from "react";
import HeaderLogin from "../BackGround/headerLogin";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [language, setLanguage] = useState("en");

  const handleLogin = () => {
    // Xử lý logic đăng nhập tại đây
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <HeaderLogin />
      <div className="container">
        <div className="row justify-content-center">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "240px",
                height: "240px",
                borderRadius: "112px",
                top: "116px",
                left: "840px",
                marginTop: "116px",
              }}
              src="images/logo.png"
              alt=""
            />

            <div
              style={{
                width: "210px",
                height: "48px",
                top: "396px",
                left: "855px",
                fontFamily: "Montserrat",
                fontSize: "36px",
                fontWeight: "700",
                lineHeight: "48px",
                letterSpacing: "-0.002em",
                textAlign: "center",
                color: "#FFFFFF",
                marginTop: "40px",
              }}
            >
              Đăng nhập
            </div>
            <div
              style={{
                width: "471px",
                height: "80px",
                top: "472px",
                left: "724px",
                gap: "8px",
                marginTop: "28px",
              }}
            >
              <div
                style={{
                  width: "124px",
                  height: "24px",
                  opacity: "0.7",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                Tên đăng nhập
              </div>
              <input
                className="bg-black"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  width: "471px",
                  height: "48px",
                  padding: "11px 24px 13px 16px",
                  borderRadius: "8px",
                  background: "#2B2B3F",
                  fontFamily: "Arial",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  letterSpacing: "normal",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              />
            </div>

            <div className="login1">
              <div
                style={{
                  width: "124px",
                  height: "24px",
                  opacity: "0.7",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                Password
              </div>
              <div
                className="password-input-wrapper"
                style={{ position: "relative" }}
              >
                <input
                  className="bg-black"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{
                    width: "471px",
                    height: "48px",
                    padding: "11px 24px 13px 16px",
                    borderRadius: "8px",
                    background: "#2B2B3F",
                    fontFamily: "Arial",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "24px",
                    letterSpacing: "normal",
                    textAlign: "left",
                    color: "#FFFFFF",
                  }}
                />

                <FontAwesomeIcon
                  style={{
                    width: "40px",
                    position: "absolute",
                    right: 10,
                    top: 15,
                    color: "red",
                  }}
                  icon={showPassword ? faEyeSlash : faEye}
                  onClick={toggleShowPassword}
                />
                {/* </div> */}
              </div>
            </div>

            <div
              // className="form-check text-start my-3 "
              style={{
                width: "188px",
                height: "24px",
                top: "672px",
                left: "724px",
                gap: "8px",
                marginRight: "260px",
                marginTop: "20px",
              }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue="remember-me"
                id="flexCheckDefault"
                style={{
                  width: "24px",
                  height: "24px",
                  border: "1.5px solid #347AFF",
                  color: "#347AFF",
                  fontFamily: "Arial",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  letterSpacing: "normal",
                  textAlign: "left",
                }}
              />
              <label
                className="form-check-label"
                htmlFor="flexCheckDefault"
                style={{
                  width: "156px",
                  height: "24px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                ghi nhớ đăng nhập
              </label>
            </div>

            <button
              className="mb-5"
              onClick={handleLogin}
              style={{
                width: "208px",
                height: "56px",
                top: "744px",
                left: "856px",
                padding: "16px 24px",
                borderRadius: "8px",
                gap: "8px",
                background: "#FF7506",
                fontFamily: "Arial",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "24px",
                letterSpacing: "normal",
                textAlign: "center",
                color: "#FFFFFF",
                marginTop: "48px",
              }}
            >
              Đăng nhập
            </button>
            <a
              className="mt-5"
              href="/quenMK"
              style={{
                width: "139px",
                height: "24px",
                top: "1005px",
                left: "890px",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "24px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#FF7506",
                textDecoration: "underline",
                marginTop: "205px",
                marginBottom: "51px",
              }}
            >
              quên mật khẩu?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
