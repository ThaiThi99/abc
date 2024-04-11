import { useState } from "react";
import Navbar1 from "../BackGround/navbar1";

const ChinhSuaTTND = () => {
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
              Quản lý
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Đơn vị sử dụng
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Chi tiết
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Thông tin người dùng
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Chỉnh sửa thông tin
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
              Thông tin người dùng
            </p>
          </div>
        </div>
        <div
          style={{
            width: "142px",
            position: "absolute",
            top: "213px",
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
            }}
          >
            Tên người dùng <span style={{ color: "red" }}> *</span>
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
            Email <span style={{ color: "red" }}> *</span>
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
              marginBottom: 104,
            }}
          >
            Vai trò <span style={{ color: "red" }}> *</span>
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
        <div style={{ top: "202px", left: "246px", position: "absolute" }}>
          <div>
            <input
              type="text"
              defaultValue={"Nguyen Van A"}
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
          </div>
          <div style={{ margin: "24px 0 24px" }}>
            <input
              type="email"
              defaultValue={"nguyenvana@gmail.com"}
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
          </div>
          <div>
            <select
              style={{
                width: "256px",
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
                QA
              </option>
              <option value="super">Super Admin</option>
              <option value="Group Admin">Group Admin</option>
              <option value="Sub - user">Sub - user</option>

              <option value="Content manager">Content manager</option>
            </select>
          </div>
        </div>

        <div
          style={{
            width: "202px",
            position: "absolute",
            top: "213px",
            left: "824px",
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
            Trạng thái người dùng:<span style={{ color: "red" }}> *</span>
          </div>
        </div>

        <div style={{ top: "202px", left: "1037px", position: "absolute" }}>
          <div>
            <input
              type="text"
              defaultValue={"nguyenvana@gmail.com"}
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
          </div>
          <div style={{ margin: "24px 0 24px" }}>
            <input
              defaultValue={"12345678"}
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
              defaultValue={"12345678"}
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
                marginTop: 10,
                display: "inline",
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
            <div
              style={{ color: "white", display: "inline-block" }}
              className="form-check"
            >
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDisabled"
                id="flexRadioDisabled"
              />
              <label className="form-check-label" htmlFor="flexRadioDisabled">
                Đã kích hoạt
              </label>
            </div>
            <div
              style={{
                color: "white",
                display: "inline-block",
                marginLeft: 115,
              }}
              className="form-check"
            >
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDisabled"
                id="flexRadioDisabled"
              />
              <label className="form-check-label" htmlFor="flexRadioDisabled">
                Ngưng kích hoạt
              </label>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              width: "367px",
              height: "48px",
              top: "540px",
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

export default ChinhSuaTTND;
