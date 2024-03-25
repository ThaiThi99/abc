import React, { useState } from "react";
import Navbar from "../BackGround/navbar";
import "../cssne/khobangi.css";
import "../cssne/playlist.css";

interface DSNhac {
  id: number;
  hinh: string;
  title: string;
}

const DSPlayList1: React.FC = () => {
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
      hinh: "hoa.png",
      title: "Handcrafted Fresh Bacon Multy",
    },
    {
      id: 2,
      hinh: "hoa1.png",
      title: "Handcrafted Fresh Bacon Multy",
    },
    {
      id: 3,
      hinh: "hoa2.png",
      title: "Handcrafted Fresh Bacon Multy",
    },
    {
      id: 4,
      hinh: "hoa3.png",
      title: "Handcrafted Fresh Bacon Multy",
    },
    {
      id: 5,
      hinh: "hoa4.png",
      title: "Handcrafted Fresh Bacon Multy",
    },
    {
      id: 6,
      hinh: "hoa5.png",
      title: "Handcrafted Fresh Bacon Multy",
    },
    {
      id: 7,
      hinh: "hoa6.png",
      title: "Handcrafted Fresh Bacon Multy",
    },
    {
      id: 8,
      hinh: "hoa7.png",
      title: "Handcrafted Fresh Bacon Multy",
    },
  ]);
  const urlImage = `/images/`;

  return (
    <>
      <div className="thedau">
        <Navbar />
        <div className="ttcb4">Playlist</div>
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
          <a href="/dsplaylist">
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
          <a href="/dsplaylist1">
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
            width: 1540,
            height: "fit-content",
            position: "absolute",
            top: 230,
            left: 229,
            padding: "16px 24px",
            borderRadius: 16,
            gap: 56,
          }}
        >
          <div
            className="row"
            style={{
              justifyContent: "space-between",
            }}
          >
            {danhsachs.map((item) => (
              <div className="formtong4 col" key={item.id}>
                <img src={urlImage + item.hinh} alt="" className="hinhanh4" />
                <div style={{ width: 342, height: 156 }}>
                  <div className="text4">
                    <div className="tieude4" style={{ marginBottom: 8 }}>
                      {item.title}{" "}
                    </div>
                    <div
                      style={{
                        width: 277,
                        gap: 4,
                        height: 26,
                        display: "flex",
                        fontSize: "12px",
                      }}
                    >
                      <div
                        style={{
                          padding: "4px 8px 4px 8px",
                          border: "1px solid #727288",
                          opacity: "70%",
                          font: "Montserrat",
                          width: "92px",
                          marginRight: 8,
                          fontWeight: 400,
                        }}
                      >
                        Chủ đề ví dụ
                      </div>
                      <div
                        style={{
                          padding: "4px 8px 4px 8px",
                          marginRight: 8,
                          border: "1px solid #727288",
                          opacity: "70%",
                          width: 41,
                        }}
                      >
                        Pop
                      </div>
                      <div
                        style={{
                          padding: "4px 8px 4px 8px",
                          marginRight: 8,
                          border: "1px solid #727288",
                          opacity: "70%",
                          width: 71,
                        }}
                      >
                        Trending
                      </div>
                      <div
                        style={{
                          padding: "4px 8px 4px 8px",
                          border: "1px solid #727288",
                          opacity: "70%",
                          width: 49,
                        }}
                      >
                        Good
                      </div>
                    </div>
                    <div>
                      Người tạo: <span style={{ opacity: "70%" }}>Admin</span>
                      <br />
                      ngày tạo:{" "}
                      <span style={{ opacity: "70%" }}>12/12/2020</span>
                    </div>
                    <div className="khungngoai4">
                      <div className="khungtrong4" style={{ width: 69 }}>
                        <div
                          style={{
                            fontSize: 8,
                            opacity: "70%",
                            textAlign: "center",
                          }}
                        >
                          Số bản ghi
                        </div>
                        <div style={{ textAlign: "center" }}>20</div>
                      </div>
                      <div className="khungtrong4" style={{ width: 69 }}>
                        <div
                          style={{
                            fontSize: 8,
                            opacity: "70%",
                            textAlign: "center",
                          }}
                        >
                          Thời lượng
                        </div>
                        <div style={{ textAlign: "center" }}>1:03:00</div>
                      </div>
                    </div>

                    <div className="sua4">
                      <img
                        src="images/info.png"
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="khungPT4">
              <div className="ht4">
                Hiển thị
                <div style={{ display: "inline-flex" }}>
                  <div className="khungso4">8</div>
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
        </div>
      </div>
    </>
  );
};
export default DSPlayList1;
