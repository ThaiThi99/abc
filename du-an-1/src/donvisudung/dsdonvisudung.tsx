import React, { useState } from "react";
import Navbar from "../BackGround/navbar";
import "../cssne/khobangi.css";

interface DSNhac {
  id: number;
  tentk: string;
  sohd: string;
  isChecked: boolean;
}

const DSDonViSD: React.FC = () => {
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
      tentk: "Cty TNHH TM DV ABCEDEF",
      sohd: "HD123",
      isChecked: false,
    },
    {
      id: 2,
      tentk: "Cty TNHH TM DV ABCEDEF",
      sohd: "HD123",
      isChecked: false,
    },
    {
      id: 3,
      tentk: "Cty TNHH TM DV ABCEDEF",
      sohd: "HD123",
      isChecked: false,
    },
    {
      id: 4,
      tentk: "Cty TNHH TM DV ABCEDEF",
      sohd: "HD123",
      isChecked: false,
    },
    {
      id: 5,
      tentk: "Cty TNHH TM DV ABCEDEF",
      sohd: "HD123",
      isChecked: false,
    },
    {
      id: 6,
      tentk: "Cty TNHH TM DV ABCEDEF",
      sohd: "HD123",
      isChecked: false,
    },
    {
      id: 7,
      tentk: "Cty TNHH TM DV ABCEDEF",
      sohd: "HD123",
      isChecked: false,
    },
    {
      id: 8,
      tentk: "Cty TNHH TM DV ABCEDEF",
      sohd: "HD123",
      isChecked: false,
    },
    {
      id: 9,
      tentk: "Cty TNHH TM DV ABCEDEF",
      sohd: "HD123",
      isChecked: false,
    },
    {
      id: 10,
      tentk: "Cty TNHH TM DV ABCEDEF",
      sohd: "HD123",
      isChecked: false,
    },
    {
      id: 11,
      tentk: "Cty TNHH TM DV ABCEDEF",
      sohd: "HD123",
      isChecked: false,
    },
    {
      id: 12,
      tentk: "Cty TNHH TM DV ABCEDEF",
      sohd: "HD123",
      isChecked: false,
    },
    {
      id: 13,
      tentk: "Cty TNHH TM DV ABCEDEF",
      sohd: "HD123",
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
            Lập lịch phát
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
            Chi tiết
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
            Chỉnh sửa lịch phát
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
            Áp lịch cho thiết bị
          </a>
        </div>
        <div className="ttcb4" style={{ top: 114, left: 229 }}>
          Chọn thiết bị
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

        <div className="khungt" style={{ height: 224 }}>
          <div className="khugne">
            <a href="/suatt" style={{ textDecoration: "none" }}>
              <img src="images/ok.png" alt="sua" className="icon1" />
              <div className="texttt">Phê duyệt</div>
            </a>
          </div>
          <div className="khugne">
            <a
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{ textDecoration: "none" }}
            >
              <img src="images/no.png" alt="sua" className="icon1" />
              <div className="texttt">Từ chối</div>
            </a>
          </div>
        </div>
        <div
          style={{
            width: 1541,
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
              width: 1541,
              height: 770,
              margin: "16px 24px 104px 24px",
            }}
          >
            <thead style={{ color: "#FFAC69" }}>
              <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
                <th style={{ width: "51px" }}>
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
                <th style={{ width: "99px" }}>STT</th>
                <th style={{ width: "260px" }}>Tên tài khoản quản trị</th>
                <th style={{ width: "158px" }}>Số hợp đồng</th>
                <th style={{ width: "120px" }}>Admin</th>
                <th style={{ width: "126px" }}>Người dùng</th>
                <th style={{ width: "204px" }}>Thiết bị được chỉ định</th>
                <th style={{ width: "143px" }}>Ngày hết hạn</th>
                <th style={{ width: "171px" }}>Trạng thái</th>
                <th style={{ width: "149px" }}></th>
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
                <tr style={{ height: 47 }}>
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
                  <td>{danhsach.tentk}</td>
                  <td>{danhsach.sohd}</td>
                  <td>Admin 1</td>
                  <td>21</td>
                  <td>15</td>
                  <td>21/04/2021</td>
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
                      href="/#"
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
export default DSDonViSD;
