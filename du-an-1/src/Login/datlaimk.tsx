import React, { useState } from "react";
import HeaderLogin from "../BackGround/headerLogin";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DatlaiMK: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleSave = () => {
    if (password === confirmPassword) {
      // Passwords match, proceed with saving logic
      setPasswordMatchError(false);
      // Continue with your save logic here
    } else {
      // Passwords don't match, display error
      setPasswordMatchError(true);
    }
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
              }}
              src="images/logo.png"
              alt=""
            />

            <div
              style={{
                width: "313px",
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
                marginTop: "48px",
                marginBottom: "40px",
              }}
            >
              Đặt lại mật khẩu
            </div>

            <div>
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
                Mật khẩu mới:
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
                    color: "#F5F5FF",
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
              </div>
            </div>

            <div>
              <div
                style={{
                  width: "192px",
                  height: "24px",
                  opacity: "0.7",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#F5F5FF",
                  marginTop: "24px",
                }}
              >
                Nhập lại mật khẩu mới:
              </div>
              <div
                className="password-input-wrapper"
                style={{ position: "relative" }}
              >
                <input
                  className="bg-black"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
              </div>
            </div>
            {passwordMatchError && (
              <div
                style={{
                  width: "471px",
                  color: "red",
                  marginTop: "8px",
                  fontSize: "14px",
                  textAlign: "left",
                }}
              >
                Mật khẩu phải trùng nhau
              </div>
            )}
            <button
              className="mb-5"
              onClick={handleSave}
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
              Lưu mật khẩu
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatlaiMK;
