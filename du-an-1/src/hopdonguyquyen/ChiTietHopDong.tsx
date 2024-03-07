import { useLocation } from "react-router-dom";
import Navbar1 from "../BackGround/navbar1";
import "../cssne/ba.css";

const ChiTietHopDong = () => {
  const location = useLocation();
  let user = location.state && location.state.user;

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
              Quản lý hợp đồng
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Chi Tiết
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
              Chi tiết hợp đồng uỷ quyền bài hát - BH123
            </p>
          </div>
          <div
            style={{
              width: "fit-content",
              height: "fit-content",
              position: "absolute",
              top: 186,
              marginTop: 10,
              left: 78,
              borderRadius: 24,
              border: "1px solid #B65100",
              display: "flex",
            }}
          >
            <div
              style={{
                width: 211,
                height: 40,
                borderRadius: 24,
                gap: 10,
                backgroundColor: "#B65100",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "-0.002em",
                  textAlign: "center",
                  marginTop: 13,
                }}
              >
                Thông tin hợp đồng
              </p>
            </div>
            <div
              style={{
                width: 207,
                height: 40,
                borderRadius: 24,
                gap: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "-0.002em",
                  textAlign: "center",
                  marginTop: 13,
                }}
              >
                Tác phẩm ủy quyền
              </p>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "250px",
              left: "81px",
              width: "120px",
              height: "24px",
              color: "white",
            }}
          >
            Số hợp đồng:
            <br />
            Tên hợp đồng:
            <br />
            Ngày hiệu lực:
            <br />
            Ngày hết hạn:
            <br />
            Tình trạng:
          </div>

          <div
            style={{
              position: "absolute",
              top: "250px",
              left: "220px",
              width: "315px",
              height: "24px",
              opacity: 0.7,
              color: "white",
            }}
          >
            BH123
            <br />
            Hợp đồng uỷ quyền tác phẩm âm nhạc
            <br />
            01/05/2021
            <br />
            01/12/2021
            <br />
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#347AFF",
                marginRight: "5px",
                display: "inline-block",
                marginBottom: "1.5px",
              }}
            ></div>
            Còn thời hạn
          </div>

          <div
            style={{
              position: "absolute",
              top: "250px",
              left: "721px",
              width: "119px",
              height: "24px",
              color: "white",
            }}
          >
            Đính kèm tệp:
          </div>

          <div
            style={{
              width: 208,
              height: 24,
              top: 250,
              left: 868,
              position: "absolute",
              color: "white",
            }}
          >
            <i style={{ marginRight: 8 }} className="fa-solid fa-file-word"></i>
            hetthuongcannho.doc
            <br />
            <i style={{ marginRight: 8 }} className="fa-solid fa-file-word"></i>
            hetthuongcannho.doc
          </div>
          <div
            style={{
              position: "absolute",
              color: "white",
              width: 273,
              height: 184,
              top: 250,
              left: 1321,
            }}
          >
            <span style={{ color: "#FFAC69" }}>
              <i
                style={{ marginRight: 8 }}
                className="fa-solid fa-circle-info"
              ></i>
              Mức nhuận bút
            </span>
            <br />
            Quyền tác giả:
            <span style={{ left: 240, position: "absolute" }}>0%</span>
            <br />
            Quyền liên quan: <br />
            Quyền của người biểu diễn:
            <span style={{ left: 240, position: "absolute" }}>50%</span>
            <br />
            Quyền của nhà sản xuất:
            <span style={{ left: 240, position: "absolute" }}>50%</span>
            <br />
            (Bản ghi/video)
          </div>
          <div
            style={{
              width: "290px",
              height: "24px",
              position: "absolute",
              top: 521,
              left: "78px",
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFAC69",
            }}
          >
            Thông tin pháp nhân uỷ quyền
          </div>
          <div
            style={{
              height: 24,
              top: 565,
              left: 81,
              position: "absolute",
              color: "#FFFFFF",
            }}
          >
            Pháp nhân uỷ quyền:
            <span style={{ left: 267, position: "absolute", width: 114 }}>
              Cá nhân
            </span>
            <br />
            Tên người uỷ quyền:
            <span style={{ left: 267, position: "absolute", width: 114 }}>
              Nguyễn Văn A
            </span>
            <br />
            Ngày sinh:
            <span style={{ left: 267, position: "absolute", width: 114 }}>
              10/01/1984
            </span>
            <br />
            Giới tính:
            <span style={{ left: 267, position: "absolute", width: 114 }}>
              Nam
            </span>
            <br />
            Quốc tịch:
            <span style={{ left: 267, position: "absolute", width: 114 }}>
              Việt Nam
            </span>
            <br />
            Số điện thoại:
            <span style={{ left: 267, position: "absolute", width: 137 }}>
              (+84) 345 678 901
            </span>
          </div>
          <div
            style={{
              height: 24,
              top: 565,
              left: 721,
              position: "absolute",
              color: "#FFFFFF",
            }}
          >
            Số CMND/ CCCD:
            <br />
            Ngày cấp:
            <br />
            Nơi cấp:
            <br />
            Mã số thuế:
            <br />
            Nơi cư trú:
          </div>
          <div
            style={{
              height: 24,
              top: 565,
              color: "#FFFFFF",
              left: 870,
              position: "absolute",
              width: 293,
            }}
          >
            123456789012
            <br />
            10/07/2011
            <br />
            Tp.HCM, Việt Nam
            <br />
            92387489
            <br />
            69/53, Nguyễn Gia Trí, Phường 25,
            <br />
            Quận Bình Thạnh, Thành phố Hồ
            <br />
            Chí Minh
          </div>
          <div
            style={{
              height: 24,
              top: 565,
              color: "#FFFFFF",
              left: 1321,
              position: "absolute",
              width: 181,
            }}
          >
            Email:
            <br />
            Tài khoản đăng nhập:
            <br />
            Mật khẩu:
            <br />
            Số tài khoản:
            <br />
            Ngân hàng:
          </div>
          <div
            style={{
              height: 24,
              top: 565,
              color: "#FFFFFF",
              left: 1511,
              position: "absolute",
              width: 181,
            }}
          >
            nguyenvana@gmail.com
            <br />
            nguyenvana@gmail.com
            <br />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <br />
            1231123312211223
            <br />
            ACB - Ngân hàng Á Châu
          </div>

          <div className="khung2">
            <div className="khung1">
              <a href="/suathongtin" style={{ textDecoration: "none" }}>
                <img src="images/sua.png" alt="sua" className="icon" />
                <div className="textt">
                  Chỉnh sửa <br /> hợp đồng
                </div>
              </a>
            </div>
            <div className="khung1">
              <div
              // data-bs-toggle="modal" data-bs-target="#exampleModal"
              >
                <img src="images/hd.png" alt="doimk" className="icon" />
                <div className="textt">
                  Gia hạn <br /> hợp đồng
                </div>
              </div>
            </div>
            <div className="khung1">
              <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="images/no.png" alt="doimk" className="icon" />
                <div className="textt">
                  Hủy hợp <br />
                  đồng
                </div>
              </div>
            </div>
          </div>
          {/* showModal     */}
        </div>
      </div>
    </>
  );
};

export default ChiTietHopDong;
