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
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTBanGhi;
