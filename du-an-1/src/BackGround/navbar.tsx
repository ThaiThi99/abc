import React, { useState } from "react";

function Navbar() {
  const [language, setLanguage] = useState("vi");

  return (
    <>
      <div>
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
            <p
              style={{
                width: "84px",
                height: "17px",
                left: "41px",
                fontFamily: "Montserrat",
                fontSize: "14px",
                letterSpacing: "0.015em",
                textAlign: "center",
                marginTop: "2px",
                position: "absolute",
              }}
            >
              Kho bài hát
            </p>
          </div>
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
            <p
              style={{
                width: "84px",
                height: "17px",
                left: "41px",
                fontFamily: "Montserrat",
                fontSize: "14px",
                letterSpacing: "0.015em",
                textAlign: "center",
                marginTop: "2px",
                position: "absolute",
              }}
            >
              Playlist
            </p>
          </div>
          <div
            style={{
              width: "170px",
              height: "72px",
              marginTop: "24px",
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
            <p
              style={{
                width: "84px",
                height: "17px",
                left: "41px",
                fontFamily: "Montserrat",
                fontSize: "14px",
                letterSpacing: "0.015em",
                textAlign: "center",
                marginTop: "2px",
                position: "absolute",
              }}
            >
              Lập lịch phát
            </p>
          </div>
          <div
            style={{
              width: "170px",
              height: "72px",
              marginTop: "24px",
            }}
          >
            <img
              src="images/quanly.png"
              alt=""
              style={{
                width: "32px",
                height: "32px",
                margin: "12px 69px 0px 69px",
              }}
            />
            <p
              style={{
                width: "84px",
                height: "17px",
                left: "41px",
                fontFamily: "Montserrat",
                fontSize: "14px",
                letterSpacing: "0.015em",
                textAlign: "center",
                marginTop: "2px",
                position: "absolute",
              }}
            >
              Quản lý
            </p>
          </div>
          <div
            style={{
              width: "170px",
              height: "72px",
              marginTop: "24px",
            }}
          >
            <img
              src="images/doanhthu.png"
              alt=""
              style={{
                width: "32px",
                height: "32px",
                margin: "12px 69px 0px 69px",
              }}
            />
            <p
              style={{
                width: "84px",
                height: "17px",
                left: "41px",
                fontFamily: "Montserrat",
                fontSize: "14px",
                letterSpacing: "0.015em",
                textAlign: "center",
                marginTop: "2px",
                position: "absolute",
              }}
            >
              Doanh thu
            </p>
          </div>
          <div
            style={{
              width: "170px",
              height: "72px",
              marginTop: "24px",
            }}
          >
            <img
              src="images/Setting.png"
              alt=""
              style={{
                width: "32px",
                height: "32px",
                margin: "12px 69px 0px 69px",
              }}
            />
            <p
              style={{
                width: "84px",
                height: "17px",
                left: "41px",
                fontFamily: "Montserrat",
                fontSize: "14px",
                letterSpacing: "0.015em",
                textAlign: "center",
                marginTop: "2px",
                position: "absolute",
              }}
            >
              Cài đặt
            </p>
          </div>
          <div
            style={{
              width: "170px",
              height: "72px",
              marginTop: "24px",
            }}
          >
            <img
              src="images/Support.png"
              alt=""
              style={{
                width: "32px",
                height: "32px",
                margin: "12px 69px 0px 69px",
              }}
            />
            <p
              style={{
                width: "84px",
                height: "17px",
                left: "41px",
                fontFamily: "Montserrat",
                fontSize: "14px",
                letterSpacing: "0.015em",
                textAlign: "center",
                marginTop: "2px",
                position: "absolute",
              }}
            >
              Hỗ trợ
            </p>
          </div>
        </div>
        <div
          style={{
            width: "1749px",
            height: "80px",
            left: "171px",
            position: "fixed",
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
                  // backgroundImage: "url(images/Frame.png)",
                  // backgroundRepeat: "no-repeat",
                  // backgroundPosition: "left center",
                  // paddingLeft: "30px",
                  background: "#1E1E2E",
                }}
                value="vi"
              >
                Tiếng Việt
              </option>
              <option
                style={{
                  // backgroundImage: "url('images/ENG.svg')",
                  // backgroundRepeat: "no-repeat",
                  // backgroundPosition: "left center",
                  // paddingLeft: "30px",
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
}

export default Navbar;
