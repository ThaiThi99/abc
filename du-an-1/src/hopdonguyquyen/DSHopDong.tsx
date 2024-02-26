import React, { useState } from "react";
import Navbar from "../BackGround/navbar";
import "../cssne/ba.css";
const DSHopDong = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Xử lý logic tìm kiếm
    console.log("Search term:", searchTerm);
  };

  return (
    <>
      <div className="thedau3">
        <Navbar />
        <div>
          <div className="ttcb3">
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
              Quản lý hợp đồng
            </a>
          </div>
          <div
            style={{
              width: 392,
              height: 48,
              top: 114,
              left: 229,
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
              Danh sách hợp đồng
            </p>
          </div>
          <div className="khungt3">
            <div className="khugne3">
              <a href="/suatt" style={{ textDecoration: "none" }}>
                <img src="images/cong.png" alt="sua" className="icon1" />
                <div className="texttt">
                  Thêm <br /> hợp đồng
                </div>
              </a>
            </div>
          </div>
          <div
            style={{
              width: "fit-content",
              height: "fit-content",
              position: "absolute",
              top: 186,
              marginTop: 10,
              left: 229,
              borderRadius: 24,
              border: "1px solid #B65100",
              display: "flex",
            }}
          >
            <div
              style={{
                width: 211,
                height: 40,
                // padding: "8px 24px",
                borderRadius: 24,
                gap: 10,
                backgroundColor: "#B65100",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "-0.002em",
                  textAlign: "center",
                }}
              >
                Hợp đồng ủy quyền
              </p>
            </div>
            <div
              style={{
                width: 207,
                height: 40,
                borderRadius: 24,
                gap: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "-0.002em",
                  textAlign: "center",
                }}
              >
                Hợp đồng khai thác
              </p>
            </div>
          </div>
          <div
            style={{
              width: "118px",
              height: "24px",
              position: "absolute",
              top: "266px",
              left: "229px",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            Quyền sở hữu:
          </div>
          <select
            style={{
              width: "160px",
              height: "40px",
              position: "absolute",
              top: "258px",
              left: "363px",
              padding: "12px 12px 12px 16px",
              borderRadius: "8px",
              border: "1px solid #FF7506",
              justifyContent: "space-between",
              background: "#1E1E2E",
              color: "#FFFFFF",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "600",
              letterSpacing: "-0.002em",
            }}
          >
            <option value="all">Tất cả</option>
            <option value="performer">Người biểu diễn</option>
            <option value="manufacturer">Nhà sản xuất</option>
          </select>

          <div
            style={{
              width: "156px",
              height: "24px",
              position: "absolute",
              top: "266px",
              left: 650,
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "600",
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            Hiệu lực hợp đồng:
          </div>
          <select
            style={{
              width: "135px",
              height: "40px",
              position: "absolute",
              top: "258px",
              left: 800,
              padding: "12px 12px 12px 16px",
              borderRadius: "8px",
              border: "1px solid #FF7506",
              display: "flex",
              justifyContent: "space-between",
              background: "#1E1E2E",
              color: "#FFFFFF",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: "600",
              letterSpacing: "-0.002em",
            }}
          >
            <option value="all">Tất cả</option>
            <option value="1">Mới</option>
            <option value="2">Còn thời hạn</option>
            <option value="3">Hết hạn</option>
            <option value="4">Hủy</option>
          </select>
          <form
            onClick={handleFormSubmit}
            style={{
              width: "501px",
              height: "48px",
              position: "absolute",
              top: "250px",
              left: "1261px",
              // padding: "12px 24px 12px 24px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#2B2B3F",
            }}
          >
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
                border: "none",
                color: "#FFFFFF",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: "600",
                letterSpacing: "-0.002em",
                outline: "none",
                paddingLeft: 24,
                paddingRight: 67,
              }}
              placeholder="Tên hợp đồng, số hợp đồng, người uỷ quyền..."
            />
            <a type="submit" style={{ background: "#2B2B3F" }}>
              <img src="images/search.png" alt="" />
            </a>
          </form>
          <div
            style={{
              width: 1533,
              height: "fit-content",
              position: "absolute",
              top: 322,
              left: 229,
              padding: "16px 24px",
              borderRadius: 16,
              gap: 56,
              backgroundColor: "#2F2F41B2",
            }}
          >
            {/* Nội dung thẻ div */}
            <table style={{ height: "fit-content" }}>
              <thead style={{ color: "#FFAC69" }}>
                <tr style={{ textAlign: "left", height: 48 }}>
                  <th style={{ width: "99px" }}>STT</th>
                  <th style={{ width: "158px" }}>Số hợp đồng</th>
                  <th style={{ width: "309px" }}>Tên hợp đồng</th>
                  <th style={{ width: "219px" }}>Người ủy quyền</th>
                  <th style={{ width: "207px" }}>Quyền sở hữu</th>
                  <th style={{ width: "159px" }}>Hiệu lực hợp đồng</th>
                  <th style={{ width: "152px" }}>Ngày tạo</th>
                  <th style={{ width: "182px" }}></th>
                </tr>
              </thead>
              <tbody style={{ color: "#FFFFFF" }}>
                <tr style={{ height: 47, borderBottom: "1px solid #727288" }}>
                  <td>1</td>
                  <td>HD123</td>
                  <td>Hợp đồng ủy quyền bài hát</td>
                  <td>Vương Anh Tú</td>
                  <td>Người biểu diễn</td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div
                          style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            background: "#347AFF",
                            marginRight: "5px",
                          }}
                        ></div>
                        Còn thời hạn
                      </div>
                    </div>
                  </td>
                  <td>01/04/2021 15:53:13</td>
                  <td>
                    <a style={{ color: "#FF7506" }} href="/#">
                      Xem chi tiết
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47, borderBottom: "1px solid #727288" }}>
                  <td>2</td>
                  <td>VQ14145145</td>
                  <td>Hợp đồng ủy quyền bài hát</td>
                  <td>Khắc Hưng</td>
                  <td>Người biểu diễn</td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#347AFF",
                          marginRight: "5px",
                        }}
                      ></div>
                      Còn thời hạn
                    </div>
                  </td>
                  <td>12/03/2021 15:53:13</td>
                  <td>
                    <a style={{ color: "#FF7506" }} href="/#">
                      Xem chi tiết
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47, borderBottom: "1px solid #727288" }}>
                  <td>3</td>
                  <td>UH1563167</td>
                  <td>Hợp đồng ủy quyền bài hát</td>
                  <td>Châu Đăng Khoa</td>
                  <td>Người biểu diễn</td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#347AFF",
                          marginRight: "5px",
                        }}
                      ></div>
                      Còn thời hạn
                    </div>
                  </td>
                  <td>14/03/2021 15:53:13</td>
                  <td>
                    <a style={{ color: "#FF7506" }} href="/#">
                      Xem chi tiết
                    </a>
                  </td>
                </tr>

                <tr style={{ height: 47, borderBottom: "1px solid #727288" }}>
                  <td>4</td>
                  <td>TH2156355</td>
                  <td>Hợp đồng ủy quyền bài hát</td>
                  <td>Phan Mạnh Quỳnh</td>
                  <td>Nhà Sản Xuất</td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#347AFF",
                          marginRight: "5px",
                        }}
                      ></div>
                      Còn thời hạn
                    </div>
                  </td>
                  <td>01/03/2021 15:51:05</td>
                  <td>
                    <a style={{ color: "#FF7506" }} href="/#">
                      Xem chi tiết
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47, borderBottom: "1px solid #727288" }}>
                  <td>5</td>
                  <td>DG639148</td>
                  <td>Hợp đồng ủy quyền bài hát</td>
                  <td>Karik</td>
                  <td>Người biểu diễn</td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#347AFF",
                          marginRight: "5px",
                        }}
                      ></div>
                      Còn thời hạn
                    </div>
                  </td>
                  <td>01/02/2021 13:13:13</td>
                  <td>
                    <a style={{ color: "#FF7506" }} href="/#">
                      Xem chi tiết
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47, borderBottom: "1px solid #727288" }}>
                  <td>6</td>
                  <td>FG638149</td>
                  <td>Hợp đồng ủy quyền bài hát</td>
                  <td>Binz</td>
                  <td>Người biểu diễn</td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#347AFF",
                          marginRight: "5px",
                        }}
                      ></div>
                      Còn thời hạn
                    </div>
                  </td>
                  <td>01/01/2021 15:53:13</td>
                  <td>
                    <a style={{ color: "#FF7506" }} href="/#">
                      Xem chi tiết
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47, borderBottom: "1px solid #727288" }}>
                  <td>7</td>
                  <td>HJ256203</td>
                  <td>Hợp đồng ủy quyền bài hát</td>
                  <td>JustaTee</td>
                  <td>Người biểu diễn</td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#347AFF",
                          marginRight: "5px",
                        }}
                      ></div>
                      Còn thời hạn
                    </div>
                  </td>
                  <td>01/12/2020 15:53:13</td>
                  <td>
                    <a style={{ color: "#FF7506" }} href="/#">
                      Xem chi tiết
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47, borderBottom: "1px solid #727288" }}>
                  <td>8</td>
                  <td>DG253321</td>
                  <td>Hợp đồng ủy quyền bài hát</td>
                  <td>Đen Vâu</td>
                  <td>Nhà sản xuất</td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#347AFF",
                          marginRight: "5px",
                        }}
                      ></div>
                      Còn thời hạn
                    </div>
                  </td>
                  <td>01/11/2020 15:53:13</td>
                  <td>
                    <a style={{ color: "#FF7506" }} href="/#">
                      Xem chi tiết
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47, borderBottom: "1px solid #727288" }}>
                  <td>9</td>
                  <td>HH141654</td>
                  <td>Hợp đồng ủy quyền bài hát</td>
                  <td>RPT MCK</td>
                  <td>
                    Người biểu diễn <br />
                    Nhà sản xuất
                  </td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#347AFF",
                          marginRight: "5px",
                        }}
                      ></div>
                      Còn thời hạn
                    </div>
                  </td>
                  <td>16/10/2020 15:53:13</td>
                  <td>
                    <a style={{ color: "#FF7506" }} href="/#">
                      Xem chi tiết
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47, borderBottom: "1px solid #727288" }}>
                  <td>10</td>
                  <td>JD1466521</td>
                  <td>Hợp đồng ủy quyền bài hát</td>
                  <td>Chillies</td>
                  <td>Người biểu diễn</td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#FF4747",
                          marginRight: "5px",
                        }}
                      ></div>
                      Đã hủy
                    </div>
                  </td>
                  <td>30/09/2020 15:53:13</td>
                  <td>
                    <div>
                      <a style={{ color: "#FF7506" }} href="/#">
                        Xem chi tiết
                      </a>
                      &nbsp;&nbsp;&nbsp;
                      <a style={{ color: "#FF7506" }} href="/#">
                        Lý do hủy
                      </a>
                    </div>
                  </td>
                </tr>
                <tr style={{ height: 47, borderBottom: "1px solid #727288" }}>
                  <td>11</td>
                  <td>JH1567587</td>
                  <td>Hợp đồng ủy quyền bài hát</td>
                  <td>Cá Hồi Hoang</td>
                  <td>Người biểu diễn</td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#FF4747",
                          marginRight: "5px",
                        }}
                      ></div>
                      Đã hủy
                    </div>
                  </td>
                  <td>20/09/2020 15:53:13</td>
                  <td>
                    <a style={{ color: "#FF7506" }} href="/#">
                      Xem chi tiết
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a style={{ color: "#FF7506" }} href="/#">
                      Lý do hủy
                    </a>
                  </td>
                </tr>
                <tr style={{ height: 47, borderBottom: "1px solid #727288" }}>
                  <td>13</td>
                  <td>SG1562100</td>
                  <td>Hợp đồng ủy quyền bài hát</td>
                  <td>Mai Deadline</td>
                  <td>Người biểu diễn</td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#FF4747",
                          marginRight: "5px",
                        }}
                      ></div>
                      Đã hủy
                    </div>
                  </td>
                  <td>01/02/2020 15:53:13</td>
                  <td>
                    <a style={{ color: "#FF7506" }} href="/#">
                      Xem chi tiết
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a style={{ color: "#FF7506" }} href="/#">
                      Lý do hủy
                    </a>
                  </td>
                </tr>
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

export default DSHopDong;
