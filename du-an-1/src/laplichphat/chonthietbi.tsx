import React, { useState } from "react";
import "../cssne/khobangi.css";
import Navbar1 from "../BackGround/navbar1";

interface DSNhac {
  id: number;
  tenthietbi: string;
  mac: string;
  sku: string;
  donvi: string;
  tendn: string;
  diadiem: string;
  isChecked: boolean;
}
const ChonThietBi: React.FC = () => {
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
      tenthietbi: "Device A12321",
      mac: "192.168.1.8",
      sku: "232124264",
      donvi: "Cửa hàng 1",
      tendn: "User 2",
      diadiem: "194, Nguyễn Thị Minh Khai, Phường 6, Quận 3, TP Hồ Chí Minh",
      isChecked: false,
    },
    {
      id: 2,
      tenthietbi: "Device A12321",
      mac: "192.168.1.8",
      sku: "232124264",
      donvi: "Cửa hàng 1",
      tendn: "User 2",
      diadiem: "194, Nguyễn Thị Minh Khai, Phường 6, Quận 3, TP Hồ Chí Minh",
      isChecked: false,
    },
    {
      id: 3,
      tenthietbi: "Device A12321",
      mac: "192.168.1.8",
      sku: "232124264",
      donvi: "Cửa hàng 1",
      tendn: "User 2",
      diadiem: "194, Nguyễn Thị Minh Khai, Phường 6, Quận 3, TP Hồ Chí Minh",
      isChecked: false,
    },
    {
      id: 4,
      tenthietbi: "Device A12321",
      mac: "192.168.1.8",
      sku: "232124264",
      donvi: "Cửa hàng 1",
      tendn: "User 2",
      diadiem: "194, Nguyễn Thị Minh Khai, Phường 6, Quận 3, TP Hồ Chí Minh",
      isChecked: false,
    },
    {
      id: 5,
      tenthietbi: "Device A12321",
      mac: "192.168.1.8",
      sku: "232124264",
      donvi: "Cửa hàng 1",
      tendn: "User 2",
      diadiem: "194, Nguyễn Thị Minh Khai, Phường 6, Quận 3, TP Hồ Chí Minh",
      isChecked: false,
    },
    {
      id: 6,
      tenthietbi: "Device A12321",
      mac: "192.168.1.8",
      sku: "232124264",
      donvi: "Cửa hàng 1",
      tendn: "User 2",
      diadiem: "194, Nguyễn Thị Minh Khai, Phường 6, Quận 3, TP Hồ Chí Minh",
      isChecked: false,
    },
    {
      id: 7,
      tenthietbi: "Device A12321",
      mac: "192.168.1.8",
      sku: "232124264",
      donvi: "Cửa hàng 1",
      tendn: "User 2",
      diadiem: "194, Nguyễn Thị Minh Khai, Phường 6, Quận 3, TP Hồ Chí Minh",
      isChecked: false,
    },
    {
      id: 8,
      tenthietbi: "Device A12321",
      mac: "192.168.1.8",
      sku: "232124264",
      donvi: "Cửa hàng 1",
      tendn: "User 2",
      diadiem: "194, Nguyễn Thị Minh Khai, Phường 6, Quận 3, TP Hồ Chí Minh",
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
        <Navbar1 />
        <div
          style={{
            top: 86,
            left: 78,
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
        <div className="ttcb4" style={{ left: 78, top: 110 }}>
          Chọn thiết bị
        </div>

        {/* danh sach dropdown */}

        {/* icon menu */}

        {/* icon menu */}

        <div className="khungt" style={{ height: 224, top: 189 }}>
          <div className="khugne">
            <a href="/suatt" style={{ textDecoration: "none" }}>
              <img src="images/tichdo.png" alt="sua" className="icon1" />
              <div className="texttt">Chọn</div>
            </a>
          </div>
          <div className="khugne">
            <a
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style={{ textDecoration: "none" }}
            >
              <img src="images/no.png" alt="sua" className="icon1" />
              <div className="texttt">Hủy</div>
            </a>
          </div>
        </div>
        <div
          style={{
            width: 1688,
            height: "864px",
            position: "absolute",
            top: 186,
            left: 80,
            padding: "16px 24px",
            borderRadius: 16,
            gap: 56,
            backgroundColor: "#2F2F41B2",
          }}
        >
          <table
            style={{
              width: "1640px",
              height: "606px",
              margin: "16px 24px 104px 24px",
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
                <th style={{ width: "110px" }}>STT</th>
                <th style={{ width: "163px" }}>Tên thiết bị</th>
                <th style={{ width: "162px" }}>MAC Address</th>
                <th style={{ width: "196px" }}>SKU/ID</th>
                <th style={{ width: "228px" }}>Đơn vị sử dụng</th>
                <th style={{ width: "195px" }}>Tên đăng nhập</th>
                <th style={{ width: "726px" }}>Địa điểm hoạt động</th>
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
                  <td>1</td>
                  <td>Device A12321</td>
                  <td>192.168.1.8</td>
                  <td>232124264</td>
                  <td>Cửa hàng 1</td>
                  <td>User 2</td>
                  <td>
                    194, Nguyễn Thị Minh Khai, Phường 6, Quận 3, TP Hồ Chí Minh
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
export default ChonThietBi;
