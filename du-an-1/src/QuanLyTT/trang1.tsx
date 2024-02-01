import React, { useState } from "react";
import Navbar from "../BackGround/navbar";
import "../cssne/Trang1.css";

const Trang1: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    console.log("Đã nhấp vào chữ 'Đổi mật khẩu'");
    console.log(showModal);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    console.log("Đã đóng modal");
    setShowModal(false);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          position: "absolute",
          width: "100%",

          height: "100%",
          top: "10px",
          right: "10px",
          zIndex: "9999",
        }}
      >
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
            <div onClick={handleOpenModal}>
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
        <div>
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                {/* Nội dung form modal */}
                <p style={{ color: "black" }}>SDsdm</p>
                <form>
                  {/* Các trường nhập mật khẩu mới, xác nhận mật khẩu, nút lưu, v.v. */}
                  <div>lskf</div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Trang1;
