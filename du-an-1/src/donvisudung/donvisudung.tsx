import React, { useState } from "react";
import "../cssne/khobangi.css";
import "../cssne/ba.css";
import Navbar1 from "../BackGround/navbar1";

interface DSNhac {
  id: number;
  tennguoidung: string;
  vaitro: string;
  isChecked: boolean;
}
const DonViSuDung: React.FC = () => {
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
      tennguoidung: "Nguyen Van A",
      vaitro: "QC",
      isChecked: false,
    },
    {
      id: 2,
      tennguoidung: "Nguyen Van A",
      vaitro: "QC",
      isChecked: false,
    },
    {
      id: 3,
      tennguoidung: "Nguyen Van A",
      vaitro: "QC",
      isChecked: false,
    },
    {
      id: 4,
      tennguoidung: "Nguyen Van A",
      vaitro: "QC",
      isChecked: false,
    },
    {
      id: 5,
      tennguoidung: "Nguyen Van A",
      vaitro: "QC",
      isChecked: false,
    },
    {
      id: 6,
      tennguoidung: "Nguyen Van A",
      vaitro: "QC",
      isChecked: false,
    },
    {
      id: 7,
      tennguoidung: "Nguyen Van A",
      vaitro: "QC",
      isChecked: false,
    },
    {
      id: 8,
      tennguoidung: "Nguyen Van A",
      vaitro: "QC",
      isChecked: false,
    },
    {
      id: 9,
      tennguoidung: "Nguyen Van A",
      vaitro: "QC",
      isChecked: false,
    },
    {
      id: 10,
      tennguoidung: "Nguyen Van A",
      vaitro: "QC",
      isChecked: false,
    },
    {
      id: 11,
      tennguoidung: "Nguyen Van A",
      vaitro: "QC",
      isChecked: false,
    },
    {
      id: 12,
      tennguoidung: "Nguyen Van A",
      vaitro: "QC",
      isChecked: false,
    },
    {
      id: 13,
      tennguoidung: "Nguyen Van A",
      vaitro: "QC",
      isChecked: false,
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
  const handleCheckSingle = (id: number) => {
    const updatedDanhsach = danhsachs.map((danhsach) => {
      if (danhsach.id === id) {
        return {
          ...danhsach,
          isChecked: !danhsach.isChecked,
        };
      }
      return danhsach;
    });
    setdanhsachs(updatedDanhsach);
  };
  const urlImage = `/images/`;

  return (
    <>
      <div style={{ width: "100%", display: "flex" }}>
        <Navbar1 />

        <div className="ttcb3" style={{ width: 700, left: 75 }}>
          <a
            className="a3"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Quản lý
          </a>
          <span style={{ color: "#F5F5FF" }} className="separator">
            &gt;
          </span>

          <a
            // className="a4"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Đơn vị sử dụng
          </a>
          <span style={{ color: "#F5F5FF" }} className="separator">
            &gt;
          </span>

          <a style={{ color: "#F5F5FF", textDecoration: "none" }} href="/#">
            Chi tiết
          </a>
        </div>
        <div className="ttcb4" style={{ top: 114, left: 80, width: 500 }}>
          Đơn vị sử dụng - ABCD
        </div>
        <form
          onSubmit={handleFormSubmit}
          className="timkiem4"
          style={{ top: 186, left: 78 }}
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

        {/* danh sach dropdown */}

        <div
          className="khungt"
          style={{ height: 354, borderRadius: "16px 0px 0px 16px", top: 186 }}
        >
          <div className="khugne">
            <a href="/themnguoidung" style={{ textDecoration: "none" }}>
              <img src="images/cong.png" alt="sua" className="icon1" />
              <div className="texttt">
                Thêm <br /> người dùng
              </div>
            </a>
          </div>
          <div className="khugne">
            <a
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{ textDecoration: "none" }}
            >
              <img src="images/xoa.png" alt="sua" className="icon1" />
              <div className="texttt">Xóa</div>
            </a>
          </div>
          <div className="khugne">
            <a
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{ textDecoration: "none" }}
            >
              <img src="images/bb.png" alt="sua" className="icon1" />
              <div className="texttt">Vai trò</div>
            </a>
          </div>
        </div>
        <div
          style={{
            width: 1683,
            height: "fit-content",
            position: "absolute",
            top: 258,
            left: 78,
            padding: "16px 24px",
            borderRadius: 16,
            gap: 56,
            backgroundColor: "#2F2F41B2",
          }}
        >
          <table
            style={{
              width: "1635px",
              // height: "604px",
              height: "644px",
            }}
          >
            <thead>
              <tr style={{ textAlign: "left", height: 48, color: "#FFAC69" }}>
                <th style={{ width: "99px" }}>
                  <input
                    type="checkbox"
                    onChange={handleCheckAll}
                    style={{
                      width: "24px",
                      height: "24px",
                      border: "1px solid #347AFF",
                    }}
                  />
                </th>
                <th style={{ width: "97px" }}>STT</th>
                <th style={{ width: "189px" }}>Tên người dùng</th>
                <th style={{ width: "192px" }}>Vai trò</th>
                <th style={{ width: "261px" }}>Email</th>
                <th style={{ width: "202px" }}>Tên đăng nhập</th>
                <th style={{ width: "185px" }}>Cập nhật lần cuối</th>
                <th style={{ width: "151px" }}>Trạng thái</th>
                <th style={{ width: "262px" }}></th>
              </tr>
            </thead>
            <tbody>
              {danhsachs.map((danhsach) => (
                <tr
                  style={{
                    color: "#FFFFFF",
                    marginBottom: "1px",
                    borderBottom: "1px solid #727288",
                  }}
                >
                  <td>
                    <input
                      type="checkbox"
                      checked={danhsach.isChecked}
                      onChange={() => handleCheckSingle(danhsach.id)}
                      style={{
                        width: "24px",
                        height: "24px",
                        border: "1px solid #347AFF",
                      }}
                    />
                  </td>
                  <td>{danhsach.id}</td>
                  <td>{danhsach.tennguoidung}</td>
                  <td>QC</td>
                  <td>nguyenvanb@gmail.com</td>
                  <td>nguyenvanb</td>
                  <td>21/04/2021</td>
                  <td>
                    <div
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "#18E306",
                        marginRight: "5px",
                        display: "inline-block",
                        marginBottom: "1.5px",
                      }}
                    ></div>
                    Đang hoạt động
                  </td>
                  <td style={{ width: "182px" }}>
                    <a
                      style={{
                        display: "block",
                        color: "#FF7506",
                        textAlign: "center",
                      }}
                      href="/ThongTinNguoiDung"
                    >
                      Xem chi tiết
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
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            style={{
              // display: "flex",
              width: "720px",
              height: "432px",
            }}
          >
            <div
              className="modal-content"
              style={{
                backgroundColor: "#3E3E5B",
                width: "720px",
                height: "432px",
                borderRadius: "16px",
              }}
            >
              <div className="modal-body">
                <h5
                  className="modal-title m-0"
                  id="exampleModalLabel"
                  style={{
                    width: "100%",
                    height: "24px",
                    top: "32px",
                    left: "159px",
                    fontFamily: "Montserrat",
                    fontSize: "24px",
                    fontWeight: 700,
                    lineHeight: "24px",
                    letterSpacing: "-0.002em",
                    textAlign: "center",
                    color: "#F5F5FF",
                  }}
                >
                  Lý do từ chối phê duyệt
                </h5>

                <textarea
                  placeholder="Cho chúng tôi biết lý do bạn muốn từ chối phê duyệt bản ghi này..."
                  style={{
                    position: "absolute",
                    top: "96px",
                    left: "40px",
                    width: "640px",
                    height: "208px",
                    padding: "12px 24px 12px 16px",
                    borderRadius: "8px",
                    border: " 1px solid #727288",
                    backgroundColor: "#2B2B3F",
                    color: "white",
                  }}
                />

                <div>
                  <div
                    style={{
                      width: "368px",
                      height: "48px",
                      top: "344px",
                      left: "176px",
                      gap: "32px",
                      position: "absolute",
                    }}
                  >
                    <button
                      className="butoon"
                      style={{
                        color: "#FF7506",
                        backgroundColor: "transparent",
                      }}
                      data-bs-dismiss="modal"
                    >
                      Hủy
                    </button>
                    <button
                      className="butoon"
                      style={{
                        color: "white",
                        background: "#FF7506",
                        marginLeft: "32px",
                      }}
                      data-bs-dismiss="modal"
                    >
                      Từ chối
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DonViSuDung;
