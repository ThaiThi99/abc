import React, { useState } from "react";
import Navbar from "../BackGround/navbar";
import "../cssne/khobangi.css";

const KhoBanGhi1: React.FC = () => {
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
        {/* danh sach dropdown */}
        <div
          className="textt4"
          style={{
            width: "68px",
            top: "238px",
            left: "229px",
          }}
        >
          Thể loại:
        </div>
        <select
          className="select4"
          style={{
            width: "131px",
            top: "230px",
            left: "313px",
          }}
        >
          <option value="all">Tất cả</option>
          <option value="performer">Pop</option>
          <option value="manufacturer">EDM</option>
          <option value="manufacturer">Ballad</option>
        </select>
        <div
          className="textt4"
          style={{
            width: "91px",
            top: "238px",
            left: "508px",
          }}
        >
          Định dạng:
        </div>
        <select
          className="select4"
          style={{
            width: "131px",
            top: "230px",
            left: "615px",
          }}
        >
          <option value="all">Tất cả</option>
          <option value="performer">Âm thanh</option>
          <option value="manufacturer">Video</option>
        </select>
        <div
          className="textt4"
          style={{
            width: "148px",
            top: "238px",
            left: "810px",
          }}
        >
          Thời hạn sử dụng:
        </div>
        <select
          className="select4"
          style={{
            width: "131px",
            top: "230px",
            left: "974px",
          }}
        >
          <option value="all">Tất cả</option>
          <option value="performer">Còn thời hạn</option>
          <option value="manufacturer">Hết hạn</option>
        </select>
        <div
          className="textt4"
          style={{
            width: "88px",
            top: "238px",
            left: "1169px",
          }}
        >
          Trạng thái:
        </div>
        <select
          className="select4"
          style={{
            width: "200px",
            top: "230px",
            left: "1273px",
          }}
        >
          <option value="all">Tất cả</option>
          <option value="performer">Duyệt bởi người dùng</option>
          <option value="manufacturer">Duyệt tự động</option>
        </select>
        {/* danh sach dropdown */}

        {/* icon menu */}
        <div
          className="textt4"
          style={{
            top: "238px",
            left: "1690px",
          }}
        >
          <a href="#">
            <img src="images/List.png" className="icon4" alt="" />
          </a>
        </div>

        <div
          className="text4"
          style={{
            top: "238px",
            left: "1738px",
          }}
        >
          <a href="#">
            <img src="images/tab.png" className="icon4" alt="" />
          </a>
        </div>
        {/* icon menu */}

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
            width: 1540,
            height: "722px",
            position: "absolute",
            top: 294,
            left: 229,
            padding: "16px 24px",
            borderRadius: 16,
            gap: 56,
            backgroundColor: "#2F2F41B2",
          }}
        >
          <div
            className="row"
            style={{
              width: "1540px",
              height: "316px",
              justifyContent: "space-between",
            }}
          >
            <div className="formtong4 col">
              <img src="images/hoa.png" alt="" className="hinhanh4" />
              <div style={{ width: 342, height: 156 }}>
                <div className="text4">
                  <div className="tieude4">Handcrafted Fresh Bacon Multy</div>
                  <div className="noidung4">Ca sĩ: Bella Poarch</div>
                  <div className="noidung4">Sáng tác: Leilani Zulauf</div>
                  <div className="noidung4">Số hợp đồng: HD395738503</div>
                  <div className="khungngoai4">
                    <div className="khungtrong4">
                      <div className="theloai4">Thể loại</div>
                      <div className="loai4">Pop</div>
                    </div>
                    <div className="khungtrong4" style={{ width: 68 }}>
                      <div className="theloai4" style={{ width: 45 }}>
                        Định dạng
                      </div>
                      <div className="loai4">Audio</div>
                    </div>
                    <div className="khungtrong4" style={{ width: 68 }}>
                      <div className="theloai4" style={{ width: 45 }}>
                        Thời lượng
                      </div>
                      <div className="loai4">03:00</div>
                    </div>
                  </div>
                  <div className="sua4">
                    <img
                      src="images/sua.png"
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="formtong4 col">
              <img src="images/hoa1.png" alt="" className="hinhanh4" />
              <div style={{ width: 342, height: 156 }}>
                <div className="text4">
                  <div className="tieude4">Handcrafted Fresh Bacon Multy</div>
                  <div className="noidung4">Ca sĩ: Bella Poarch</div>
                  <div className="noidung4">Sáng tác: Leilani Zulauf</div>
                  <div className="noidung4">Số hợp đồng: HD395738503</div>
                  <div className="khungngoai4">
                    <div className="khungtrong4">
                      <div className="theloai4">Thể loại</div>
                      <div className="loai4">Pop</div>
                    </div>
                    <div className="khungtrong4" style={{ width: 68 }}>
                      <div className="theloai4" style={{ width: 45 }}>
                        Định dạng
                      </div>
                      <div className="loai4">Audio</div>
                    </div>
                    <div className="khungtrong4" style={{ width: 68 }}>
                      <div className="theloai4" style={{ width: 45 }}>
                        Thời lượng
                      </div>
                      <div className="loai4">03:00</div>
                    </div>
                  </div>
                  <div className="sua4">
                    <img
                      src="images/sua.png"
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="formtong4 col">
              <img src="images/hoa2.png" alt="" className="hinhanh4" />
              <div style={{ width: 342, height: 156 }}>
                <div className="text4">
                  <div className="tieude4">Handcrafted Fresh Bacon Multy</div>
                  <div className="noidung4">Ca sĩ: Bella Poarch</div>
                  <div className="noidung4">Sáng tác: Leilani Zulauf</div>
                  <div className="noidung4">Số hợp đồng: HD395738503</div>
                  <div className="khungngoai4">
                    <div className="khungtrong4">
                      <div className="theloai4">Thể loại</div>
                      <div className="loai4">Pop</div>
                    </div>
                    <div className="khungtrong4" style={{ width: 68 }}>
                      <div className="theloai4" style={{ width: 45 }}>
                        Định dạng
                      </div>
                      <div className="loai4">Audio</div>
                    </div>
                    <div className="khungtrong4" style={{ width: 68 }}>
                      <div className="theloai4" style={{ width: 45 }}>
                        Thời lượng
                      </div>
                      <div className="loai4">03:00</div>
                    </div>
                  </div>
                  <div className="sua4">
                    <img
                      src="images/sua.png"
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="formtong4 col">
              <img src="images/hoa3.png" alt="" className="hinhanh4" />
              <div style={{ width: 342, height: 156 }}>
                <div className="text4">
                  <div className="tieude4">Handcrafted Fresh Bacon Multy</div>
                  <div className="noidung4">Ca sĩ: Bella Poarch</div>
                  <div className="noidung4">Sáng tác: Leilani Zulauf</div>
                  <div className="noidung4">Số hợp đồng: HD395738503</div>
                  <div className="khungngoai4">
                    <div className="khungtrong4">
                      <div className="theloai4">Thể loại</div>
                      <div className="loai4">Pop</div>
                    </div>
                    <div className="khungtrong4" style={{ width: 68 }}>
                      <div className="theloai4" style={{ width: 45 }}>
                        Định dạng
                      </div>
                      <div className="loai4">Audio</div>
                    </div>
                    <div className="khungtrong4" style={{ width: 68 }}>
                      <div className="theloai4" style={{ width: 45 }}>
                        Thời lượng
                      </div>
                      <div className="loai4">03:00</div>
                    </div>
                  </div>
                  <div className="sua4">
                    <img
                      src="images/sua.png"
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{
              width: "1540px",
              height: "316px",
              justifyContent: "space-between",
              marginTop: 29,
            }}
          >
            <div className="formtong4 col">
              <img src="images/hoa4.png" alt="" className="hinhanh4" />
              <div style={{ width: 342, height: 156 }}>
                <div className="text4">
                  <div className="tieude4">Handcrafted Fresh Bacon Multy</div>
                  <div className="noidung4">Ca sĩ: Bella Poarch</div>
                  <div className="noidung4">Sáng tác: Leilani Zulauf</div>
                  <div className="noidung4">Số hợp đồng: HD395738503</div>
                  <div className="khungngoai4">
                    <div className="khungtrong4">
                      <div className="theloai4">Thể loại</div>
                      <div className="loai4">Pop</div>
                    </div>
                    <div className="khungtrong4" style={{ width: 68 }}>
                      <div className="theloai4" style={{ width: 45 }}>
                        Định dạng
                      </div>
                      <div className="loai4">Audio</div>
                    </div>
                    <div className="khungtrong4" style={{ width: 68 }}>
                      <div className="theloai4" style={{ width: 45 }}>
                        Thời lượng
                      </div>
                      <div className="loai4">03:00</div>
                    </div>
                  </div>
                  <div className="sua4">
                    <img
                      src="images/sua.png"
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="formtong4 col">
              <img src="images/hoa5.png" alt="" className="hinhanh4" />
              <div style={{ width: 342, height: 156 }}>
                <div className="text4">
                  <div className="tieude4">Handcrafted Fresh Bacon Multy</div>
                  <div className="noidung4">Ca sĩ: Bella Poarch</div>
                  <div className="noidung4">Sáng tác: Leilani Zulauf</div>
                  <div className="noidung4">Số hợp đồng: HD395738503</div>
                  <div className="khungngoai4">
                    <div className="khungtrong4">
                      <div className="theloai4">Thể loại</div>
                      <div className="loai4">Pop</div>
                    </div>
                    <div className="khungtrong4" style={{ width: 68 }}>
                      <div className="theloai4" style={{ width: 45 }}>
                        Định dạng
                      </div>
                      <div className="loai4">Audio</div>
                    </div>
                    <div className="khungtrong4" style={{ width: 68 }}>
                      <div className="theloai4" style={{ width: 45 }}>
                        Thời lượng
                      </div>
                      <div className="loai4">03:00</div>
                    </div>
                  </div>
                  <div className="sua4">
                    <img
                      src="images/sua.png"
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="formtong4 col">
              <img src="images/hoa6.png" alt="" className="hinhanh4" />
              <div style={{ width: 342, height: 156 }}>
                <div className="text4">
                  <div className="tieude4">Handcrafted Fresh Bacon Multy</div>
                  <div className="noidung4">Ca sĩ: Bella Poarch</div>
                  <div className="noidung4">Sáng tác: Leilani Zulauf</div>
                  <div className="noidung4">Số hợp đồng: HD395738503</div>
                  <div className="khungngoai4">
                    <div className="khungtrong4">
                      <div className="theloai4">Thể loại</div>
                      <div className="loai4">Pop</div>
                    </div>
                    <div className="khungtrong4" style={{ width: 68 }}>
                      <div className="theloai4" style={{ width: 45 }}>
                        Định dạng
                      </div>
                      <div className="loai4">Audio</div>
                    </div>
                    <div className="khungtrong4" style={{ width: 68 }}>
                      <div className="theloai4" style={{ width: 45 }}>
                        Thời lượng
                      </div>
                      <div className="loai4">03:00</div>
                    </div>
                  </div>
                  <div className="sua4">
                    <img
                      src="images/sua.png"
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="formtong4 col">
              <img src="images/hoa7.png" alt="" className="hinhanh4" />
              <div style={{ width: 342, height: 156 }}>
                <div className="text4">
                  <div className="tieude4">Handcrafted Fresh Bacon Multy</div>
                  <div className="noidung4">Ca sĩ: Bella Poarch</div>
                  <div className="noidung4">Sáng tác: Leilani Zulauf</div>
                  <div className="noidung4">Số hợp đồng: HD395738503</div>
                  <div className="khungngoai4">
                    <div className="khungtrong4">
                      <div className="theloai4">Thể loại</div>
                      <div className="loai4">Pop</div>
                    </div>
                    <div className="khungtrong4" style={{ width: 68 }}>
                      <div className="theloai4" style={{ width: 45 }}>
                        Định dạng
                      </div>
                      <div className="loai4">Audio</div>
                    </div>
                    <div className="khungtrong4" style={{ width: 68 }}>
                      <div className="theloai4" style={{ width: 45 }}>
                        Thời lượng
                      </div>
                      <div className="loai4">03:00</div>
                    </div>
                  </div>
                  <div className="sua4">
                    <img
                      src="images/sua.png"
                      alt=""
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="khungPT4">
            <div className="ht4">
              Hiển thị
              <div style={{ display: "inline-flex" }}>
                <div className="khungso4">12</div>
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
    </>
  );
};
export default KhoBanGhi1;
