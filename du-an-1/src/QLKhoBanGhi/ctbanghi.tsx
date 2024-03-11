import { useLocation } from "react-router-dom";
import Navbar1 from "../BackGround/navbar1";
import "../cssne/khobangi.css";

const CTBanGhi = () => {
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
              Kho bản ghi{" "}
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Cập nhật thông tin
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
              Bản ghi - Mất em
            </p>
          </div>

          <div className="khungt">
            <div className="khugne">
              <a href="/suatt" style={{ textDecoration: "none" }}>
                <img src="images/no.png" alt="sua" className="icon1" />
                <div className="texttt">Xóa bản ghi</div>
              </a>
            </div>
          </div>

          <div
            style={{
              width: "570px",
              height: "476px",
              top: "186px",
              left: "291px",
              borderRadius: "8px",
              background: "#2B2B3F",
              position: "absolute",
            }}
          >
            <p className="ttbg4">Thông tin bản ghi</p>
            <div className="khunghinh4">
              <img src="images/hoa8.png" alt="" className="hoa84" />
              <div className="mayanh84">
                <img src="images/mayanh.png" alt="" />
              </div>
            </div>
            <img
              src="images/nhacne.png"
              alt=""
              style={{
                width: "32px",
                height: 32,
                top: 236,
                left: 217,
                padding: "4px 2.67px 4px 2.67px",
                position: "absolute",
              }}
            />
            <div
              style={{
                opacity: "70%",
                color: "#ffffff",
                width: 98,
                height: 24,
                top: 242,
                left: 257,
                position: "absolute",
              }}
            >
              Matem.mp3
            </div>

            <div
              style={{
                top: 292,
                left: 24,
                width: 137,
                position: "absolute",
              }}
              className="kieuchu4"
            >
              <span>Ngày thêm:</span> <br />
              <span style={{ marginTop: 16 }}>Người tải lên:</span>
              <br />
              <span style={{ marginTop: 16 }}>Người duyệt:</span>
              <br />
              <br />
              <span style={{ marginTop: 40 }}>Ngày phê duyệt:</span>
            </div>
            <div
              style={{
                top: 292,
                left: 385,
                width: 163,
                position: "absolute",
                opacity: "70%",
                textAlign: "right",
              }}
              className="kieuchu4"
            >
              <span>07/04/2021 - 17:45:30</span>
              <br />
              <span style={{ marginTop: 16 }}>Super Admin</span>
              <br />
              <span style={{ marginTop: 16 }}>Hệ thống</span> <br />
              <span style={{ marginTop: 16 }}>(Tự động phê duyệt)</span>
              <br />
              <span style={{ marginTop: 16 }}>07/04/2021 - 17:45:50</span>{" "}
              <br />
            </div>
          </div>

          <div
            style={{
              width: "570px",
              height: "258px",
              top: "686px",
              left: "291px",
              borderRadius: "8px",
              background: "#2B2B3F",
              position: "absolute",
            }}
          >
            <p className="ttbg4">Thông tin ủy quyền</p>
            <div
              style={{
                top: 93,
                left: 24,
                width: 177,
                position: "absolute",
              }}
              className="kieuchu4"
            >
              <span>Số hợp đồng:</span> <br />
              <span style={{ marginTop: 16 }}>Ngày nhận ủy quyền:</span>
              <br />
              <span style={{ marginTop: 16 }}>Ngày hết hạn:</span>
              <br />
              <span style={{ marginTop: 16 }}>Trạng thái:</span>
            </div>
            <div
              style={{
                top: 93,
                left: 385,
                width: 163,
                position: "absolute",
                opacity: "70%",
                textAlign: "right",
              }}
              className="kieuchu4"
            >
              <span>BH123</span>
              <br />
              <span style={{ marginTop: 16 }}>01/05/2021</span>
              <br />
              <span style={{ marginTop: 16 }}>01/08/2025</span> <br />
            </div>
            <div
              style={{
                top: 165,
                left: 441,
                width: 105,
                height: 20,
                position: "absolute",
                opacity: "70%",
                textAlign: "right",
              }}
              className="kieuchu4"
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#347AFF",
                  marginTop: "8px",
                  position: "absolute",
                }}
              ></div>
              Còn thời hạn
            </div>
          </div>
          <div
            style={{
              width: "743px",
              height: "757px",
              top: "187px",
              left: "886px",
              borderRadius: "8px",
              background: "#2B2B3F",
              position: "absolute",
            }}
          >
            <p className="ttbg4" style={{ left: 247 }}>
              Chỉnh sửa thông tin
            </p>
            <div className="formt4">
              <div className="tebanghi4">
                Tên bản ghi:
                <span style={{ color: "red" }}>*</span>
              </div>
              <input type="text" value={"Mất em"} className="inputne4" />
            </div>

            <div className="formt4" style={{ top: "192px" }}>
              <div className="tebanghi4">
                Mã ISRC:
                <span style={{ color: "red" }}>*</span>
              </div>
              <input type="text" value={"KRA40105463"} className="inputne4" />
            </div>

            <div className="formt4" style={{ top: "296px" }}>
              <div className="tebanghi4">
                Ca sĩ:
                <span style={{ color: "red" }}>*</span>
              </div>
              <input
                type="text"
                value={"Noo Phước Thịnh"}
                className="inputne4"
              />
            </div>

            <div className="formt4" style={{ top: "400px" }}>
              <div className="tebanghi4">
                Tác giả:
                <span style={{ color: "red" }}>*</span>
              </div>
              <input type="text" value={"Chu Bin"} className="inputne4" />
            </div>

            <div className="formt4" style={{ top: "504px" }}>
              <div className="tebanghi4">
                Nhà sản xuất:
                <span style={{ color: "red" }}>*</span>
              </div>
              <input
                type="text"
                value={"Nguyễn Nam Minh Thụy"}
                className="inputne4"
              />
            </div>
            <div className="formt4" style={{ top: "608px" }}>
              <div className="tebanghi4">
                Thể loại:
                <span style={{ color: "red" }}>*</span>
              </div>
              <select name="" id="" className="inputne4">
                <option value="" style={{ height: "36px" }}>
                  Pop
                </option>
                <option value="">Ballad</option>
                <option value="">Rock</option>
                <option value="">EDM</option>
              </select>
            </div>
          </div>
          <div
            style={{
              width: "368px",
              height: "48px",
              top: "984px",
              left: "776px",
              gap: "32px",
              position: "absolute",
            }}
          >
            <button
              style={{
                width: "168px",
                height: "48px",
                padding: "12px 24px",
                borderRadius: "8px",
                border: "1px solid #FF7506",
                gap: "32px",
                color: "#FF7506",
              }}
            >
              Hủy
            </button>
            <button
              style={{
                width: "168px",
                height: "48px",
                padding: "12px 24px 12px 24px",
                borderRadius: "8px",
                border: "1px solid #FF7506",
                gap: "32px",
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
    </>
  );
};

export default CTBanGhi;
