import React, { useState } from "react";
import HeaderLogin from "../BackGround/headerLogin";

const LoginForm: React.FC = () => {
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
          {/* <div className="col-md-6">
            <img
              style={{
                width: "240px",
                height: "240px",
                top: "116px",
                left: "840px",
                borderRadius: "112px",
              }}
              src="images/logo.png"
              alt=""
            />
            <div
              style={{
                width: "Hug (471px)",
                height: "Hug (80px)",
                top: "472px",
                left: "724px",
                gap: "8px",
              }}
            >
              <label htmlFor="username">tên đăng nhập:</label> <br />
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <br />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <div className="form-check text-start my-3">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue="remember-me"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                ghi nhớ đăng nhập
              </label>
            </div>

            <button
              className="text-center"
              style={{ background: "#FF7506" }}
              onClick={handleLogin}
            >
              Login
            </button>
          </div> */}
          <div
            className="col-md-6 text-center"
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
              }}
              src="images/logo.png"
              alt=""
            />
            <h1 style={{ color: "#FFFFFF" }}>Đăng nhập</h1>
            <div className="login1">
              <label htmlFor="username">tên đăng nhập:</label> <br />
              <input
                className="bg-black"
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="login1">
              <label htmlFor="password">Password:</label>
              <br />
              <input
                className="bg-black"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i className="fa-light fa-eye" style={{ color: "#ee2b3e" }}></i>

              <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="form-check text-start my-3">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue="remember-me"
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                ghi nhớ đăng nhập
              </label>
            </div>

            <button
              className="mb-5"
              style={{ background: "#FF7506" }}
              onClick={handleLogin}
            >
              Login
            </button>
            <a className="mt-5" href="/quenMK" style={{ color: "#FF7506" }}>
              quên mật khẩu?
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
