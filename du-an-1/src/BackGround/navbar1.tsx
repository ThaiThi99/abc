import React from "react";
const Navbar1 = () => {
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
        }}
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
    </>
  );
};

export default Navbar1;
