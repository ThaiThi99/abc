import { relative } from "path";
import React, { useState } from "react";
import "../cssne/header.css";
const Navbar1 = () => {
  const [language, setLanguage] = useState("vi");
  const [dongmo, setdongmo] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleDongMo = () => {
    setdongmo(!dongmo);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [isHovered1, setIsHovered1] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };
  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };
  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };
  return (
    <>
      <div
        style={{
          width: 1749,
          height: 80,
          left: 171,
          position: "absolute",
          top: 10,
          right: 10,
          zIndex: 9999,
        }}
      >
        <div>
          <select
            id="language"
            style={{
              width: 143,
              height: 40,
              top: 24,
              left: 1375,
              padding: "8px 4px 8px 8px",
              borderRadius: 4,
              border: "1px solid rgb(200, 200, 219)",
              gap: 8,
              color: "rgb(200, 200, 219)",
              background: "rgb(30, 30, 46)",
              position: "relative",
            }}
          >
            <option value="vi" style={{ background: "rgb(30, 30, 46)" }}>
              Tiếng Việt
            </option>
            <option value="en" style={{ background: "rgb(30, 30, 46)" }}>
              English
            </option>
            <option value="fr" style={{ background: "rgb(30, 30, 46)" }}>
              French
            </option>
          </select>
        </div>
        <div
          style={{
            width: 132,
            height: 40,
            top: 24,
            left: 1542,
            gap: 8,
            marginRight: 24,
            position: "absolute",
          }}
        >
          <a href="/trang1" style={{ textDecoration: "none" }}>
            <img
              src="images/admin.jpg"
              alt="mdo"
              style={{
                width: 40,
                height: "40.58px",
                borderRadius: 200,
                position: "absolute",
              }}
            />
            <div
              style={{
                width: 74,
                height: 24,
                left: 5,
                fontFamily: "Montserrat",
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "-0.002em",
                textAlign: "center",
                color: "rgb(245, 245, 255)",
                marginLeft: 35,
                position: "relative",
                textDecoration: "none",
              }}
            >
              Ng.Tuyết
            </div>
            <div
              style={{
                width: 49,
                height: 17,
                left: 6,
                fontFamily: "Montserrat",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.015em",
                textAlign: "center",
                color: "rgb(182, 81, 0)",
                marginLeft: 35,
                position: "relative",
                textDecoration: "none",
              }}
            >
              Admin
            </div>
          </a>
        </div>
      </div>
      <div
        style={{
          borderRadius: "0px 24px 24px 0px",
          backgroundColor: "#020220",
          display: !dongmo ? "flex" : "none",
        }}
        onClick={handleDongMo}
      >
        <div
          style={{
            width: "40px",
            height: "1080px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#B65100",
            fontSize: 24,
          }}
        >
          &gt;
        </div>
      </div>

      <div
        style={{
          display: dongmo ? "flex" : "none",
          width: "100vw",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "170px",
            height: "1080px",
            background: "#020220",
            color: "white",
            position: "relative",
            zIndex: 9999,
          }}
        >
          <img
            src="images/logo.png"
            alt=""
            style={{
              width: "96px",
              height: "96px",
              margin: "39px 21px 0px 34px",
            }}
          />
          <a href="/khobanghi">
            <div
              style={{
                width: "170px",
                height: "72px",
                marginTop: "110px",
              }}
            >
              <img
                src="images/banghi.png"
                alt=""
                style={{
                  width: "32px",
                  height: "32px",
                  margin: "12px 69px 0px 69px",
                }}
              />
              <p className="kieuchu">Kho bản ghi</p>
            </div>
          </a>
          <a href="/dsplaylist">
            <div
              style={{
                width: "170px",
                height: "72px",
                marginTop: "24px",
              }}
            >
              <img
                src="images/Playlist.png"
                alt=""
                style={{
                  width: "32px",
                  height: "32px",
                  margin: "12px 69px 0px 69px",
                }}
              />
              <p className="kieuchu">Playlist</p>
            </div>
          </a>
          <a href="/dslichphat">
            <div>
              <div
                style={{
                  width: "170px",
                  height: "72px",
                  marginTop: "24px",
                  position: "relative",
                }}
              >
                <img
                  src="images/calendar.png"
                  alt=""
                  style={{
                    width: "32px",
                    height: "32px",
                    margin: "12px 69px 0px 69px",
                  }}
                />
                <p className="kieuchu">Lập lịch phát</p>
              </div>
            </div>
          </a>

          <div onMouseLeave={handleMouseLeave}>
            <div
              style={{
                width: "170px",
                height: "72px",
                marginTop: "24px",
                position: "relative",
              }}
              onMouseEnter={handleMouseEnter}
            >
              <span>
                <i className="bi bi-three-dots-vertical icon10"></i>
              </span>
              <img
                src="images/quanly.png"
                alt=""
                style={{
                  width: "32px",
                  height: "32px",
                  margin: "12px 69px 0px 69px",
                }}
              />
              <p className="kieuchu">Quản lý</p>
              {isHovered && (
                <div className="heme">
                  <a href="/DShopdong" className="thea">
                    <option value="option1" className="priority-option">
                      Quản lý hợp đồng
                    </option>
                  </a>
                  <a href="/dsthietbi" className="thea">
                    <option className="priority-option" value="option2">
                      Quản lý thiết bị
                    </option>
                  </a>
                  <a href="/dsdoitacuq" className="thea">
                    <option value="option3" className="priority-option">
                      Đơn vị uỷ quyền
                    </option>
                  </a>
                  <a href="/dsdonvisd" className="thea">
                    <option value="option3" className="priority-option">
                      Đơn vị uỷ quyền
                    </option>
                  </a>
                </div>
              )}
            </div>
          </div>
          <div onMouseLeave={handleMouseLeave2}>
            <div
              style={{
                width: "170px",
                height: "72px",
                marginTop: "24px",
                position: "relative",
              }}
              onMouseEnter={handleMouseEnter2}
            >
              <span>
                <i className="bi bi-three-dots-vertical icon10"></i>
              </span>
              <img
                src="images/doanhthu.png"
                alt=""
                style={{
                  width: "32px",
                  height: "32px",
                  margin: "12px 69px 0px 69px",
                }}
              />
              <p className="kieuchu">Doanh thu</p>
              {isHovered2 && (
                <div className="heme" style={{ height: 119 }}>
                  <a href="/baocaodoanhthu" className="thea">
                    <option value="option1" className="priority-option">
                      Báo cáo doanh thu
                    </option>
                  </a>
                  <a href="/lichsudoisoat" className="thea">
                    <option className="priority-option" value="option2">
                      Lịch sử đối soát
                    </option>
                  </a>
                  <a href="/phanphoidoanhthu" className="thea">
                    <option value="option3" className="priority-option">
                      Phân phối doanh thu
                    </option>
                  </a>
                </div>
              )}
            </div>
          </div>
          <div onMouseLeave={handleMouseLeave1}>
            <div
              style={{
                width: "170px",
                height: "72px",
                marginTop: "24px",
                position: "relative",
              }}
              onMouseEnter={handleMouseEnter1}
            >
              <span>
                <i className="bi bi-three-dots-vertical icon10"></i>
              </span>
              <img
                src="images/Setting.png"
                alt=""
                style={{
                  width: "32px",
                  height: "32px",
                  margin: "12px 69px 0px 69px",
                }}
              />
              <p className="kieuchu">Cài đặt</p>
              {isHovered1 && (
                <div className="heme" style={{ height: 193 }}>
                  <a href="/dsnguoidung" className="thea">
                    <option value="option1" className="priority-option">
                      Phân quyền người dùng
                    </option>
                  </a>
                  <a href="/caidatcauhinh" className="thea">
                    <option className="priority-option" value="option2">
                      Cấu hình
                    </option>
                  </a>
                  <a href="/loaihopdong" className="thea">
                    <option value="option3" className="priority-option">
                      Quản lý hợp đồng
                    </option>
                  </a>
                  <a href="/tttacpham" className="thea">
                    <option value="option3" className="priority-option">
                      Thông tin tác phẩm
                    </option>
                  </a>
                  <a href="/caidathethong" className="thea">
                    <option value="option3" className="priority-option">
                      Chu kỳ đối soát
                    </option>
                  </a>
                </div>
              )}
            </div>
          </div>
          <div onMouseLeave={handleMouseLeave3}>
            <div
              style={{
                width: "170px",
                height: "72px",
                marginTop: "24px",
                position: "relative",
              }}
              onMouseEnter={handleMouseEnter3}
            >
              <span>
                <i className="bi bi-three-dots-vertical icon10"></i>
              </span>
              <img
                src="images/Support.png"
                alt=""
                style={{
                  width: "32px",
                  height: "32px",
                  margin: "12px 69px 0px 69px",
                }}
              />
              <p className="kieuchu">Hỗ trợ</p>
              {isHovered3 && (
                <div className="heme" style={{ height: 119 }}>
                  <a href="/hdsudung" className="thea">
                    <option value="option1" className="priority-option">
                      Hướng dẫn sử dụng
                    </option>
                  </a>
                  <a href="/taiapp" className="thea">
                    <option className="priority-option" value="option2">
                      Tải app
                    </option>
                  </a>
                  <a href="/feedback" className="thea">
                    <option value="option3" className="priority-option">
                      Feedback
                    </option>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "1080px",
            background: "transparent",
            color: "white",
            zIndex: 2000,
            position: "fixed",
            marginLeft: 170,
          }}
          onClick={handleDongMo}
        ></div>
      </div>
    </>
  );
};

export default Navbar1;
