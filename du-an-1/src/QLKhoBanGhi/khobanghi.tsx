import React, { useState } from "react";
import Navbar from "../BackGround/navbar";
import "../cssne/Trang1.css";

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
              background: "#2B2B3F",
              color: "#727288",
            }}
          />
          <button type="submit" style={{ background: "#2B2B3F" }}>
            <img src="images/search.png" alt="" />
          </button>
        </form>
        <div
          style={{
            width: "1541px",
            height: "722px",
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
              height: "604px",
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
                borderBottom: "solid 1px white",
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
                borderBottom: "solid 1px white",
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
                borderBottom: "solid 1px white",
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
                borderBottom: "solid 1px white",
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
                borderBottom: "solid 1px white",
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
                borderBottom: "solid 1px white",
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
                borderBottom: "solid 1px white",
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
                borderBottom: "solid 1px white",
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
                borderBottom: "solid 1px white",
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
                borderBottom: "solid 1px white",
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
                borderBottom: "solid 1px white",
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
                borderBottom: "solid 1px white",
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
          </table>
        </div>
      </div>
    </>
  );
};
export default KhoBanGhi;
