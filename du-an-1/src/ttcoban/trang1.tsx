import React from "react";
import Navbar from "../BackGround/navbar";
// import "../css/trang1.css";

const Trang1: React.FC = () => {
  return (
    <>
      <Navbar />

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
        <div
          style={{
            width: "319px",
            height: "54px",
            top: "86px",
            left: "208px",
            fontFamily: "Montserrat",
            fontSize: "36px",
            fontWeight: 700,
            lineHeight: "48px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#F5F5FF",
            position: "relative",
            marginTop: "6px",
            marginLeft: "38px",
          }}
        >
          Thông tin cơ bản
        </div>
        <div
          style={{
            width: "1018px",
            height: "528px",
            top: "188px",
            left: "59px",

            position: "relative",
          }}
        >
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
            <img
              src="images/camera.png"
              alt=""
              style={{
                width: "72px",
                height: "72px",
                top: "227px",
                left: "176px",
                padding: "14.13px 16.85px 19.72px 17px",

                position: "absolute",
              }}
            />
            <p
              style={{
                width: "144px",
                height: "24px",
                top: "304px",
                left: "68px",
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#F5F5FF",
                margin: "24px 68px 23px 68px",
              }}
            >
              Tuyết Nguyễn
            </p>
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
            <div
              style={{
                width: "28px",
                height: "24px",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#FFFFFF",
              }}
            >
              Họ:
            </div>
            <input
              type="text"
              placeholder="Nguyễn"
              style={{
                width: "274px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                background: "#2B2B3F",
                color: "white",
              }}
            />
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
            <div
              style={{
                width: "28px",
                height: "24px",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#FFFFFF",
              }}
            >
              Tên:
            </div>
            <input
              type="text"
              placeholder="Tuyết"
              style={{
                width: "274px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                background: "#2B2B3F",
                color: "white",
              }}
            />
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
            <div
              style={{
                width: "86px",
                height: "24px",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#FFFFFF",
              }}
            >
              Ngày sinh:
            </div>
            <input
              type="text"
              placeholder="Tuyết"
              style={{
                width: "274px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                background: "#2B2B3F",
                color: "white",
              }}
            />
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
            <div
              style={{
                width: "112px",
                height: "24px",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#FFFFFF",
              }}
            >
              Số điện thoại:
            </div>
            <input
              type="text"
              placeholder="Tuyết"
              style={{
                width: "274px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                background: "#2B2B3F",
                color: "white",
              }}
            />
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
            <div
              style={{
                width: "112px",
                height: "24px",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#FFFFFF",
              }}
            >
              Email:
            </div>
            <input
              type="text"
              placeholder="tuyetnguyenngoc@alta.com.vn"
              style={{
                width: "571px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                background: "#2B2B3F",
                color: "white",
              }}
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
            <div
              style={{
                width: "112px",
                height: "24px",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#FFFFFF",
              }}
            >
              Tên đăng nhập:
            </div>
            <input
              type="text"
              placeholder="tuyetnguyenngoc@alta.com.vn"
              style={{
                width: "571px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                background: "#2B2B3F",
                color: "white",
              }}
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
            <div
              style={{
                width: "100px",
                height: "24px",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#FFFFFF",
              }}
            >
              Phân quyền:
            </div>
            <input
              type="text"
              placeholder="admin"
              style={{
                width: "274px",
                height: "48px",
                padding: "11px 24px 13px 16px",
                borderRadius: "8px",
                background: "#2B2B3F",
                color: "white",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Trang1;
