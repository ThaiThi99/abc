import React, { useState } from "react";
import Navbar from "../BackGround/navbar";
import "../cssne/Trang1.css";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Trang1: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="thedau">
        <Navbar />
        <div className="ttcb">Thông tin cơ bản</div>
        <div className="khung">
          <div
            style={{
              width: "280px",
              height: "351px",
            }}
          >
            <img
              src="images/admin.jpg"
              alt=""
              style={{
                width: "273px",
                height: "280px",
                left: "2px",
                borderRadius: "200px",
              }}
            />
            <img src="images/camera.png" alt="" className="avt" />
            <p className="ten">Tuyết Nguyễn</p>
          </div>
          <div
            style={{
              width: "274px",
              height: "80px",
              left: "447px",
              gap: "8px",
              top: "0PX",
              position: "absolute",
            }}
          >
            <div className="lablee">Họ:</div>
            <input type="text" placeholder="Nguyễn" className="inputt" />
          </div>
          <div
            style={{
              width: "274px",
              height: "80px",
              left: "745px",
              gap: "8px",
              top: "0PX",

              position: "absolute",
            }}
          >
            <div className="lablee">Tên:</div>
            <input type="text" placeholder="Tuyết" className="inputt" />
          </div>
          <div
            style={{
              width: "274px",
              height: "80px",
              left: "447px",
              gap: "8px",
              top: "112px",
              position: "absolute",
            }}
          >
            <div className="lablee">Ngày sinh:</div>
            <input type="text" placeholder="Tuyết" className="inputt" />
          </div>
          <div
            style={{
              width: "274px",
              height: "80px",
              left: "745px",
              gap: "8px",
              top: "112px",
              position: "absolute",
            }}
          >
            <div className="lablee">Số điện thoại:</div>
            <input type="text" placeholder="Tuyết" className="inputt" />
          </div>
          <div
            style={{
              width: "571px",
              height: "80px",
              left: "447px",
              gap: "8px",
              top: "224px",
              position: "absolute",
            }}
          >
            <div className="lablee">Email:</div>
            <input
              type="text"
              placeholder="tuyetnguyenngoc@alta.com.vn"
              className="input1"
              readOnly
            />
          </div>
          <div
            style={{
              width: "571px",
              height: "80px",
              left: "447px",
              gap: "8px",
              top: "336px",
              position: "absolute",
            }}
          >
            <div className="lablee">Tên đăng nhập:</div>
            <input
              type="text"
              placeholder="tuyetnguyenngoc@alta.com.vn"
              className="input1"
              readOnly
            />
          </div>
          <div
            style={{
              width: "274px",
              height: "80px",
              left: "447px",
              gap: "8px",
              top: "448px",
              position: "absolute",
            }}
          >
            <div className="lablee">Phân quyền:</div>
            <input
              type="text"
              placeholder="admin"
              className="inputt"
              readOnly
            />
          </div>
        </div>
        <div className="khung2">
          <div className="khung1">
            <a href="/suatt" style={{ textDecoration: "none" }}>
              <img src="images/sua.png" alt="sua" className="icon" />
              <div className="textt">
                Sửa thông <br /> tin
              </div>
            </a>
          </div>
          <div className="khung1">
            <div data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src="images/doimk.png" alt="doimk" className="icon" />
              <div className="textt">
                Đổi <br /> mật khẩu
              </div>
            </div>
          </div>
          <div
            style={{
              width: "110px",
              height: "112px",
              padding: "16px",
              gap: "10px",
            }}
          >
            <a href="/">
              {" "}
              <img
                src="images/dangxuat.png"
                alt="dangxuat"
                className="icon"
                style={{ marginLeft: "15px" }}
              />
              <div className="dangxuat">Đăng xuất</div>
            </a>
          </div>
        </div>
        {/* showModal     */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            style={{
              display: "flex",
            }}
          >
            <div
              className="modal-content"
              style={{
                backgroundColor: "#3E3E5B",
                width: "552px",
                height: "512px",
                borderRadius: "16px",
              }}
            >
              <div className="modal-body">
                <h5
                  className="modal-title m-0"
                  id="exampleModalLabel"
                  style={{
                    width: "234px",
                    height: "24px",
                    top: "32px",
                    left: "159px",
                    fontFamily: "Montserrat",
                    fontSize: "24px",
                    fontWeight: 700,
                    lineHeight: "24px",
                    letterSpacing: "-0.002em",
                    textAlign: "center",
                    color: "#F5F5FF",
                  }}
                >
                  Thay đổi mật khẩu
                </h5>
                <div>
                  <div className="matkhau">Mật khẩu hiện tại:</div>
                  <div
                    className="password-input-wrapper"
                    style={{ position: "relative" }}
                  >
                    <input
                      className="inputmk"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <FontAwesomeIcon
                      className="faEyee"
                      icon={showPassword ? faEyeSlash : faEye}
                      onClick={toggleShowPassword}
                    />
                  </div>
                </div>

                <div>
                  <div className="matkhau">Mật khẩu mới:</div>
                  <div
                    className="password-input-wrapper"
                    style={{ position: "relative" }}
                  >
                    <input
                      className="inputmk"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <FontAwesomeIcon
                      className="faEyee"
                      icon={showPassword ? faEyeSlash : faEye}
                      onClick={toggleShowPassword}
                    />
                  </div>
                </div>
                <div>
                  <div className="matkhau">Nhập lại mật khẩu mới:</div>
                  <div
                    className="password-input-wrapper"
                    style={{ position: "relative" }}
                  >
                    <input
                      className="inputmk"
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <FontAwesomeIcon
                      className="faEyee"
                      icon={showPassword ? faEyeSlash : faEye}
                      onClick={toggleShowPassword}
                    />
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      width: "368px",
                      height: "48px",
                      top: "424px",
                      left: "92px",
                      gap: "32px",
                      position: "absolute",
                    }}
                  >
                    <button
                      className="butoon"
                      style={{
                        color: "#FF7506",
                      }}
                      data-bs-dismiss="modal"
                    >
                      Hủy
                    </button>
                    <button
                      className="butoon"
                      style={{
                        color: "white",
                        background: "#FF7506",
                        marginLeft: "32px",
                      }}
                    >
                      Lưu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trang1;
