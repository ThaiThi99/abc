import React, { useState } from "react";
import HeaderLogin from "../BackGround/headerLogin";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { createBrowserHistory } from "history";

import { signInWithEmailAndPassword } from "firebase/auth";

// Configure Firebase.
const config = {
  apiKey: "AIzaSyB6jrfajGLlrI6IO_9TPsO2KEbpJNGXmv0",
  authDomain: "thaidoanthi-99.firebaseapp.com",
};
firebase.initializeApp(config);

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [language, setLanguage] = useState("en");
  const [errorMessage, setErrorMessage] = useState("");
  const history = createBrowserHistory();

  const dangnhap = async (event: any) => {
    setErrorMessage("");
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement;
    const email = emailInput.value;
    const password = passwordInput.value;
    const auth = getAuth();

    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = await userCredential.user;

        console.log("thành công", user.providerData[0].email);
        // history.push("/navbar", { user: user }); // Chuyển hướng và truyền thông tin user
        // navigate("/navbar", { state: { user: user } });

        await history.push("/trang1", {
          user: user.providerData[0].email,
        });
        window.location.reload();
      })
      .catch((error) => {
        // const errorCode = error.code;
        setErrorMessage("Sai tên tài khoản hoặc mật khẩu.");
        console.log("thất bại");
      });
  };

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
              src="https://firebasestorage.googleapis.com/v0/b/thaidoanthi-99.appspot.com/o/images%2Flogo.png?alt=media&token=5b735b4d-5635-4638-9529-7aa360c006fe"
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
                name="username"
                id="email"
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
                  name="password"
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
              style={{
                color: "#FF0000",
                fontFamily: "Montserrat",
                fontSize: 16,
                fontWeight: 400,
                marginLeft: 18,
                letterSpacing: "-0.002em",
                textAlign: "left",
              }}
              id="error-message"
            >
              {errorMessage}
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
              type="submit"
              onClick={(event) => dangnhap(event)}
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
