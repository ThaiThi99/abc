import React, { useState } from "react";
import Navbar from "../BackGround/navbar";
import "../cssne/khobangi.css";

const KhoBanGhi: React.FC = () => {
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
      <div className="thedau">
        <Navbar />
        <div className="ttcb">Kho bản ghi</div>
        <form
          onSubmit={handleFormSubmit}
          style={{
            width: "517px",
            height: "48px",
            top: "158px",
            left: "229px",
            padding: "12px 24px",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "space-between",
            background: "#2B2B3F",
            position: "absolute",
          }}
        >
          <input
            type="text"
            placeholder="Tên bản ghi, ca sĩ,..."
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
          />
          <a type="submit" style={{ background: "#2B2B3F" }}>
            <img src="images/search.png" alt="" />
          </a>
        </form>

        <div className="khungt">
          <div className="khugne">
            <a href="/suatt" style={{ textDecoration: "none" }}>
              <img src="images/sua.png" alt="sua" className="icon1" />
              <div className="texttt">Quản lý phê duyệt</div>
            </a>
          </div>
        </div>

        <div
          style={{
            width: "1541px",
            height: "fit-content",
            top: "294px",
            left: "229px",
            padding: "16px 24px",
            borderRadius: "16px",
            display: "flex",
            justifyContent: "space-between",
            background: "#2F2F41B2",
            position: "absolute",
          }}
        >
          <table
            style={{
              width: "1485px",
              // height: "604px",
              height: "fit-content",
            }}
          >
            <tr style={{ color: "#FFAC69" }}>
              <th>stt</th>
              <th>Tên bản ghi</th>
              <th>Mã ISRC</th>
              <th>Thời lượng</th>
              <th>Ca sĩ</th>
              <th>Tác giả</th>
              <th>Thể loại</th>
              <th>Định dạng</th>
              <th>Thời hạn sử dụng</th>
              <th></th>
              <th></th>
            </tr>
            <tr
              style={{
                color: "#FFFFFF",
                marginBottom: "1px",
                borderBottom: "1px solid #727288",
              }}
            >
              <td>1</td>
              <td>Mất em </td>
              <td>KRA40105463</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Ballad</td>
              <td>Audio</td>
              <td>
                Còn thời hạn <br />
                02/10/2019
              </td>
              <td>
                <a href="" style={{ color: "#FF7506" }}>
                  Cập nhật
                </a>
              </td>
              <td>
                <a href="" style={{ color: "#FF7506" }}>
                  Nghe
                </a>
              </td>
            </tr>
            <tr
              style={{
                color: "#FFFFFF",
                marginBottom: "1px",
                borderBottom: "solid 1px #727288",
              }}
            >
              <td>2</td>
              <td>Mất em </td>
              <td>KRA40105463</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Ballad</td>
              <td>Audio</td>
              <td>
                Còn thời hạn <br />
                02/10/2019
              </td>
              <td>
                <a href="" style={{ color: "#FF7506" }}>
                  Cập nhật
                </a>
              </td>
              <td>
                <a href="" style={{ color: "#FF7506" }}>
                  Nghe
                </a>
              </td>
            </tr>
            <tr
              style={{
                color: "#FFFFFF",
                marginBottom: "1px",
                borderBottom: "solid 1px #727288",
              }}
            >
              <td>3</td>
              <td>Mất em </td>
              <td>KRA40105463</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Ballad</td>
              <td>Audio</td>
              <td>
                Còn thời hạn <br />
                02/10/2019
              </td>
              <td>
                <a href="" style={{ color: "#FF7506" }}>
                  Cập nhật
                </a>
              </td>
              <td>
                <a href="" style={{ color: "#FF7506" }}>
                  Nghe
                </a>
              </td>
            </tr>
            <tr
              style={{
                color: "#FFFFFF",
                marginBottom: "1px",
                borderBottom: "solid 1px #727288",
              }}
            >
              <td>4</td>
              <td>Mất em </td>
              <td>KRA40105463</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Ballad</td>
              <td>Audio</td>
              <td>
                Còn thời hạn <br />
                02/10/2019
              </td>
              <td>
                <a href="" style={{ color: "#FF7506" }}>
                  Cập nhật
                </a>
              </td>
              <td>
                <a href="" style={{ color: "#FF7506" }}>
                  Nghe
                </a>
              </td>
            </tr>

            <tr
              style={{
                color: "#FFFFFF",
                marginBottom: "1px",
                borderBottom: "solid 1px #727288",
              }}
            >
              <td>5</td>
              <td>Mất em </td>
              <td>KRA40105463</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Ballad</td>
              <td>Audio</td>
              <td>
                Còn thời hạn <br />
                02/10/2019
              </td>
              <td>
                <a href="" style={{ color: "#FF7506" }}>
                  Cập nhật
                </a>
              </td>
              <td>
                <a href="" style={{ color: "#FF7506" }}>
                  Nghe
                </a>
              </td>
            </tr>

            <tr
              style={{
                color: "#FFFFFF",
                marginBottom: "1px",
                borderBottom: "solid 1px #727288",
              }}
            >
              <td>6</td>
              <td>Mất em </td>
              <td>KRA40105463</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Ballad</td>
              <td>Audio</td>
              <td>
                Còn thời hạn <br />
                02/10/2019
              </td>
              <td>
                <a href="" style={{ color: "#FF7506" }}>
                  Cập nhật
                </a>
              </td>
              <td>
                <a href="" style={{ color: "#FF7506" }}>
                  Nghe
                </a>
              </td>
            </tr>

            <tr
              style={{
                color: "#FFFFFF",
                marginBottom: "1px",
                borderBottom: "solid 1px #727288",
              }}
            >
              <td>7</td>
              <td>Mất em </td>
              <td>KRA40105463</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Ballad</td>
              <td>Audio</td>
              <td>
                Còn thời hạn <br />
                02/10/2019
              </td>
              <td>
                <a href="" style={{ color: "#FF7506" }}>
                  Cập nhật
                </a>
              </td>
              <td>
                <a href="" style={{ color: "#FF7506" }}>
                  Nghe
                </a>
              </td>
            </tr>

            <tr
              style={{
                color: "#FFFFFF",
                marginBottom: "1px",
                borderBottom: "solid 1px #727288",
              }}
            >
              <td>8</td>
              <td>Mất em </td>
              <td>KRA40105463</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Ballad</td>
              <td>Audio</td>
              <td>
                Còn thời hạn <br />
                02/10/2019
              </td>
              <td>
                <a href="" style={{ color: "#FF7506" }}>
                  Cập nhật
                </a>
              </td>
              <td>
                <a href="" style={{ color: "#FF7506" }}>
                  Nghe
                </a>
              </td>
            </tr>

            <tr
              style={{
                color: "#FFFFFF",
                marginBottom: "1px",
                borderBottom: "solid 1px #727288",
              }}
            >
              <td>9</td>
              <td>Mất em </td>
              <td>KRA40105463</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Ballad</td>
              <td>Audio</td>
              <td>
                Còn thời hạn <br />
                02/10/2019
              </td>
              <td>
                <a href="" style={{ color: "#FF7506" }}>
                  Cập nhật
                </a>
              </td>
              <td>
                <a href="" style={{ color: "#FF7506" }}>
                  Nghe
                </a>
              </td>
            </tr>

            <tr
              style={{
                color: "#FFFFFF",
                marginBottom: "1px",
                borderBottom: "solid 1px #727288",
              }}
            >
              <td>10</td>
              <td>Mất em </td>
              <td>KRA40105463</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Ballad</td>
              <td>Audio</td>
              <td>
                Còn thời hạn <br />
                02/10/2019
              </td>
              <td>
                <a href="" style={{ color: "#FF7506" }}>
                  Cập nhật
                </a>
              </td>
              <td>
                <a href="" style={{ color: "#FF7506" }}>
                  Nghe
                </a>
              </td>
            </tr>

            <tr
              style={{
                color: "#FFFFFF",
                marginBottom: "1px",
                borderBottom: "solid 1px #727288",
              }}
            >
              <td>11</td>
              <td>Mất em </td>
              <td>KRA40105463</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Ballad</td>
              <td>Audio</td>
              <td>
                Còn thời hạn <br />
                02/10/2019
              </td>
              <td>
                <a href="" style={{ color: "#FF7506" }}>
                  Cập nhật
                </a>
              </td>
              <td>
                <a href="" style={{ color: "#FF7506" }}>
                  Nghe
                </a>
              </td>
            </tr>

            <tr
              style={{
                color: "#FFFFFF",
                marginBottom: "1px",
                borderBottom: "solid 1px #727288",
              }}
            >
              <td>12</td>
              <td>Mất em </td>
              <td>KRA40105463</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Phan Mạnh Quỳnh</td>
              <td>Ballad</td>
              <td>Audio</td>
              <td>
                Còn thời hạn <br />
                02/10/2019
              </td>
              <td>
                <a href="" style={{ color: "#FF7506" }}>
                  Cập nhật
                </a>
              </td>
              <td>
                <a href="" style={{ color: "#FF7506" }}>
                  Nghe
                </a>
              </td>
            </tr>
            <div
              style={{
                width: "fit-content",
                maxWidth: "1485px",
                height: "fit-content",
                minHeight: "32px",
                display: "flex",
                justifyContent: "space-between",
                gap: "8px",
                marginTop: 30,
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
                <a href="/#" className="thea">
                  &lt;
                </a>
                <a href="/#" className="thea ">
                  1
                </a>
                <a href="/#" className="thea active">
                  2
                </a>
                <a href="/#" className="thea">
                  3
                </a>
                <a href="/#" className="thea">
                  ...
                </a>
                <a href="/#" className="thea">
                  100
                </a>
                <a href="/#" className="thea">
                  &gt;
                </a>
              </div>
            </div>
          </table>
        </div>
      </div>
    </>
  );
};
export default KhoBanGhi;
