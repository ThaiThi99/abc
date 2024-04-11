import React, { useState } from "react";
import "../cssne/khobangi.css";
import "../cssne/ba.css";
import Navbar1 from "../BackGround/navbar1";

interface DSNhac {
  id: number;
  tenbg: string;
  theloai: string;
  dinhdang: string;
  thoiluong: string;
  casi: string;
  tacgia: string;
  maisrc: string;
  sohopdong: string;
  ngaytai: string;
  isChecked: boolean;
}
const HDUyQuyen: React.FC = () => {
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
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
      isChecked: false,
    },
    {
      id: 2,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
      isChecked: false,
    },
    {
      id: 3,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
      isChecked: false,
    },
    {
      id: 4,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
      isChecked: false,
    },
    {
      id: 5,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
      isChecked: false,
    },
    {
      id: 6,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
      isChecked: false,
    },
    {
      id: 7,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
      isChecked: false,
    },
    {
      id: 8,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
      isChecked: false,
    },
    {
      id: 9,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
      isChecked: false,
    },
    {
      id: 10,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
      isChecked: false,
    },
    {
      id: 11,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
      isChecked: false,
    },
    {
      id: 12,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
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

        <div className="ttcb3" style={{ width: 700, left: 78 }}>
          <a
            className="a3"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Quản lý hợp đồng
          </a>
          <span style={{ color: "#F5F5FF" }} className="separator">
            &gt;
          </span>

          <a
            // className="a4"
            style={{ color: "#F5F5FF", textDecoration: "none" }}
            href="/#"
          >
            Chi tiết hợp đồng
          </a>
          <span style={{ color: "#F5F5FF" }} className="separator">
            &gt;
          </span>

          <a style={{ color: "#F5F5FF", textDecoration: "none" }} href="/#">
            Chỉnh sửa danh sách tác phẩm uỷ quyền
          </a>
        </div>
        <div className="ttcb4" style={{ top: 114, left: 78 }}>
          Kho bản ghi
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

        {/* icon menu */}

        {/* icon menu */}

        <div className="khungt" style={{ height: 130 }}>
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
                <th style={{ width: "99" }}>stt</th>
                <th style={{ width: "282" }}>Tên bản ghi</th>
                <th style={{ width: "205" }}>Ca sĩ</th>
                <th style={{ width: "247" }}>Tác giả</th>
                <th style={{ width: "249" }}>Mã ISRC</th>
                <th style={{ width: "231" }}>Số hợp đồng</th>
                <th style={{ width: "157" }}>Ngày tải</th>
                <th style={{ width: "114" }}></th>
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
                  <td>
                    {danhsach.tenbg} <br />
                    <span
                      style={{
                        opacity: "70%",
                      }}
                    >
                      {danhsach.theloai}
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          backgroundColor: "#347AFF",
                          borderRadius: "50%",
                          display: "inline-block",
                          margin: "3px 3px 3px 3px",
                        }}
                      ></div>
                      {danhsach.dinhdang}
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          backgroundColor: "#347AFF",
                          borderRadius: "50%",
                          display: "inline-block",
                          margin: "3px 3px 3px 3px",
                        }}
                      ></div>
                      {danhsach.thoiluong}
                    </span>
                  </td>

                  <td>{danhsach.casi}</td>
                  <td>{danhsach.tacgia}</td>
                  <td>{danhsach.maisrc}</td>

                  <td>{danhsach.sohopdong}</td>
                  <td>12/05/2021 16:46:12</td>
                  <td>
                    <a href="" style={{ color: "#FF7506" }}>
                      Nghe
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
        <div className="nutbtn3" style={{ marginTop: 40 }}>
          <button className="boooton3">Hủy</button>

          <button
            className="boooton3"
            style={{
              background: "#FF7506",
              color: "white",
              marginLeft: 40,
            }}
          >
            Lưu
          </button>
        </div>
      </div>
    </>
  );
};
export default HDUyQuyen;
