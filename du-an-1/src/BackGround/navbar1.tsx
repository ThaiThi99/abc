import React, { useState } from "react";

const Navbar1 = () => {
  const [language, setLanguage] = useState("vi");
  const [dongmo, setdongmo] = useState(false);

  const handleDongMo = () => {
    setdongmo(!dongmo);
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

      <div style={{ display: dongmo ? "flex" : "none" }}>
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
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "1080px",
            background: "transparent",
            color: "white",
            zIndex: 9999,
            marginLeft: 170,
            position: "fixed",
          }}
          onClick={handleDongMo}
        ></div>
      </div>
    </>
  );
};

export default Navbar1;
