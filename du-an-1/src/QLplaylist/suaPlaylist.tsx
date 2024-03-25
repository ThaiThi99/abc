import React, { useState } from "react";

import Navbar1 from "../BackGround/navbar1";
import "../cssne/khobangi.css";
import "../cssne/playlist.css";

interface DSNhac {
  id: number;
  tenbg: string;
  theloai: string;
  dinhdang: string;
  thoiluong: string;
  casi: string;
  tacgia: string;
}

const SuaPlayList = () => {
  const [danhsachs, setdanhsachs] = useState<DSNhac[]>([
    {
      id: 1,
      tenbg: "Gorgeous Wooden Bike",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Ca sĩ: Bella Poarch",
      tacgia: "Sáng tác: Leilani Zulauf",
    },
    {
      id: 2,
      tenbg: "hoa.png",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Ca sĩ: Bella Poarch",
      tacgia: "Sáng tác: Leilani Zulauf",
    },

    {
      id: 3,
      tenbg: "hoa.png",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Ca sĩ: Bella Poarch",
      tacgia: "Sáng tác: Leilani Zulauf",
    },

    {
      id: 4,
      tenbg: "hoa.png",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Ca sĩ: Bella Poarch",
      tacgia: "Sáng tác: Leilani Zulauf",
    },

    {
      id: 5,
      tenbg: "hoa.png",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Ca sĩ: Bella Poarch",
      tacgia: "Sáng tác: Leilani Zulauf",
    },
    {
      id: 6,
      tenbg: "hoa.png",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Ca sĩ: Bella Poarch",
      tacgia: "Sáng tác: Leilani Zulauf",
    },
    {
      id: 7,
      tenbg: "hoa.png",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Ca sĩ: Bella Poarch",
      tacgia: "Sáng tác: Leilani Zulauf",
    },
    {
      id: 8,
      tenbg: "hoa.png",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Ca sĩ: Bella Poarch",
      tacgia: "Sáng tác: Leilani Zulauf",
    },
    {
      id: 9,
      tenbg: "hoa.png",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Ca sĩ: Bella Poarch",
      tacgia: "Sáng tác: Leilani Zulauf",
    },
    {
      id: 10,
      tenbg: "hoa.png",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Ca sĩ: Bella Poarch",
      tacgia: "Sáng tác: Leilani Zulauf",
    },
    {
      id: 11,
      tenbg: "hoa.png",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Ca sĩ: Bella Poarch",
      tacgia: "Sáng tác: Leilani Zulauf",
    },
    {
      id: 12,
      tenbg: "hoa.png",
      theloai: "Ballad",
      dinhdang: "Audio",
      thoiluong: "3:12",
      casi: "Ca sĩ: Bella Poarch",
      tacgia: "Sáng tác: Leilani Zulauf",
    },

    // Thêm các học sinh khác vào đây
  ]);
  const urlImage = `/images/`;

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
            <a style={{ color: "#F5F5FF", textDecoration: "none" }} href="/#">
              Playlist
            </a>
            <span
              className="separator"
              style={{ color: "#FFAC69", margin: "0px 5px 0px 5px" }}
            >
              &gt;
            </span>
            <a style={{ color: "#F5F5FF", textDecoration: "none" }} href="/#">
              Chi tiết playlist
            </a>
            <span
              className="separator"
              style={{ color: "#FFAC69", margin: "0px 5px 0px 5px" }}
            >
              &gt;
            </span>
            <a style={{ color: "#F5F5FF", textDecoration: "none" }} href="/#">
              Chỉnh sửa
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
              Playlist Top ca khúc 2021
            </p>
          </div>

          <div className="khungt" style={{ height: 224 }}>
            <div className="khugne">
              <a href="/suaplaylist" style={{ textDecoration: "none" }}>
                <img src="images/sua.png" alt="sua" className="icon1" />
                <div className="texttt">Chỉnh sủa</div>
              </a>
            </div>
            <div className="khugne">
              <a style={{ textDecoration: "none" }}>
                <img src="images/xoa.png" alt="sua" className="icon1" />
                <div className="texttt">Xóa Playlist</div>
              </a>
            </div>
          </div>
          <div
            style={{
              width: "274px",
              height: "802px",
              top: "186px",
              left: "80px",
              gap: "16px",
              position: "absolute",
            }}
          >
            <img
              src="images/hinhchung.png"
              alt=""
              style={{
                width: "274px",
                height: "274px",
                borderRadius: "8px",
              }}
            />
            <div
              style={{
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
                color: "#FFF9F4",
                marginTop: 16,
              }}
            >
              Tiêu đề: <span style={{ color: "red" }}>*</span>
            </div>
            <input
              type="text"
              style={{
                width: 274,
                height: 48,
                borderRadius: 8,
                border: "1px solid #727288",
                background: "#2B2B3F",
                marginTop: 16,
                padding: 6,
              }}
              placeholder="Top Ca khúc 2021"
            />
            <div
              style={{
                width: 274,
                borderBottom: "1px solid #727288",
                margin: "16px 0 16px 0",
              }}
            ></div>
            <div style={{ marginBottom: 16 }} className="text6">
              <div>Người tạo:</div>
              <div
                style={{
                  left: "153.25px",
                  opacity: "70%",
                  position: "absolute",
                }}
              >
                Super Admin
              </div>
            </div>
            <div style={{ marginBottom: 16 }} className="text6">
              <div>Tổng số:</div>
              <div
                style={{
                  left: "153.25px",
                  opacity: "70%",
                  position: "absolute",
                }}
              >
                8 bản ghi
              </div>
            </div>
            <div style={{ marginBottom: 16 }} className="text6">
              <div>Tổng thời lượng:</div>
              <div
                style={{
                  left: "153.25px",
                  opacity: "70%",
                  position: "absolute",
                }}
              >
                01:31:16
              </div>
            </div>
            <div
              style={{
                width: 274,
                borderBottom: "1px solid #727288",
                margin: "0 0 16px 0",
              }}
            ></div>
            <div
              className="text6"
              style={{
                margin: "0 0 16px 0",
              }}
            >
              mô tả
            </div>
            <div
              className="text6"
              style={{
                opacity: "70%",
                display: "block",
                textAlign: "left",
                border: "1px solid #727288",
                background: "#2B2B3F",
                padding: 6,
              }}
            >
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit, sed <br />
              do eiusmod tempor incididunt <br /> labore et dolore magna aliqua.
            </div>
            <div
              style={{
                width: 274,
                borderBottom: "1px solid #727288",
                margin: "16px 0 16px 0",
              }}
            ></div>
            <div
              className="text6"
              style={{
                margin: "0 0 16px 0",
              }}
            >
              Chủ đề:
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "12px",
                borderRadius: 8,
                border: "1px solid #727288",
                height: 88,
                width: 274,
                padding: "12px 24px 13px 16px",
                background: "#2B2B3F",
              }}
              className="text6"
            >
              <div style={{ width: 235, height: 26, gap: 8, display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 8,
                    border: "1px solid #C8C8DB",
                    marginLeft: "8.5px",
                    width: 67,
                    height: 26,
                    padding: "4px 8px 4px 12px",
                  }}
                >
                  Chill
                  <img
                    src="images/fix.png"
                    style={{ width: 16, height: 16 }}
                    alt=""
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 8,
                    border: "1px solid #C8C8DB",
                    marginLeft: "8.5px",
                    width: 63,
                    height: 26,
                    padding: "4px 8px 4px 12px",
                  }}
                >
                  Lofi
                  <img
                    src="images/fix.png"
                    style={{ width: 16, height: 16 }}
                    alt=""
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: 8,
                    border: "1px solid #C8C8DB",
                    marginLeft: "8.5px",
                    width: 89,
                    height: 26,
                    padding: "4px 8px 4px 12px",
                  }}
                >
                  Mashup
                  <img
                    src="images/fix.png"
                    style={{ width: 16, height: 16 }}
                    alt=""
                  />
                </div>
                <br />
              </div>
              <br />
              <input
                type="text"
                style={{
                  marginTop: 35,
                  width: 108,
                  height: 24,
                  display: "block",
                  position: "absolute",
                  background: "#2B2B3F",
                }}
                placeholder="Nhập chủ đề"
              />
            </div>
            <div
              className="form-check form-switch"
              style={{
                margin: "16px 0 16px 0",
              }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                defaultChecked={false}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Đang kích hoạt
              </label>
            </div>
            <div className="text6" style={{ fontSize: 12, color: "white" }}>
              <span style={{ color: "red", fontSize: 16 }}>*</span>
              <span style={{ opacity: 0.5, marginLeft: 5 }}>
                là những trường thông tin bắt buộc
              </span>
            </div>
          </div>
          <div
            style={{
              width: 1392,
              height: "802",
              position: "absolute",
              top: 186,
              left: 378,
              padding: "16px 24px 16px 24px",
              borderRadius: 16,
              gap: 56,
              backgroundColor: "#2F2F41B2",
            }}
          >
            <table
              style={{
                width: "1344px",
                // height: "604px",
                height: "690px",
              }}
            >
              <thead>
                <tr style={{ textAlign: "left", height: 48, color: "#FFAC69" }}>
                  <th style={{ width: "121" }}>stt</th>
                  <th style={{ width: "382" }}>Tên bản ghi</th>
                  <th style={{ width: "371" }}>Ca sỹ</th>
                  <th style={{ width: "277" }}>Tác giả</th>
                  <th style={{ width: "110" }}></th>
                  <th style={{ width: "83" }}></th>
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

                    <td>
                      {" "}
                      <a href="" style={{ color: "#FF7506" }}>
                        Nghe
                      </a>
                    </td>
                    <td>
                      <a href="" style={{ color: "#FF7506" }}>
                        gỡ
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
                height: "802",
                minHeight: "32px",
                display: "flex",
                justifyContent: "space-between",
                gap: "8px",
                marginTop: 48,
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
          <div
            style={{
              width: "368px",
              height: "48px",
              top: "1028px  ",
              left: "886px",
              gap: "32px",
              position: "absolute",
            }}
          >
            <button
              style={{
                width: "168px",
                height: "48px",
                padding: "12px 24px",
                borderRadius: "8px",
                border: "1px solid #FF7506",
                gap: "32px",
                color: "#FF7506",
              }}
            >
              Hủy
            </button>
            <button
              style={{
                width: "168px",
                height: "48px",
                padding: "12px 24px 12px 24px",
                borderRadius: "8px",
                border: "1px solid #FF7506",
                gap: "32px",
                color: "white",
                background: "#FF7506",
                marginLeft: "32px",
              }}
            >
              Lưu
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuaPlayList;
