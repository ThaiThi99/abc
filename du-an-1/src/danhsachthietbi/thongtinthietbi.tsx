import { useState } from "react";
import Navbar1 from "../BackGround/navbar1";
import "../cssne/khobangi.css";

const ThongTinThietBi = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div style={{ width: "100%", display: "flex" }}>
        <Navbar1 />
        <div>
          <div className="khungt" style={{ height: 372 }}>
            <div
              className="khugne"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <a style={{ textDecoration: "none" }}>
                <img src="images/sua.png" alt="sua" className="icon1" />
                <div className="texttt">Chỉnh sửa</div>
              </a>
            </div>
            <div className="khugne">
              <a style={{ textDecoration: "none" }}>
                <img src="images/doimk.png" alt="sua" className="icon1" />
                <div className="texttt">
                  Khôi phục <br /> mật khẩu
                </div>
              </a>
            </div>
            <div
              className="khugne"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <a style={{ textDecoration: "none" }}>
                <img src="images/doi.png" alt="sua" className="icon1" />
                <div className="texttt">
                  Khôi phục <br /> bộ nhớ
                </div>
              </a>
            </div>
          </div>

          <div>
            <div
              style={{
                top: 86,
                left: 78,
                position: "absolute",
              }}
            >
              <a style={{ color: "#F5F5FF", textDecoration: "none" }} href="/#">
                Danh sách thiết bị
              </a>
              <span className="separator" style={{ color: "#FFAC69" }}>
                &gt;
              </span>
              <a style={{ color: "#F5F5FF", textDecoration: "none" }} href="/#">
                Chi tiết thiết bị
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
                Thông tin thiết bị - Device12233444
              </p>
            </div>
          </div>
          <div
            style={{
              width: "1682px",
              height: "480.29px",
              top: "202px",
              left: "80px",
              position: "absolute",
              borderRadius: "8px",
              background: "#2B2B3F",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "340px",
                height: "364px",
                top: "24px",
                left: "125px",
              }}
            >
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FF7506",
                  top: 24,
                  position: "absolute",
                }}
              >
                Thông tin thiết bị
              </div>
              <div
                style={{
                  width: "340px",
                  height: "160px",
                  position: "absolute",
                  top: "80px",
                  borderRadius: "16px",
                }}
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/hinh1.png?alt=media&token=5e3ebba7-a0e2-475d-9bd4-66761e3d7f8f"
                  alt="hinh1"
                />
              </div>
              <div style={{ position: "absolute", top: 272, color: "white" }}>
                <div
                  style={{
                    height: 8,
                    width: 8,
                    borderRadius: "50%",
                    background: "#18E306",
                    display: "inline-block",
                    marginRight: 3,
                    marginBottom: 1,
                  }}
                ></div>
                Hoạt động
              </div>
              <div style={{ position: "absolute", top: 316, color: "white" }}>
                Ghi chú:
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 316,
                  color: "white",
                  left: 108,
                }}
              >
                Văn bản này không những <br /> đã tồn tại năm thế kỉ, mà khi{" "}
                <br /> được áp dụng vào tin học
              </div>
            </div>

            <div
              style={{
                width: "210px",
                height: "24px",
                top: "24px",
                left: "674px",
                position: "absolute",
                color: "#FF7506",
                fontSize: 24,
              }}
            >
              DEVICE12233444
            </div>
            <div
              style={{
                width: "210px",
                height: "24px",
                top: "80px",
                left: "674px",
                position: "absolute",
                color: "white",
              }}
            >
              SKU/ID:
            </div>
            <div
              style={{
                width: "210px",
                height: "24px",
                top: "128px",
                left: "674px",
                position: "absolute",
                color: "white",
              }}
            >
              Địa chỉ Mac:
            </div>
            <div
              style={{
                width: "210px",
                height: "24px",
                top: "176px",
                left: "674px",
                position: "absolute",
                color: "white",
              }}
            >
              Tên đăng nhập:
            </div>
            <div
              style={{
                width: "210px",
                height: "24px",
                top: "224px",
                left: "674px",
                position: "absolute",
                color: "white",
              }}
            >
              Định dạng:
            </div>
            <div
              style={{
                width: "210px",
                height: "24px",
                top: "272px",
                left: "674px",
                position: "absolute",
                color: "white",
              }}
            >
              Vị trí:
            </div>
            <div
              style={{
                width: "210px",
                height: "24px",
                top: "320px",
                left: "674px",
                position: "absolute",
                color: "white",
              }}
            >
              Thời hạn bảo hành:
            </div>
            <div
              style={{
                width: "210px",
                height: "24px",
                top: "368px",
                left: "674px",
                position: "absolute",
                color: "white",
              }}
            >
              Trạng thái thiết bị:
            </div>

            <div
              style={{
                width: "210px",
                height: "24px",
                top: "80px",
                left: "867px",
                position: "absolute",
                color: "white",
                opacity: "50%",
              }}
            >
              A23434455556
            </div>
            <div
              style={{
                width: "210px",
                height: "24px",
                top: "128px",
                left: "867px",
                position: "absolute",
                color: "white",
                opacity: "50%",
              }}
            >
              113.56.79.01
            </div>
            <div
              style={{
                width: "210px",
                height: "24px",
                top: "176px",
                left: "867px",
                position: "absolute",
                color: "white",
                opacity: "50%",
              }}
            >
              User322334
            </div>
            <div
              style={{
                width: "210px",
                height: "24px",
                top: "224px",
                left: "867px",
                position: "absolute",
                color: "white",
                opacity: "50%",
              }}
            >
              Displayable
            </div>
            <div
              style={{
                width: "210px",
                height: "24px",
                top: "272px",
                left: "867px",
                position: "absolute",
                color: "white",
                opacity: "50%",
              }}
            >
              Ho Chi Minh
            </div>
            <div
              style={{
                width: "210px",
                height: "24px",
                top: "320px",
                left: "867px",
                position: "absolute",
                color: "white",
                opacity: "50%",
              }}
            >
              22/06/2021
            </div>
            <div
              style={{
                width: "210px",
                height: "24px",
                top: "368px",
                left: "867px",
                position: "absolute",
                color: "white",
                opacity: "50%",
              }}
            >
              Activated
            </div>
            <div
              style={{
                width: "337px",
                height: "128px",
                top: "24px",
                left: "1192px",
                position: "absolute",
              }}
            >
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FF7506",
                  top: 24,
                  position: "absolute",
                }}
              >
                Thông tin thiết bị
              </div>
              <div
                style={{
                  width: "210px",
                  height: "24px",
                  top: "80px",
                  position: "absolute",
                  color: "white",
                }}
              >
                Phiên bản cũ nhất:
              </div>
              <div
                style={{
                  width: "210px",
                  height: "24px",
                  top: "80px",
                  left: "206px",
                  position: "absolute",
                  color: "white",
                  opacity: "50%",
                }}
              >
                12.3 (20/02/2020)
              </div>
              <div
                style={{
                  width: "210px",
                  height: "24px",
                  top: "128px",
                  left: "206px",
                  position: "absolute",
                  color: "white",
                  opacity: "50%",
                }}
              >
                12.3 (20/02/2020)
              </div>
            </div>
            <div
              style={{
                width: "255px",
                height: "128px",
                top: "264px",
                left: "1192px",
                position: "absolute",
              }}
            >
              <div
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "24px",
                  fontWeight: "700",
                  lineHeight: "24px",
                  letterSpacing: "-0.002em",
                  textAlign: "left",
                  color: "#FF7506",
                  top: 24,
                  position: "absolute",
                }}
              >
                Dung lượng bộ nhớ
              </div>
              <div
                style={{
                  width: "210px",
                  height: "24px",
                  marginTop: "68px",
                  position: "absolute",
                  color: "white",
                }}
              >
                Dung lượng
              </div>
              <div
                style={{
                  width: "210px",
                  height: "24px",
                  marginTop: "104px",
                  position: "absolute",
                  color: "white",
                }}
              >
                Còn trống
              </div>
              <div
                style={{
                  width: "210px",
                  height: "24px",
                  marginTop: "68px",
                  left: 206,
                  position: "absolute",
                  color: "white",
                  opacity: "50%",
                }}
              >
                512GB
              </div>
              <div
                style={{
                  width: "210px",
                  height: "24px",
                  marginTop: "104px",
                  position: "absolute",
                  color: "white",
                  opacity: "50%",
                  left: 206,
                }}
              >
                123GB
              </div>
            </div>
          </div>
        </div>

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
              width: "623px",
              height: "740px",
            }}
          >
            <div
              className="modal-content"
              style={{
                backgroundColor: "#3E3E5B",
                width: "623px",
                height: "740px",
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
                  Chỉnh sửa thông tin thiết bị
                </h5>
                <div
                  style={{
                    width: "543px",
                    height: "84px",
                    top: "96px",
                    left: "40px",
                    gap: "12px",
                    position: "absolute",
                    color: "white",
                  }}
                >
                  <div>
                    Tên thiết bị: <span style={{ color: "red" }}>*</span>
                  </div>
                  <div>
                    <input
                      type="text"
                      defaultValue={"Device12233444"}
                      style={{
                        width: "543px",
                        color: "white",
                        height: "48px",
                        padding: "11px 24px 13px 16px",
                        borderRadius: "8px",
                        border: "1px solid #727288",
                        background: "#2B2B3F",
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    width: "543px",
                    height: "84px",
                    top: "196px",
                    left: "40px",
                    gap: "12px",
                    position: "absolute",
                    color: "white",
                  }}
                >
                  <div>
                    SKU/ID: <span style={{ color: "red" }}>*</span>
                  </div>
                  <div>
                    <input
                      type="text"
                      defaultValue={"123345456789"}
                      style={{
                        width: "543px",
                        height: "48px",
                        color: "white",
                        padding: "11px 24px 13px 16px",
                        borderRadius: "8px",
                        border: "1px solid #727288",
                        background: "#2B2B3F",
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    width: "543px",
                    height: "84px",
                    top: "296px",
                    left: "40px",
                    gap: "12px",
                    position: "absolute",
                    color: "white",
                  }}
                >
                  <div>
                    Địa chỉ Mac: <span style={{ color: "red" }}>*</span>
                  </div>
                  <div>
                    <input
                      type="text"
                      defaultValue={"113.56.79.01"}
                      style={{
                        color: "white",
                        width: "543px",
                        height: "48px",
                        padding: "11px 24px 13px 16px",
                        borderRadius: "8px",
                        border: "1px solid #727288",
                        background: "#2B2B3F",
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    width: "543px",
                    height: "84px",
                    top: "396px",
                    left: "40px",
                    gap: "12px",
                    position: "absolute",
                    color: "white",
                  }}
                >
                  <div>
                    Tên đăng nhập: <span style={{ color: "red" }}>*</span>
                  </div>
                  <div>
                    <input
                      type="text"
                      defaultValue={"User322334"}
                      style={{
                        color: "white",
                        width: "543px",
                        height: "48px",
                        padding: "11px 24px 13px 16px",
                        borderRadius: "8px",
                        border: "1px solid #727288",
                        background: "#2B2B3F",
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    width: "543px",
                    height: "84px",
                    top: "496px",
                    left: "40px",
                    gap: "12px",
                    position: "absolute",
                    color: "white",
                  }}
                >
                  <div>Vị trí:</div>
                  <div>
                    <input
                      type="text"
                      defaultValue={"Ho Chi Minh"}
                      style={{
                        color: "white",
                        width: "543px",
                        height: "48px",
                        padding: "11px 24px 13px 16px",
                        borderRadius: "8px",
                        border: "1px solid #727288",
                        background: "#2B2B3F",
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    width: "543px",
                    height: "24px",
                    top: "596px",
                    left: "40px",
                    position: "absolute",
                    color: "white",
                    display: "inline-block",
                  }}
                >
                  <div>
                    Trạng thái thiết bị: <span style={{ color: "red" }}>*</span>
                    <div
                      style={{
                        display: "inline-block",
                        marginLeft: 27,
                        marginRight: 50,
                      }}
                      className="form-check"
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Đã kích hoạt
                      </label>
                    </div>
                    <div
                      style={{ display: "inline-block" }}
                      className="form-check"
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Ngưng kích hoạt
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      width: "368px",
                      height: "48px",
                      top: "652px",
                      left: "127px",
                      gap: "32px",
                      position: "absolute",
                    }}
                  >
                    <button
                      className="butoon"
                      style={{
                        color: "#FF7506",
                        background: "transparent",
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
                      Lưu
                    </button>
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

export default ThongTinThietBi;
