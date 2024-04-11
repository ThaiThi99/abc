import { useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar1 from "../BackGround/navbar1";
import "../cssne/ba.css";

const HopDongKT = () => {
  const location = useLocation();
  let user = location.state && location.state.user;
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
              className="parent-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Quản lý
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Quản lý hợp đồng
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Chi Tiết
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
              Hợp đồng khai thác - HD123
            </p>
          </div>
          <div className="khungt3" style={{ top: 186, height: 242 }}>
            <div className="khugne3" style={{ height: 112 }}>
              <a href="/bansaohdkt" style={{ textDecoration: "none" }}>
                <img src="images/sua.png" alt="sua" className="icon1" />
                <div className="textt">Chỉnh sửa</div>
              </a>
            </div>

            <div className="khugne3" style={{ height: 130 }}>
              <div data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="images/no.png" alt="doimk" className="icon1" />
                <div className="textt">
                  Hủy <br /> hợp đồng
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              top: "202px",
              left: "81px",
              width: "120px",
              height: "24px",
              color: "white",
            }}
          >
            Tên hợp đồng:
            <br />
            Số hợp đồng:
            <br />
            Ngày hiệu lực:
            <br />
            Ngày hết hạn:
          </div>

          <div
            style={{
              position: "absolute",
              top: "202px",
              left: "220px",
              width: "315px",
              height: "24px",
              opacity: 0.7,
              color: "white",
            }}
          >
            Hợp đồng kinh doanh
            <br />
            123
            <br />
            02/06/2021
            <br />
            02/06/2021
          </div>

          <div
            style={{
              position: "absolute",
              top: "202px",
              left: "721px",
              width: "119px",
              height: "24px",
              color: "white",
            }}
          >
            Đính kèm tệp:
          </div>

          <div
            style={{
              width: 208,
              height: 24,
              top: 202,
              left: 868,
              position: "absolute",
              color: "white",
            }}
          >
            <i style={{ marginRight: 8 }} className="fa-solid fa-file-word"></i>
            hetthuongcannho.doc
            <br />
            <i style={{ marginRight: 8 }} className="fa-solid fa-file-word"></i>
            hetthuongcannho.doc
          </div>

          <div
            style={{
              position: "absolute",
              top: "202px",
              left: "1269px",
              width: "315px",
              height: "24px",
              opacity: 0.7,
              color: "white",
            }}
          >
            Loại hợp đồng:
            <br />
            Giá trị hợp đồng (VNĐ):
            <br />
            Giá trị phân phối (VNĐ/ngày):
            <br />
            Tình trạng:
          </div>

          <div
            style={{
              position: "absolute",
              top: "202px",
              left: "1529px",
              width: "315px",
              height: "24px",
              opacity: 0.7,
              color: "white",
            }}
          >
            Trọn gói
            <br />
            365.000.000
            <br />
            1.000.000
            <br />
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#347AFF",
                marginRight: "5px",
                display: "inline-block",
                marginBottom: "1.5px",
              }}
            ></div>
            Đang hiệu lực
          </div>

          <div
            style={{
              height: 24,
              top: 522,
              left: 80,
              position: "absolute",
              color: "#FFFFFF",
            }}
          >
            Tên đơn vị sử dụng:
            <span style={{ left: 267, position: "absolute", width: 114 }}>
              Công ty TNHH MTV Âu Lạc
            </span>
            <br />
            Người đại diện:
            <span style={{ left: 267, position: "absolute", width: 114 }}>
              Nguyễn văn A
            </span>
            <br />
            Chức vụ:
            <span style={{ left: 267, position: "absolute", width: 114 }}>
              Giám đốc
            </span>
            <br />
            Ngày sinh:
            <span style={{ left: 267, position: "absolute", width: 114 }}>
              01/05/1984
            </span>
            <br />
            Quốc tịch:
            <span style={{ left: 267, position: "absolute", width: 114 }}>
              Việt Nam
            </span>
            <br />
            Số điện thoại:
            <span style={{ left: 267, position: "absolute", width: 137 }}>
              123456789012
            </span>
            <br />
            Email:
            <span style={{ left: 267, position: "absolute", width: 137 }}>
              nguyenvana@gmail.com
            </span>
          </div>
          <div
            style={{
              height: 24,
              top: 522,
              left: 750,
              position: "absolute",
              color: "#FFFFFF",
            }}
          >
            Giới tính:
            <br />
            CMND/ CCCD:
            <br />
            Ngày cấp:
            <br />
            Nơi cấp:
            <br />
            Mã số thuế:
            <br />
            Nơi cư trú:
          </div>
          <div
            style={{
              height: 24,
              top: 522,
              color: "#FFFFFF",
              left: 870,
              position: "absolute",
              width: 293,
            }}
          >
            Nam
            <br />
            123456789012
            <br />
            02/06/2005
            <br />
            Tp.HCM, Việt Nam
            <br />
            123456789012
            <br />
            69/53, Nguyễn Gia Trí, Phường 25,
            <br />
            Quận Bình Thạnh, Thành phố Hồ
            <br />
            Chí Minh
          </div>
          <div
            style={{
              height: 24,
              top: 522,
              color: "#FFFFFF",
              left: 1269,
              position: "absolute",
              width: 181,
            }}
          >
            Tên đăng nhập:
            <br />
            Mật khẩu:
            <br />
            Số tài khoản:
            <br />
            Ngân hàng:
          </div>
          <div
            style={{
              height: 24,
              top: 522,
              color: "#FFFFFF",
              left: 1511,
              position: "absolute",
              width: 181,
            }}
          >
            vuonganhtu123
            <br />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
            <br />
            123456789012
            <br />
            ACB - Ngân hàng Á Châu
          </div>

          {/* showModal     */}
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
                    Hủy hợp đồng uỷ quyền
                  </h5>
                  <textarea
                    placeholder="Cho chúng tôi biết lý do bạn muốn huỷ hợp đồng khai thác này..."
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
                          color: "white",
                          background: "#FF7506",
                        }}
                        data-bs-dismiss="modal"
                      >
                        Hủy hợp đồng
                      </button>

                      <button
                        className="butoon"
                        style={{
                          color: "#FF7506",
                          backgroundColor: "transparent",
                          marginLeft: "32px",
                        }}
                        data-bs-dismiss="modal"
                      >
                        Quay lại
                      </button>
                    </div>
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

export default HopDongKT;
