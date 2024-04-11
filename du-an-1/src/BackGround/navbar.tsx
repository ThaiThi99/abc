import React, { useState } from "react";
import "../cssne/header.css";

const Navbar = () => {
  const [language, setLanguage] = useState("vi");
  const [isHovered, setIsHovered] = useState(false);

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
      <div style={{ position: "relative", zIndex: 9999, display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "170px",
            height: "1080px",
            background: "#020220",
            color: "white",
            top: "-8251px",
            left: "-3190px",
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
            width: "1749px",
            height: "80px",
            left: "171px",
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: "9999",
          }}
        >
          <div>
            <select
              id="language"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              style={{
                width: "143px",
                height: "40px",
                top: "24px",
                left: "1375px",
                padding: "8px 4px 8px 8px",
                borderRadius: "4px",
                border: "1px solid #C8C8DB",
                gap: "8px",
                color: "#C8C8DB",
                backgroundColor: "transparent",
                position: "relative",
                background: "#1E1E2E",
              }}
            >
              <option
                style={{
                  background: "#1E1E2E",
                }}
                value="vi"
              >
                Tiếng Việt
              </option>
              <option
                style={{
                  background: "#1E1E2E",
                }}
                value="en"
              >
                English
              </option>
              <option style={{ background: "#1E1E2E" }} value="fr">
                French
              </option>
            </select>
          </div>
          <div
            style={{
              width: "132px",
              height: "40px",
              top: "24px",
              left: "1542px",
              gap: "8px",
              marginRight: "24px",
              position: "absolute",
              // marginTop: "24px",
            }}
          >
            <a href="/trang1" style={{ textDecoration: "none" }}>
              <img
                src="images/admin.jpg"
                alt="mdo"
                style={{
                  width: "40px",
                  height: "40.58px",
                  borderRadius: "200px",

                  position: "absolute",
                }}
              />
              <div
                style={{
                  width: "74px",
                  height: "24px",
                  left: "5px",
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: 600,
                  letterSpacing: "-0.002em",
                  textAlign: "center",
                  color: "#F5F5FF",
                  marginLeft: "35px",
                  position: "relative",
                  textDecoration: "none",
                }}
              >
                Ng.Tuyết
              </div>
              <div
                style={{
                  width: "49px",
                  height: "17px",
                  left: "6px",
                  fontFamily: "Montserrat",
                  fontSize: "14px",
                  fontWeight: 500,
                  letterSpacing: "0.015em",
                  textAlign: "center",
                  color: "#B65100",
                  marginLeft: "35px",
                  position: "relative",
                  textDecoration: "none",
                }}
              >
                Admin
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
