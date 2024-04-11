import React, { useState } from "react";
import Navbar from "../BackGround/navbar";
import "../cssne/khobangi.css";

interface DSNhac {
  id: number;
  trangthai: any;

  isChecked: boolean;
}
const DSThietBI: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Xử lý logic tìm kiếm
    console.log("Search term:", searchTerm);
  };
  const [checkne, setcheckne] = useState(false);

  const checkk = () => {
    setcheckne(!checkne);
  };
  const xanhLa = {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#18E306",
    marginRight: "5px",
    display: "inline-block",
    marginTop: "8px",
    position: "absolute",
  };

  const mauDo = {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "red",
    marginRight: "5px",
    display: "inline-block",
    marginTop: "8px",
    position: "absolute",
  };

  const [danhsachs, setdanhsachs] = useState<DSNhac[]>([
    {
      id: 1,
      trangthai: xanhLa,
      isChecked: false,
    },
    {
      id: 2,
      trangthai: xanhLa,
      isChecked: false,
    },
    {
      id: 3,
      trangthai: xanhLa,
      isChecked: false,
    },
    {
      id: 4,
      trangthai: mauDo,
      isChecked: false,
    },
    {
      id: 5,
      trangthai: xanhLa,
      isChecked: false,
    },
    {
      id: 6,
      trangthai: xanhLa,
      isChecked: false,
    },
    {
      id: 7,
      trangthai: mauDo,
      isChecked: false,
    },
    {
      id: 8,
      trangthai: xanhLa,
      isChecked: false,
    },
    {
      id: 9,
      trangthai: xanhLa,
      isChecked: false,
    },
    {
      id: 10,
      trangthai: mauDo,
      isChecked: false,
    },
    {
      id: 11,
      trangthai: mauDo,
      isChecked: false,
    },
    {
      id: 12,
      trangthai: xanhLa,
      isChecked: false,
    },
    {
      id: 13,
      trangthai: xanhLa,
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
        <div className="ttcb4">Danh sách thiết bị</div>
        <form
          onSubmit={handleFormSubmit}
          className="timkiem4"
          style={{ left: 1105, top: 158 }}
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

        <select
          className="select4"
          style={{
            width: "274px",
            top: "158px",
            left: "229px",
            height: 45,
          }}
        >
          <option value="all">Chọn nhóm tài khoản</option>
          <option value="performer">Tất cả</option>
          <option value="manufacturer">Công ty TMCP Bách Hóa Xanh</option>
          <option value="manufacturer">Công ty TNHH XYZ</option>
          <option value="sdasd">Công ty TMCP Adora</option>
        </select>

        <div
          style={{
            width: "274px",
            height: "45px",
            position: "absolute",
            top: "158px",
            left: 527,
          }}
        >
          <div
            style={{
              width: "274px",
              height: "45px",
              borderRadius: "8px",
              border: "1px solid #FF7506",
              justifyContent: "space-between",
              background: "#3E3E5B",
              color: "#FFFFFF",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "400",
              letterSpacing: "-0.002em",
            }}
            className={`dropdown3 ${checkne ? "visible" : ""}`}
            tabIndex={100}
          >
            <span
              style={{
                background: "#1E1E2E",
                borderRadius: "8px",
              }}
              className="anchor"
              onClick={checkk}
            >
              <div style={{ margin: "8px 12px 8px 16px" }}>Ẩn hiện cột</div>
            </span>
            <ul className="the3">
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    MAC Address
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Memory
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    SKU/ID
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Hạn bảo hành
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Tên đăng nhập
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Trạng thái
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Địa điểm
                  </label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    Hạn hợp đồng
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* danh sach dropdown */}

        {/* icon menu */}

        {/* icon menu */}

        <div
          className="khungt"
          style={{ height: 520, borderRadius: "24px 0 0 24px" }}
        >
          <div className="khugne">
            <a href="/themthietbimoi" style={{ textDecoration: "none" }}>
              <img src="images/cong.png" alt="sua" className="icon1" />
              <div className="texttt">
                Thêm <br /> thiết bị
              </div>
            </a>
          </div>
          <div className="khugne">
            <a
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{ textDecoration: "none" }}
            >
              <img src="images/off.png" alt="sua" className="icon1" />
              <div className="texttt">
                Kích hoạt <br />
                thiết bị
              </div>
            </a>
          </div>
          <div className="khugne">
            <a style={{ textDecoration: "none" }}>
              <img src="images/doimk.png" alt="sua" className="icon1" />
              <div className="texttt">
                Khóa <br /> thiết bị
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
              <div className="texttt">
                Xóa <br /> thiết bị
              </div>
            </a>
          </div>
        </div>
        <div
          style={{
            width: 1541,
            height: "fit-content",
            position: "absolute",
            top: 230,
            left: 229,
            padding: "16px 24px",
            borderRadius: 16,
            gap: 56,
            backgroundColor: "#2F2F41B2",
          }}
        >
          <table
            style={{
              width: "1485px",
              // height: "604px",
              height: "fit-content",
            }}
          >
            <thead>
              <tr style={{ textAlign: "left", height: 48, color: "#FFAC69" }}>
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
                <th style={{ width: "85px" }}>STT</th>
                <th style={{ width: "151px" }}>Tên thiết bị</th>
                <th style={{ width: "311px" }}>Trạng thái</th>
                <th style={{ width: "391px" }}>Địa điểm</th>
                <th style={{ width: "157px" }}>Hạn hợp đồng</th>
                <th style={{ width: "146px" }}>MAC Addresss</th>
                <th style={{ width: "181px" }}>Memory</th>
              </tr>
            </thead>
            <tbody>
              {danhsachs.map((danhsach) => (
                <tr
                  style={{
                    color: "#FFFFFF",
                    marginBottom: "1px",
                    borderBottom: "1px solid #727288",
                    height: 47,
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
                  <td style={{ textAlign: "center" }}>1</td>
                  <td>Device A12231</td>
                  <td style={{ display: "flex" }}>
                    <div style={danhsach.trangthai}></div>
                    <div style={{ marginLeft: 15 }}>
                      Đang kích hoạt | Đang hoạt động
                    </div>
                  </td>
                  <td>86/33, Âu Cơ, Phường 9, Tân Bình, TP Hồ Chí Minh</td>
                  <td>21/04/2021</td>
                  <td>123.12.156.10</td>
                  <td>0.00GB/32GB</td>
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
export default DSThietBI;
