import { useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar1 from "../BackGround/navbar1";
import "../cssne/ba.css";
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
  tinhtrang: any;
  isChecked: boolean;
}

const TacPhamUQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Xử lý logic tìm kiếm
    console.log("Search term:", searchTerm);
  };
  const xanhLa = {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#18E306",
    marginRight: "5px",
  };
  const xanhDuong = {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#347AFF",
    marginRight: "5px",
  };
  const mauDo = {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "red",
    marginRight: "5px",
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
      tinhtrang: xanhLa,
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
      tinhtrang: xanhLa,
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
      tinhtrang: xanhDuong,
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
      tinhtrang: xanhDuong,
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
      tinhtrang: xanhDuong,
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
      tinhtrang: xanhDuong,
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
      tinhtrang: xanhDuong,
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
      tinhtrang: xanhDuong,
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
      tinhtrang: xanhDuong,
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
      tinhtrang: xanhDuong,
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
      tinhtrang: mauDo,
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
      tinhtrang: mauDo,
      isChecked: false,
    },
    {
      id: 13,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Phan Mạnh Quỳnh",
      tacgia: "Phan Mạnh Quỳnh",
      maisrc: "KRA40105463",
      sohopdong: "HD395738503",
      ngaytai: "12/05/2021  16:46:12",
      tinhtrang: mauDo,
      isChecked: false,
    },
  ]);
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
              Quản lý hợp đồng
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
              Chi Tiết
            </a>
          </div>
          <div className="hdqbh3">
            <p className="hdqbhh3">Hợp đồng uỷ quyền bài hát - BH123</p>
          </div>

          <div className="tren3">
            <div className="trenn3">
              <p className="tthd3">Thông tin hợp đồng</p>
            </div>
            <div
              className="trenn3"
              style={{
                width: 207,
                backgroundColor: "#B65100",
              }}
            >
              <p className="tthd3">Tác phẩm ủy quyền</p>
            </div>
          </div>

          <div className="ttpd3">Tình trạng phê duyệt</div>

          <select className="sl3">
            <option value="all">Tất cả</option>
            <option value="1">Mới</option>
            <option value="2">Đã phê duyệt</option>
            <option value="3">Bị từ chối</option>
          </select>

          <div className="khungtc3">
            <input
              type="text"
              className="ipp3"
              placeholder="Tên bản ghi, tên ca sĩ, tác giả,..."
            />
            <div
              style={{
                marginLeft: "12px",
                width: "24px",
                height: "24px",
                marginTop: 6,
                marginRight: 10,
              }}
            >
              <a href="#">
                <i
                  style={{ color: "white" }}
                  className="fa-solid fa-magnifying-glass"
                ></i>
              </a>
            </div>
          </div>

          <div className="khungt3" style={{ top: 186, height: 520 }}>
            <div className="khugne3">
              <a href="/chinhsuatt" style={{ textDecoration: "none" }}>
                <img src="images/sua.png" alt="sua" className="icon1" />
                <div className="textt">
                  Chỉnh sửa <br /> hợp đồng
                </div>
              </a>
            </div>
            <div className="khugne3">
              <div data-bs-toggle="modal" data-bs-target="#giahanhd">
                <img src="images/hd.png" alt="doimk" className="icon1" />
                <div className="textt">
                  Gia hạn <br /> hợp đồng
                </div>
              </div>
            </div>
            <div className="khugne3">
              <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="images/hengio.png" alt="doimk" className="icon1" />
                <div className="textt">
                  Hủy hợp <br />
                  đồng
                </div>
              </div>
            </div>
            <div className="khugne3">
              <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="images/cong.png" alt="doimk" className="icon1" />
                <div className="textt">
                  Thêm bản <br /> ghi
                </div>
              </div>
            </div>
          </div>

          {/* table */}
          <div
            style={{
              width: 1683,
              height: "fit-content",
              position: "absolute",
              top: 322,
              left: 78,
              padding: "16px 24px",
              borderRadius: 16,
              gap: 40,
              backgroundColor: "#2F2F41B2",
            }}
          >
            <table style={{ height: "fit-content" }}>
              <thead style={{ color: "#FFAC69" }}>
                <tr style={{ textAlign: "left", height: 48 }}>
                  <th style={{ width: "99px" }}>STT</th>
                  <th style={{ width: "308px" }}>Tên bản ghi</th>
                  <th style={{ width: "205px" }}>Mã ISRC</th>
                  <th style={{ width: "247px" }}>Ca sĩ</th>
                  <th style={{ width: "274px" }}>Tác giả</th>
                  <th style={{ width: "231px" }}>Ngày tải</th>
                  <th style={{ width: "157px" }}>Tình trạng</th>
                  <th style={{ width: "114px" }}></th>
                </tr>
              </thead>
              <tbody style={{ color: "#FFFFFF" }}>
                {danhsachs.map((danhsach) => (
                  <tr style={{ height: 47 }}>
                    <td>{danhsach.id}</td>
                    <td>
                      Gorgeous Wooden Bike <br /> Ballad{" "}
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          opacity: "70%",
                          background: "#347AFF",
                          borderRadius: "50%",
                          display: "inline-block",
                          position: "absolute",
                          marginTop: 11,
                        }}
                      ></div>
                      <span style={{ marginRight: 5 }}></span> Audio{" "}
                      <div
                        style={{
                          width: 4,
                          height: 4,
                          opacity: "70%",
                          background: "#347AFF",
                          borderRadius: "50%",
                          display: "inline-block",
                          position: "absolute",
                          marginTop: 11,
                        }}
                      ></div>
                      <span style={{ marginRight: 5 }}></span>
                      3:12
                    </td>
                    <td>VNA1423525</td>
                    <td>Vương Anh Tú</td>
                    <td>Vương Phong</td>
                    <td>01/04/2021 15:53:13</td>
                    <td style={{ width: "152px" }}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        {/* <div
                          style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            background: "#18E306",
                            marginRight: "5px",
                          }}
                        ></div> */}
                        <div style={danhsach.tinhtrang}></div>
                        Mới
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
                className="mao3"
              >
                <a href="/#" className="sott3">
                  &lt;
                </a>
                <a href="/#" className="sott3">
                  1
                </a>
                <a href="/#" className="sott33">
                  2
                </a>
                <a href="/#" className="sott3">
                  3
                </a>
                <a href="/#" className="sott3">
                  ...
                </a>
                <a href="/#" className="sott3">
                  100
                </a>
                <a href="/#" className="sott3">
                  &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TacPhamUQ;
