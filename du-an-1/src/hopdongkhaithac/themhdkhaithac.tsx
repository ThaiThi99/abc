import { useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar1 from "../BackGround/navbar1";
import "../cssne/ba.css";

const ThemHDKT = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const location = useLocation();
  let user = location.state && location.state.user;
  return (
    <>
      <div style={{ width: "100%", display: "flex" }}>
        <Navbar1 />
        <div
          style={{
            top: 86,
            left: 78,
            position: "absolute",
          }}
        >
          <a
            style={{ color: "#F5F5FF", textDecoration: "none", marginRight: 5 }}
            href="/#"
          >
            Quản lý
          </a>
          <span
            className="separator"
            style={{ color: "#FFAC69", marginRight: 5 }}
          >
            &gt;
          </span>
          <a
            style={{ color: "#F5F5FF", textDecoration: "none", marginRight: 5 }}
            href="/#"
          >
            Quản lý hợp đồng
          </a>
          <span
            className="separator"
            style={{ color: "#FFAC69", marginRight: 5 }}
          >
            &gt;
          </span>
          <a
            style={{ color: "#F5F5FF", textDecoration: "none", marginRight: 5 }}
            href="/#"
          >
            Chi Tiết
          </a>
          <span style={{ color: "#FFAC69", marginRight: 5 }}>&gt;</span>
          <a
            style={{ color: "#F5F5FF", textDecoration: "none", marginRight: 5 }}
            href="/#"
          >
            Chỉnh sửa thông tin
          </a>
        </div>

        <div className="hdqbh3">
          <p className="hdqbhh3">Thêm hợp đồng khai thác mới</p>
        </div>

        <div className="khd3">
          <div style={{ marginBottom: 40 }}>Số hợp đồng:</div>
          <div style={{ marginBottom: 40 }}> Tên hợp đồng:</div>
          <div style={{ marginBottom: 40 }}> Ngày hiệu lực:</div>
          <div style={{ marginBottom: 40 }}> Ngày hết hạn:</div>
        </div>

        <div
          style={{
            top: "202px",
            left: "237px",
            width: "374px",
            height: "24px",
          }}
          className="hdqbh3 "
        >
          <input className="ip3" />
          <input
            className="ip3"
            style={{
              width: "374px",
            }}
          />
          <input
            className="ip3"
            type="date"
            defaultValue="01/05/2021"
            style={{
              width: "155px",
            }}
          />
          <br />
          <input
            className="ip3"
            type="date"
            defaultValue="01/12/2021"
            style={{
              width: "155px",
            }}
          />
        </div>

        <div className="dkt3">Đính kèm tệp:</div>

        <div className="khungn33">
          <div
            style={{
              position: "relative",
              display: "inline-block",
              marginBottom: 16,
            }}
          >
            <input type="file" className="inputfile3" />
            <div className="imgfile3">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/tailen.png?alt=media&token=a56f0719-52ef-40a4-ab89-20eeaa2489a6"
                alt="tailen"
                className="khungdoc"
              />
              <span
                style={{ marginTop: 4, position: "absolute", marginLeft: 3 }}
              >
                Tải lên
              </span>
            </div>
          </div>
          <br />
          <i style={{ marginRight: 8 }} className="fa-solid fa-file-word"></i>
          hetthuongcannho.doc
          <br />
          <i
            style={{ marginRight: 8, marginTop: 12 }}
            className="fa-solid fa-file-word"
          ></i>
          hetthuongcannho.doc
        </div>

        <div
          style={{
            width: "125px",
            height: "24px",
            top: "213px",
            left: "1375px",
            gap: "4px",
            position: "absolute",
            color: "white",
          }}
        >
          Loại hợp đồng:
        </div>

        <div
          style={{
            width: "98px",
            height: "24px",
            top: "255px",
            left: "1375px",
            gap: "8px",
            position: "absolute",
            color: "white",
          }}
        >
          <input
            type="radio"
            name="loai"
            style={{
              display: "inline-block",
              width: "24px",
              height: "24px",
              padding: "5px",
              borderRadius: "20px",
              border: "2px solid #0B80EC",
              background: "#FFFFFF",
            }}
          />
          <span
            style={{ marginBottom: 15, marginLeft: 10, position: "absolute" }}
          >
            Trọn gói
          </span>
        </div>
        <div
          style={{
            width: "117px",
            top: "257px",
            left: "1515px",
            border: "1px solid #727288",
            transform: "rotate(90deg)",
            transformOrigin: "top left",
            position: "absolute",
          }}
        />
        <div
          style={{
            width: "130px",
            height: "48px",
            top: "255px",
            left: "1528px",
            position: "absolute",
            color: "white",
          }}
        >
          Giá trị hợp đồng <br />
          (VNĐ)
        </div>

        <input
          defaultValue={"214.500.000"}
          style={{
            color: "white",
            width: "169px",
            height: "48px",
            top: "255px",
            left: "1670px",
            padding: "11px 24px 13px 16px",
            borderRadius: "8px",
            position: "absolute",
            background: "#2B2B3F",
            border: "1px solid #727288",
          }}
        />

        <div
          style={{
            width: "130px",
            height: "48px",
            top: "319px",
            left: "1528px",
            position: "absolute",
            color: "white",
          }}
        >
          Giá trị phân phối <br />
          (VNĐ)/ngày
        </div>
        <input
          defaultValue={"1.500.000"}
          style={{
            color: "white",
            width: "169px",
            height: "48px",
            top: "319px",
            left: "1670px",
            padding: "11px 24px 13px 16px",
            borderRadius: "8px",
            position: "absolute",
            background: "#2B2B3F",
            border: "1px solid #727288",
          }}
        />

        <div
          style={{
            width: "130px",
            height: "48px",
            top: "391px",
            left: "1528px",
            position: "absolute",
            color: "white",
            opacity: "50%",
          }}
        >
          Giá trị lượt phát <br />
          (VNĐ)/ngày
        </div>
        <input
          style={{
            width: "169px",
            height: "48px",
            top: "391px",
            left: "1670px",
            padding: "11px 24px 13px 16px",
            borderRadius: "8px",
            position: "absolute",
            background: "#2B2B3F",
            border: "1px solid #727288",
            color: "white",
          }}
        />

        <div
          style={{
            width: "110px",
            height: "24px",
            top: "391px",
            left: "1375px",
            gap: "8px",
            position: "absolute",
            color: "white",
          }}
        >
          <input
            type="radio"
            name="loai"
            style={{
              display: "inline-block",
              width: "24px",
              height: "24px",
              padding: "5px",
              borderRadius: "20px",
              border: "2px solid #0B80EC",
              background: "#FFFFFF",
            }}
          />
          <span
            style={{ marginBottom: 15, marginLeft: 10, position: "absolute" }}
          >
            Lượt phát
          </span>
        </div>

        <hr className="hrr3" style={{ top: 462 }} />

        <div className="textttuq3" style={{ top: 494 }}>
          Thông tin pháp nhân uỷ quyền
        </div>

        <div
          style={{
            width: "234px",
            height: "24px",
            position: "absolute",
            top: "554px",
            left: "80px",
            color: "white",
          }}
        >
          <div style={{ marginBottom: 36 }}>Pháp nhân ủy quyền:</div>
          <div style={{ marginBottom: 40 }}>
            Tên người uỷ quyền:
            <span className="sao3">*</span>
          </div>
          <div style={{ marginBottom: 36 }}>
            Ngày sinh:
            <span className="sao3">*</span>
          </div>
          <div style={{ marginBottom: 36 }}>
            Giới tính:
            <span className="sao3">*</span>
          </div>
          <div style={{ marginBottom: 40 }}>
            Quốc tịch:
            <span className="sao3">*</span>
          </div>
          <div style={{ marginBottom: 36 }}>
            Số điện thoại: <span className="sao3">*</span>
          </div>
          <div className="chuthich3">
            <span
              style={{
                color: "#FF4747",
                marginTop: 4,
                marginRight: 3,
              }}
            >
              *
            </span>
            <div style={{ opacity: "50%" }}>
              là những trường thông tin bắt buộc
            </div>
          </div>
        </div>

        <div className="khungttpnuy3" style={{ top: 554 }}>
          <div style={{ marginBottom: 24 }}>
            <div className="radio3">
              <input type="radio" name="uyquyen" /> Cá nhân
            </div>
            <div
              className="radio3"
              style={{
                left: "147px",
                position: "absolute",
                marginRight: "8px",
              }}
            >
              <input type="radio" name="uyquyen" /> Tổ chức
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <input
              type="text"
              className="ip3"
              style={{
                width: "325px",
                margin: 0,
              }}
            />
          </div>
          <div style={{ marginBottom: 24 }}>
            <input
              type="date"
              className="ip3"
              style={{
                width: "155px",
                margin: 0,
              }}
            />
          </div>
          <div style={{ marginBottom: 24 }}>
            <div className="radio3">
              <input type="radio" name="gioitinh" /> Nam
            </div>
            <div
              className="radio3"
              style={{
                left: "147px",
                position: "absolute",
                marginRight: "8px",
              }}
            >
              <input type="radio" name="gioitinh" /> Nữ
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <select
              className="ip3"
              style={{
                width: "240px",
                margin: 0,
              }}
            >
              <option value="option1" selected>
                Việt Nam
              </option>
              <option value="option2">Hàn Quốc</option>
              <option value="option3">Nhật Bản</option>
            </select>
          </div>
          <div>
            <input
              type="tel"
              className="ip3"
              style={{
                width: "240px",
                margin: 0,
              }}
            />
          </div>
        </div>

        <div
          style={{
            width: "126px",
            position: "absolute",
            top: "554px",
            left: "750px",
            color: "white",
          }}
        >
          <div style={{ marginBottom: 40 }}>
            CMND/ CCCD:
            <span className="sao3">*</span>
          </div>
          <div style={{ marginBottom: 40 }}>
            Ngày cấp:
            <span className="sao3">*</span>
          </div>
          <div style={{ marginBottom: 39 }}>
            Nơi cấp:
            <span className="sao3">*</span>
          </div>
          <div style={{ marginBottom: 29 }}>Mã số thuế:</div>
          <div>Nơi cư trú:</div>
        </div>

        <div
          style={{
            width: "311px",
            position: "absolute",
            top: "554px",
            left: "900px",
            color: "white",
          }}
        >
          <div style={{ marginBottom: 16 }}>
            <input
              className="ip3"
              style={{
                width: "154px",
                margin: 0,
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <input
              type="date"
              className="ip3"
              style={{
                width: "155px",
                margin: 0,
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <input
              className="ip3"
              style={{
                width: "311px",
                margin: 0,
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <input
              className="ip3"
              style={{
                width: "311px",
                margin: 0,
              }}
            />
          </div>
          <div>
            <textarea
              style={{
                width: "311px",
                height: "96px",
              }}
              className="ip3"
            />
          </div>
        </div>

        <div
          style={{
            width: "140px",
            position: "absolute",
            top: "554px",
            left: "1351px",
            color: "white",
          }}
        >
          <div style={{ marginBottom: 40 }}>Email:</div>
          <div style={{ marginBottom: 40 }}>Tên đăng nhập:</div>
          <div style={{ marginBottom: 39 }}>
            Mật khẩu:
            <span className="sao3">*</span>
          </div>
          <div style={{ marginBottom: 41 }}>Số tài khoản:</div>
          <div>Ngân hàng:</div>
        </div>

        <div
          style={{
            width: "325px",
            top: "554px",
            left: "1515px",
            color: "white",
            position: "absolute",
          }}
        >
          <div style={{ marginBottom: 16 }}>
            <input
              style={{
                width: "325px",
                margin: 0,
              }}
              className="ip3"
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <input
              className="ip3"
              style={{
                width: "325px",
                margin: 0,
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <input
              className="ip3"
              style={{
                width: "325px",
                margin: 0,
              }}
            />
            <div
              style={{
                marginRight: 10,
                cursor: "pointer",
                display: "inline-block",
                position: "absolute",
                marginTop: 10,
                color: "#FF7506",
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
          <div style={{ marginBottom: 16 }}>
            <input
              className="ip3"
              style={{
                width: "325px",
                margin: 0,
              }}
            />
          </div>
          <div>
            <input
              className="ip3"
              style={{
                width: "325px",
                margin: 0,
              }}
            />
          </div>
        </div>

        <div className="nutbtn3" style={{ top: 972 }}>
          <button className="boooton3">Hủy</button>

          <button
            className="boooton3"
            style={{
              background: "#FF7506",
              color: "white",
              marginLeft: 40,
            }}
          >
            Lưu
          </button>
        </div>
      </div>
    </>
  );
};
export default ThemHDKT;
