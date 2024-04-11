import { useState } from "react";
import Navbar1 from "../BackGround/navbar1";

const ThemThietBiMoi = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div style={{ width: "100%", display: "flex" }}>
        <Navbar1 />

        <div>
          <div
            style={{
              top: 86,
              left: 78,
              position: "absolute",
            }}
          >
            <a
              className="parent-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Danh sách thiết bị
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Chi tiết thiết bị
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Thêm thiết bị mới
            </a>
          </div>
          <div
            style={{
              width: 800,
              height: 48,
              top: 114,
              left: 78,
              position: "absolute",
              color: "#FFFFFF",
            }}
          >
            <p
              style={{
                fontFamily: "Montserrat",
                fontSize: 36,
                fontWeight: 700,
                letterSpacing: "-0.002em",
                textAlign: "left",
              }}
            >
              Thêm thiết bị mới
            </p>
          </div>
        </div>
        <div
          style={{
            width: "571px",
            position: "absolute",
            top: "202px",
            left: "80px",
            gap: "4px",
          }}
        >
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              height: 48,
            }}
          >
            Tên thiết bị:<span style={{ color: "red" }}> *</span>
          </div>
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              height: 48,
              marginTop: 24,
              marginBottom: 24,
            }}
          >
            SKU/ID: <span style={{ color: "red" }}> *</span>
          </div>
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              marginBottom: 36,
              height: 48,
            }}
          >
            Địa chỉ Mac:<span style={{ color: "red" }}> *</span>
          </div>

          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              marginBottom: 24,
              marginTop: 24,
              height: 48,
            }}
          >
            Thời hạn bảo hành:<span style={{ color: "red" }}> *</span>
          </div>

          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              height: 48,
            }}
          >
            Label:<span style={{ color: "red" }}> *</span>
          </div>

          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              marginBottom: 56,
              marginTop: 24,
              height: 48,
            }}
          >
            Thông tin:<span style={{ color: "red" }}> *</span>
          </div>

          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              marginBottom: 120,
              height: 48,
            }}
          >
            Ghi chú
          </div>
          <div
            style={{
              width: "270px",
              height: "18px",
              top: "418px",
              left: "80px",
              padding: "0px 2px 0px 2px",
              gap: "4px",
              color: "white",
            }}
          >
            <span style={{ color: "red" }}>*</span>là những trường thông tin bắt
            buộc
          </div>
        </div>
        <div style={{ top: "202px", left: "286px", position: "absolute" }}>
          <div>
            <input
              type="text"
              style={{
                width: "365px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
          <div style={{ margin: "24px 0 24px" }}>
            <input
              type="text"
              style={{
                width: "365px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
          <div>
            <input
              type="text"
              style={{
                width: "365px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
          <div style={{ margin: "24px 0 24px" }}>
            <input
              type="date"
              style={{
                width: "217px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
          <div>
            <select
              style={{
                width: "365px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "white",
                opacity: "50%",
              }}
              name=""
              id=""
            >
              <option value="" selected>
                Chọn vai trò
              </option>
              <option value="super">Super Admin</option>
              <option value="Group Admin">Group Admin</option>
              <option value="Sub - user">Sub - user</option>
              <option value="Content manager">Content manager</option>
            </select>
          </div>
          <div style={{ marginTop: 24, marginBottom: 10 }}>
            <select
              style={{
                width: "365px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "white",
                opacity: "50%",
              }}
              name=""
              id=""
            >
              <option value="" selected>
                Chọn vai trò
              </option>
              <option value="super">Super Admin</option>
              <option value="Group Admin">Group Admin</option>
              <option value="Sub - user">Sub - user</option>
              <option value="Content manager">Content manager</option>
            </select>
          </div>
          <div
            style={{
              width: "163px",
              height: "24px",
              marginLeft: "234px",
              position: "absolute",
              color: "white",
            }}
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/daucong.png?alt=media&token=0baeff57-de84-4b0c-854e-3b29ff5846a9"
              alt="daucong"
            />{" "}
            Thêm thông tin
          </div>
          <div>
            <textarea
              style={{
                width: "365px",
                height: "120px",
                marginTop: 48,
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
                color: "white",
                opacity: "50%",
              }}
            ></textarea>
          </div>
        </div>

        <div
          style={{
            width: "142px",
            position: "absolute",
            top: "217px",
            left: "1121px",
            gap: "4px",
          }}
        >
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            Tên đăng nhập <span style={{ color: "red" }}> *</span>
          </div>
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              marginTop: 49,
              marginBottom: 48,
            }}
          >
            Mật khẩu<span style={{ color: "red" }}> *</span>
          </div>
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              marginBottom: 36,
            }}
          >
            Nhập lại mật khẩu<span style={{ color: "red" }}> *</span>
          </div>
          <div
            style={{
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              marginBottom: 36,
            }}
          >
            Vị trí:<span style={{ color: "red" }}> *</span>
          </div>
        </div>

        <div style={{ top: "202px", left: "1313px", position: "absolute" }}>
          <div>
            <input
              type="text"
              style={{
                width: "405px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
          <div style={{ margin: "24px 0 24px" }}>
            <input
              type={showPassword ? "text" : "password"}
              style={{
                color: "white",
                width: "405px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
            <div
              style={{
                marginRight: 10,
                cursor: "pointer",
                position: "absolute",
                color: "red",
                display: "inline",
                marginTop: 10,
                right: 10,
              }}
              onClick={handleTogglePassword}
            >
              {showPassword ? (
                <i className="far fa-eye-slash"></i>
              ) : (
                <i className="far fa-eye"></i>
              )}
            </div>
          </div>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              style={{
                color: "white",
                width: "405px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
            <div
              style={{
                marginRight: 10,
                cursor: "pointer",
                position: "absolute",
                color: "red",
                display: "inline",
                marginTop: 10,
                right: 10,
              }}
              onClick={handleTogglePassword}
            >
              {showPassword ? (
                <i className="far fa-eye-slash"></i>
              ) : (
                <i className="far fa-eye"></i>
              )}
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <input
              type="text"
              style={{
                width: "405px",
                height: "48px",
                padding: "11px 16px 13px 16px",
                borderRadius: "8px",
                border: "1px solid #727288",
                background: "#2B2B3F",
              }}
            />
          </div>
        </div>

        <div>
          <div
            style={{
              width: "367px",
              height: "48px",
              top: "860px",
              left: "772px",
              gap: "32px",
              position: "absolute",
            }}
          >
            <button
              className="butoon"
              style={{
                color: "#FF7506",
                backgroundColor: "transparent",
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
                marginLeft: "16px",
              }}
              data-bs-dismiss="modal"
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemThietBiMoi;
