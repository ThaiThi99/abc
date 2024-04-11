import { useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar1 from "../BackGround/navbar1";
const ThemTTBanGhi = () => {
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
              Thêm bản ghi
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
              Thêm hợp đồng ủy quyền mới
            </p>
          </div>
        </div>
        <div
          style={{
            width: "670px",
            height: "568px",
            top: "278px",
            left: "625px",
            borderRadius: "16px",
            border: "1px solid",
            position: "absolute",
            background: "#2B2B3F",
          }}
        >
          <div
            style={{
              width: "483px",
              height: "40px",
              top: "32px",
              left: "94px",
              position: "absolute",
              color: "#FFFFFF",
            }}
          >
            <img
              style={{}}
              src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/check.png?alt=media&token=bfb6b6f7-d5ac-4fee-9124-4ddd740a32f6"
              alt="check"
            />
            <span
              style={{
                marginLeft: 5,
                marginTop: 8,
                position: "absolute",
                fontFamily: "Montserrat",
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "24px",
                letterSpacing: "-0.002em",
                textAlign: "left",
              }}
            >
              Hợp đồng đã được tạo thành công
            </span>
          </div>
          <hr
            style={{
              width: "590px",
              top: "88px",
              left: "40px",
              border: "1px solid #C8C8DB",
              opacity: 0.3,
              position: "absolute",
            }}
          />
          <div
            style={{
              width: "210px",
              height: "24px",
              top: "118px",
              left: "40px",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 700,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FFFFFF",
              position: "absolute",
            }}
          >
            Có 2 cách để tạo bản ghi:
          </div>

          <div
            style={{
              position: "absolute",
              width: "233px",
              height: "20px",
              top: "158px",
              left: "65px",
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "20px",
              letterSpacing: "0.002em",
              textAlign: "left",
              color: "orange",
            }}
          >
            Cách 1:
          </div>
          <div
            style={{
              position: "absolute",
              top: "158px",
              left: "115px",
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "17px",
              letterSpacing: "0.015em",
              textAlign: "left",
              color: "white",
            }}
          >
            Upload bản ghi trực tiếp
          </div>
          <div
            style={{
              width: "386px",
              height: "20px",
              top: "192px",
              left: "122px",
              opacity: 0.8,
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              letterSpacing: "0.015em",
              textAlign: "left",
              color: "#FFFFFF",
              position: "absolute",
            }}
          >
            Bạn có thể thực hiện thêm bản ghi ngay trên website
          </div>
          <div
            style={{
              width: "237px",
              height: "48px",
              top: "227px",
              left: "122px",
              padding: "12px 24px",
              borderRadius: "8px",
              gap: "8px",
              position: "absolute",
            }}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <button
              style={{
                width: 237,
                height: 48,
                background: "#FF7506",
                color: "white",
                borderRadius: 8,
              }}
            >
              Thêm bản ghi trực tiếp
            </button>
          </div>
          <div
            style={{
              position: "absolute",
              width: "233px",
              height: "20px",
              top: "331px",
              left: "65px",
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: "20px",
              letterSpacing: "0.002em",
              textAlign: "left",
              color: "orange",
            }}
          >
            Cách 2:
          </div>
          <div
            style={{
              position: "absolute",
              top: "331px",
              left: "115px",
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "17px",
              letterSpacing: "0.015em",
              textAlign: "left",
              color: "white",
            }}
          >
            Upload bản ghi qua phần mềm
          </div>
          <div
            style={{
              width: "386px",
              height: "20px",
              top: "365px",
              left: "122px",
              opacity: 0.8,
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "20px",
              letterSpacing: "0.015em",
              textAlign: "left",
              color: "#FFFFFF",
              position: "absolute",
            }}
          >
            Bạn có thể thêm bản ghi bằng tool
          </div>
          <div
            style={{
              width: "237px",
              height: "48px",
              top: "400px",
              left: "122px",
              padding: "12px 24px",
              borderRadius: "8px",
              gap: "8px",
              position: "absolute",
            }}
          >
            <button
              style={{
                width: 237,
                height: 48,
                border: "1px solid #FF7506",
                background: "#transparent",
                color: "#FF7506",
                borderRadius: 8,
              }}
            >
              Thêm bản ghi bằng tool
            </button>
          </div>
          <div
            style={{
              width: "493px",
              height: "24px",
              top: "504px",
              left: "65px",
              fontFamily: "Montserrat",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FF4747",
              position: "absolute",
            }}
          >
            Lưu ý: Hợp đồng chỉ có hiệu lực khi thêm bản ghi thành công.
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
              display: "flex",
            }}
          >
            <div
              className="modal-content"
              style={{
                backgroundColor: "#3E3E5B",
                width: "800px",
                height: "824px",
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
                  Thêm bản ghi mới
                </h5>
                <div
                  style={{
                    width: "720px",
                    height: "fit-content",
                    gap: "8px",
                    color: "white",
                    marginTop: 40,
                  }}
                >
                  Tên bản ghi: <span style={{ color: "red" }}>*</span>
                  <div style={{ marginTop: 8 }}>
                    <input
                      style={{
                        width: "720px",
                        height: "48px",
                        padding: "11px 24px 13px 16px",
                        borderRadius: "8px",
                        border: "1px solid #727288",
                        background: "#2B2B3F",
                        color: "#FFFFFF",
                      }}
                    />{" "}
                  </div>
                </div>
                <div
                  style={{
                    width: "720px",
                    height: "fit-content",
                    gap: "8px",
                    color: "white",
                    marginTop: 32,
                  }}
                >
                  Mã ISRC:
                  <div style={{ marginTop: 8 }}>
                    <input
                      style={{
                        width: "720px",
                        height: "48px",
                        padding: "11px 24px 13px 16px",
                        borderRadius: "8px",
                        border: "1px solid #727288",
                        background: "#2B2B3F",
                        color: "#FFFFFF",
                      }}
                    />{" "}
                  </div>
                </div>
                <div
                  style={{
                    width: "720px",
                    height: "fit-content",
                    gap: "8px",
                    color: "white",
                    marginTop: 32,
                  }}
                >
                  Tác giả: <span style={{ color: "red" }}>*</span>
                  <div style={{ marginTop: 8 }}>
                    <input
                      style={{
                        width: "720px",
                        height: "48px",
                        padding: "11px 24px 13px 16px",
                        borderRadius: "8px",
                        border: "1px solid #727288",
                        background: "#2B2B3F",
                        color: "#FFFFFF",
                      }}
                    />{" "}
                  </div>
                </div>
                <div
                  style={{
                    width: "720px",
                    height: "fit-content",
                    gap: "8px",
                    color: "white",
                    marginTop: 32,
                  }}
                >
                  Ca sĩ/Nhóm nhạc: <span style={{ color: "red" }}>*</span>
                  <div style={{ marginTop: 8 }}>
                    <input
                      style={{
                        width: "720px",
                        height: "48px",
                        padding: "11px 24px 13px 16px",
                        borderRadius: "8px",
                        border: "1px solid #727288",
                        background: "#2B2B3F",
                        color: "#FFFFFF",
                      }}
                    />{" "}
                  </div>
                </div>
                <div
                  style={{
                    width: "347px",
                    height: "80px",
                    gap: "8px",
                    display: "inline-block",
                    color: "white",
                    marginTop: 32,
                  }}
                >
                  Thể loại: <span style={{ color: "red" }}>*</span>
                  <div style={{ marginTop: 8 }}>
                    <select
                      style={{
                        opacity: 0.5,
                        width: "347px",
                        height: "48px",
                        padding: "11px 24px 13px 16px",
                        borderRadius: "8px",
                        border: "1px solid #727288",
                        background: "#2B2B3F",
                        color: "#FFFFFF",
                      }}
                      name=""
                      id=""
                    >
                      <option value="" selected>
                        Chọn một thể loại
                      </option>
                      <option value="">Rap</option>
                      <option value="">Ballad</option>
                      <option value="">Rock n Roll</option>
                      <option value="">R&B</option>
                    </select>
                  </div>
                </div>
                <div
                  style={{
                    width: "347px",
                    height: "80px",
                    gap: "8px",
                    display: "inline-block",
                    color: "white",
                    marginLeft: 26,
                    marginTop: 32,
                  }}
                >
                  Nhà sản xuất: <span style={{ color: "red" }}>*</span>
                  <div style={{ marginTop: 8 }}>
                    <input
                      style={{
                        width: "347px",
                        height: "48px",
                        padding: "11px 24px 13px 16px",
                        borderRadius: "8px",
                        border: "1px solid #727288",
                        background: "#2B2B3F",
                        color: "#FFFFFF",
                      }}
                    />{" "}
                  </div>
                </div>
                <div
                  style={{
                    width: "681px",
                    height: "40px",
                    gap: "8px",
                    color: "white",
                    marginTop: 40,
                  }}
                >
                  <div
                    style={{
                      display: "inline",
                      width: "296px",
                      height: "40px",
                      marginRight: 80,
                    }}
                  >
                    {" "}
                    <div
                      style={{
                        position: "absolute",
                        marginTop: 9,
                      }}
                    >
                      Đính kèm bản ghi: <span style={{ color: "red" }}>*</span>
                    </div>
                    <div style={{ marginLeft: 150 }}>
                      {" "}
                      <input
                        type="file"
                        style={{
                          width: "108px",
                          height: "40px",
                          padding: "8px 16px",
                          borderRadius: "6px",
                          border: "1px solid #FFAC69",
                          gap: "4px",
                          position: "absolute",
                          top: 650,
                          left: 167,
                          opacity: 0,
                          zIndex: 1,
                        }}
                      />
                      <div
                        style={{
                          width: "108px",
                          height: "40px",
                          border: "1px solid #FFAC69",
                          color: " #FFAC69",
                        }}
                      >
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/tailen.png?alt=media&token=a56f0719-52ef-40a4-ab89-20eeaa2489a6"
                          alt="tailen"
                          style={{
                            width: "24px",
                            height: "24px",
                            marginTop: 5,
                            marginLeft: 11,
                          }}
                        />
                        <span
                          style={{
                            marginTop: 4,
                            position: "absolute",
                            marginLeft: 3,
                          }}
                        >
                          Tải lên
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: 650,
                      left: 416,
                      width: "296px",
                      height: "40px",
                      marginRight: 80,
                    }}
                  >
                    {" "}
                    <div
                      style={{
                        position: "absolute",
                        marginTop: 9,
                      }}
                    >
                      Đính kèm lời bài hát:{" "}
                      <span style={{ color: "red" }}>*</span>
                    </div>
                    <div style={{ marginLeft: 165 }}>
                      {" "}
                      <input
                        type="file"
                        style={{
                          width: "108px",
                          height: "40px",
                          padding: "8px 16px",
                          borderRadius: "6px",
                          border: "1px solid #FFAC69",
                          gap: "4px",
                          position: "absolute",
                          top: 0,
                          left: 165,
                          opacity: 0,
                          zIndex: 1,
                        }}
                      />
                      <div
                        style={{
                          width: "108px",
                          height: "40px",
                          border: "1px solid #FFAC69",
                          color: " #FFAC69",
                        }}
                      >
                        <img
                          src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/tailen.png?alt=media&token=a56f0719-52ef-40a4-ab89-20eeaa2489a6"
                          alt="tailen"
                          style={{
                            width: "24px",
                            height: "24px",
                            marginTop: 5,
                            marginLeft: 11,
                          }}
                        />
                        <span
                          style={{
                            marginTop: 4,
                            position: "absolute",
                            marginLeft: 3,
                          }}
                        >
                          Tải lên
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      width: "368px",
                      height: "48px",
                      top: "736px",
                      left: "220px",
                      gap: "32px",
                      position: "absolute",
                    }}
                  >
                    <button
                      className="butoon"
                      style={{
                        color: "#FF7506",
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

export default ThemTTBanGhi;
