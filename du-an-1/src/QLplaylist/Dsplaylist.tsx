import React, { useState } from "react";
import Navbar from "../BackGround/navbar";
import "../cssne/khobangi.css";
import "../cssne/playlist.css";

interface DSNhac {
  id: number;
  tieude: string;
  sobg: string;
  thoiluong: string;
  pop: string;
  chill: string;
  dingga: string;
  songs: string;
  lofi: string;
  bacham: string;
  ngaytao: string;
  nguoitao: string;
}
const DSPlayList: React.FC = () => {
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
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "...",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
    {
      id: 2,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
    {
      id: 3,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
    {
      id: 4,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
    {
      id: 5,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
    {
      id: 6,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
    {
      id: 7,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
    {
      id: 8,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
    {
      id: 9,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
    {
      id: 10,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
    {
      id: 11,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
    {
      id: 12,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
    {
      id: 13,
      tieude: "Top ca khúc 2021",
      sobg: "20",
      thoiluong: "01:04:27",
      pop: "Pop",
      chill: "Chill",
      dingga: "Digga",
      songs: "Songs",
      lofi: "Lofi",
      bacham: "",
      ngaytao: "22/10/2020",
      nguoitao: "Cindy Cường",
    },
  ]);

  const urlImage = `/images/`;

  return (
    <>
      <div className="thedau">
        <Navbar />
        <div className="ttcb4">Kho bản ghi</div>
        <form onSubmit={handleFormSubmit} className="timkiem4">
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

        {/* icon menu */}
        <div
          className="textt4"
          style={{
            top: "174px",
            left: "1690px",
          }}
        >
          <a href="/pheduyetbg1">
            <img src="images/List.png" className="icon4" alt="" />
          </a>
        </div>

        <div
          className="textt4"
          style={{
            top: "174px",
            left: "1738px",
          }}
        >
          <a href="/pheduyetbg">
            <img src="images/tab.png" className="icon4" alt="" />
          </a>
        </div>
        {/* icon menu */}

        <div className="khungt">
          <div className="khugne">
            <a href="/suatt" style={{ textDecoration: "none" }}>
              <img src="images/congfile.png" alt="sua" className="icon1" />
              <div className="texttt">
                Thêm <br /> Playlist
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
                <th style={{ width: "70" }}>stt</th>
                <th style={{ width: "314" }}>Tiêu đề</th>
                <th style={{ width: "130" }}>Số bản ghi</th>
                <th style={{ width: "136" }}>Thời lượng</th>
                <th style={{ width: "420" }}>Chủ đề</th>
                <th style={{ width: "180" }}>Ngày tạo</th>
                <th style={{ width: "148" }}>Người tạo</th>
                <th style={{ width: "95" }}></th>
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
                  <td>{danhsach.id}</td>
                  <td>
                    {danhsach.tieude} <br />
                  </td>

                  <td>{danhsach.sobg}</td>
                  <td>{danhsach.thoiluong}</td>
                  <td style={{ display: "flex" }}>
                    <div className="khung5">{danhsach.pop}</div>
                    <div className="khung5">{danhsach.chill}</div>
                    <div className="khung5">{danhsach.dingga}</div>
                    <div className="khung5">{danhsach.songs}</div>
                    <div className="khung5">{danhsach.lofi}</div>
                    <div className="khung5">{danhsach.bacham}</div>
                  </td>
                  <td>{danhsach.ngaytao}</td>
                  <td>{danhsach.nguoitao}</td>
                  <td>
                    <a href="" style={{ color: "#FF7506" }}>
                      Chi tiết
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
export default DSPlayList;
