import React, { useState } from "react";
import Navbar from "../BackGround/navbar";
import "../cssne/khobangi.css";

interface DSNhac {
  id: number;
  tentk: string;
  sohd: string;
}

const DSDoiTacUyQuyen: React.FC = () => {
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
      tentk: "Amy Ngọc",
      sohd: "phm_L@gmail.com",
    },
    {
      id: 2,
      tentk: "Amy Ngọc",
      sohd: "phm_L@gmail.com",
    },
    {
      id: 3,
      tentk: "Amy Ngọc",
      sohd: "phm_L@gmail.com",
    },
    {
      id: 4,
      tentk: "Amy Ngọc",
      sohd: "phm_L@gmail.com",
    },
    {
      id: 5,
      tentk: "Amy Ngọc",
      sohd: "phm_L@gmail.com",
    },
    {
      id: 6,
      tentk: "Amy Ngọc",
      sohd: "phm_L@gmail.com",
    },
    {
      id: 7,
      tentk: "Amy Ngọc",
      sohd: "phm_L@gmail.com",
    },
    {
      id: 8,
      tentk: "Amy Ngọc",
      sohd: "phm_L@gmail.com",
    },
    {
      id: 9,
      tentk: "Amy Ngọc",
      sohd: "phm_L@gmail.com",
    },
    {
      id: 10,
      tentk: "Amy Ngọc",
      sohd: "phm_L@gmail.com",
    },
    {
      id: 11,
      tentk: "Amy Ngọc",
      sohd: "phm_L@gmail.com",
    },
    {
      id: 12,
      tentk: "Amy Ngọc",
      sohd: "phm_L@gmail.com",
    },
    {
      id: 13,
      tentk: "Amy Ngọc",
      sohd: "phm_L@gmail.com",
    },
  ]);
  const handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    const updatedDanhsach = danhsachs.map((danhsach) => ({
      ...danhsach,
      isChecked: checked,
    }));
    setdanhsachs(updatedDanhsach);
  };

  const urlImage = `/images/`;

  return (
    <>
      <div className="thedau">
        <Navbar />
        <div
          style={{
            top: 86,
            left: 229,
            position: "absolute",
          }}
        >
          <a
            style={{
              color: "#F5F5FF",
              textDecoration: "none",
              marginRight: 5,
            }}
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
            style={{
              color: "#F5F5FF",
              textDecoration: "none",
              marginRight: 5,
            }}
            href="/#"
          >
            Đối tác ủy quyền
          </a>
        </div>
        <div className="ttcb4" style={{ top: 114, left: 229, width: 500 }}>
          Danh sách đối tác ủy quyền
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="timkiem4"
          style={{ top: 186 }}
        >
          <input
            type="text"
            placeholder="Tên bản ghi, ca sĩ,..."
            value={searchTerm}
            onChange={handleInputChange}
            className="input4"
          />
          <a type="submit" style={{ background: "#2B2B3F" }}>
            <img src="images/search.png" alt="" />
          </a>
        </form>
        {/* danh sach dropdown */}

        <div
          style={{
            width: 1611,
            position: "absolute",
            top: 258,
            left: 229,
            borderRadius: 16,
            gap: 56,
            backgroundColor: "#2F2F41B2",
          }}
        >
          <table
            style={{
              width: 1563,
              height: 770,
              margin: "16px 24px 104px 24px",
            }}
          >
            <thead style={{ color: "#FFAC69" }}>
              <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
                <th style={{ width: "78px" }}>STT</th>
                <th style={{ width: "241px" }}>Họ tên</th>
                <th style={{ width: "279px" }}>Tên đăng nhập</th>
                <th style={{ width: "279px" }}>Email</th>
                <th style={{ width: "154px" }}>Ngày hết hạn</th>
                <th style={{ width: "177.33px" }}>Số điện thoại</th>
                <th style={{ width: "177.33px" }}>Trạng thái</th>
                <th style={{ width: "177.33px" }}></th>
              </tr>
            </thead>
            <tbody
              style={{
                color: "#FFFFFF",
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                letterSpacing: "0.015em",
                textAlign: "left",
              }}
            >
              {danhsachs.map((danhsach) => (
                <tr style={{ height: 47, borderBottom: "1px solid #727288" }}>
                  <td>{danhsach.id}</td>
                  <td>{danhsach.tentk}</td>
                  <td>{danhsach.sohd}</td>
                  <td>Admin 1</td>
                  <td>21</td>
                  <td>15</td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Đang kích hoạt
                      </label>
                    </div>
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/capnhathongtin"
                    >
                      Cập nhật
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
              marginTop: 62,
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
                  12
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
export default DSDoiTacUyQuyen;
