import React, { useState } from "react";
import Navbar from "../BackGround/navbar";
import "../cssne/khobangi.css";

interface DSNhac {
  id: number;
  tenlich: string;
  thoigian: string;
}

const DSLichPhat: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Xử lý logic tìm kiếm
    console.log("Search term:", searchTerm);
  };
  const [danhsachs, setdanhsachs] = useState<DSNhac[]>([
    {
      id: 1,
      tenlich: "Lịch phát số 1",
      thoigian: "22/05/2021 - 30/05/2021",
    },
    {
      id: 2,
      tenlich: "Lịch phát số 2",
      thoigian: "22/05/2021 - 30/05/2021",
    },
    {
      id: 3,
      tenlich: "Lịch phát số 3",
      thoigian: "22/05/2021 - 30/05/2021",
    },
    {
      id: 4,
      tenlich: "Lịch phát số 4",
      thoigian: "22/05/2021 - 30/05/2021",
    },
    {
      id: 5,
      tenlich: "Lịch phát số 1",
      thoigian: "22/05/2021 - 30/05/2021",
    },
    {
      id: 6,
      tenlich: "Lịch phát số 1",
      thoigian: "22/05/2021 - 30/05/2021",
    },
    {
      id: 7,
      tenlich: "Lịch phát số 1",
      thoigian: "22/05/2021 - 30/05/2021",
    },
    {
      id: 8,
      tenlich: "Lịch phát số 1",
      thoigian: "22/05/2021 - 30/05/2021",
    },
  ]);

  const urlImage = `/images/`;

  return (
    <>
      <div className="thedau">
        <Navbar />
        <div className="ttcb4">Danh sách lịch phát</div>

        {/* icon menu */}

        {/* icon menu */}

        <div className="khungt" style={{ top: 189 }}>
          <div className="khugne">
            <a href="/suatt" style={{ textDecoration: "none" }}>
              <img src="images/congfile.png" alt="sua" className="icon1" />
              <div className="texttt">
                Thêm lịch <br /> Phát
              </div>
            </a>
          </div>
        </div>
        <div
          style={{
            width: 1541,
            height: 882,
            position: "absolute",
            top: 158,
            left: 229,
            padding: "16px 24px",
            borderRadius: 16,
            gap: 56,
            backgroundColor: "#2F2F41B2",
          }}
        >
          <table style={{ height: "fit-content" }}>
            <thead style={{ color: "#FFAC69" }}>
              <tr style={{ textAlign: "left", height: 48 }}>
                <th style={{ width: "110px" }}>STT</th>
                <th style={{ width: "610px" }}>Tên lịch</th>
                <th style={{ width: "517px" }}>Thời gian phát</th>
                <th style={{ width: "130px" }}></th>
                <th style={{ width: "126px" }}></th>
              </tr>
            </thead>
            <tbody style={{ color: "#FFFFFF" }}>
              {danhsachs.map((danhsach) => (
                <tr style={{ height: 47 }}>
                  <td>{danhsach.id}</td>
                  <td>{danhsach.tenlich}</td>
                  <td>{danhsach.thoigian}</td>

                  <td style={{ width: "130px", textAlign: "center" }}>
                    <a
                      style={{ color: "#FF7506" }}
                      href="/ChiTiepHopDongKhaiThac"
                    >
                      Xem chi tiết
                    </a>
                  </td>
                  <td style={{ width: "126px", textAlign: "center" }}>
                    <a style={{ color: "#FF4747" }} href="/SaoChepHopDong">
                      Xóa
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            style={{
              width: "fit-content",
              maxWidth: "1485px",
              height: "fit-content",
              minHeight: "32px",
              display: "flex",
              justifyContent: "space-between",
              gap: "8px",
              marginTop: 371,
            }}
          >
            <div
              style={{
                width: "max-content",
                maxWidth: "279.82px",
                height: "fit-content",
                minHeight: "32px",
                color: "#F5F5FF",
              }}
            >
              Hiển thị
              <div style={{ display: "inline-flex" }}>
                <div
                  style={{
                    width: "48.37px",
                    height: "32px",
                    borderRadius: "4px",
                    margin: "0px 8px 0px 8px",
                    border: "1px solid #FF7506",
                    background: "#2B2B3F",
                    color: "#FFFFFF",
                    fontFamily: "Montserrat",
                    fontSize: "16px",
                    fontWeight: "600",
                    letterSpacing: "-0.002em",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  13
                </div>
              </div>
              hàng trong mỗi trang
            </div>

            <div
              style={{
                width: "203px",
                height: "26px",
                position: "absolute",
                right: 50,
                color: "#F5F5FF",
              }}
              className="mao"
            >
              <a href="/#" className="sott4">
                &lt;
              </a>
              <a href="/#" className="sott4">
                1
              </a>
              <a href="/#" className="sott44">
                2
              </a>
              <a href="/#" className="sott4">
                3
              </a>
              <a href="/#" className="sott4">
                ...
              </a>
              <a href="/#" className="sott4">
                100
              </a>
              <a href="/#" className="sott4">
                &gt;
              </a>
            </div>
          </div>
        </div>
        {/* showModal */}
      </div>
    </>
  );
};
export default DSLichPhat;
