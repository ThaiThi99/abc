import { useState } from "react";
import Navbar1 from "../BackGround/navbar1";

const DoanhThuTheoHD = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

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
              Doanh thu
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Lịch sử đối soát
            </a>
            <span className="separator" style={{ color: "#FFAC69" }}>
              &gt;
            </span>
            <a
              className="child-link"
              style={{ color: "#F5F5FF", textDecoration: "none" }}
              href="/#"
            >
              Chi tiết
            </a>
          </div>
          <div
            style={{
              width: 999,
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
              Doanh thu theo hợp đồng - HĐ123 - Kỳ Tháng 03/2021
            </p>
          </div>
        </div>

        <div
          style={{
            width: "571px",
            height: "432px",
            top: "186px",
            left: "80px",
            borderRadius: 16,
            background: "#2B2B3F",
            position: "absolute",
            color: "white",
          }}
        >
          <div
            style={{
              width: "250px",
              height: "24px",
              top: "24px",
              left: "24px",
              fontFamily: "Montserrat",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FF7506",
              position: "absolute",
            }}
          >
            Thông tin hợp đồng
          </div>
          <div
            style={{
              width: "111px",
              height: "auto",
              top: "80px",
              left: "24px",
              gap: "4px",
              position: "absolute",
            }}
          >
            Số hợp đồng:
          </div>

          <div
            style={{
              width: "250px",
              height: "auto",
              top: "124px",
              left: "24px",
              gap: "4px",
              position: "absolute",
            }}
          >
            Đơn vị khai thác:
          </div>
          <div
            style={{
              width: "250px",
              height: "auto",
              top: "168px",
              left: "24px",
              gap: "4px",
              position: "absolute",
            }}
          >
            Loại hợp đồng:
          </div>
          <div
            style={{
              width: "250px",
              height: "auto",
              top: "212px",
              left: "24px",
              gap: "4px",
              position: "absolute",
            }}
          >
            Hiệu lực từ:
          </div>
          <div
            style={{
              width: "250px",
              height: "auto",
              top: "256px",
              left: "24px",
              gap: "4px",
              position: "absolute",
            }}
          >
            Ngày hết hạn:
          </div>
          <div
            style={{
              width: "250px",
              height: "auto",
              top: "300px",
              left: "24px",
              gap: "4px",
              position: "absolute",
            }}
          >
            Giá trị hợp đồng:
          </div>
          <div
            style={{
              width: "250px",
              height: "auto",
              top: "344px",
              left: "24px",
              gap: "4px",
              position: "absolute",
            }}
          >
            Giá trị phân phối theo ngày:
          </div>

          <div
            style={{
              width: "111px",
              height: "auto",
              top: "80px",
              left: "273px",
              gap: "4px",
              position: "absolute",
              opacity: "50%",
            }}
          >
            HĐ123
          </div>

          <div
            style={{
              width: "250px",
              height: "auto",
              top: "124px",
              left: "273px",
              gap: "4px",
              position: "absolute",
              opacity: "50%",
            }}
          >
            Công ty TNHH ABC
          </div>
          <div
            style={{
              width: "250px",
              height: "auto",
              top: "168px",
              left: "273px",
              gap: "4px",
              position: "absolute",
              opacity: "50%",
            }}
          >
            Trọn gói
          </div>
          <div
            style={{
              width: "250px",
              height: "auto",
              top: "212px",
              left: "273px",
              gap: "4px",
              position: "absolute",
              opacity: "50%",
            }}
          >
            01/01/2020
          </div>
          <div
            style={{
              width: "250px",
              height: "auto",
              top: "256px",
              left: "273px",
              gap: "4px",
              position: "absolute",
              opacity: "50%",
            }}
          >
            01/01/2022
          </div>
          <div
            style={{
              width: "250px",
              height: "auto",
              top: "300px",
              left: "273px",
              gap: "4px",
              position: "absolute",
              opacity: "50%",
            }}
          >
            730.000.000 VNĐ
          </div>
          <div
            style={{
              width: "250px",
              height: "auto",
              top: "344px",
              left: "273px",
              gap: "4px",
              position: "absolute",
              opacity: "50%",
            }}
          >
            365.000.000 VNĐ
          </div>
        </div>

        <div
          style={{
            width: "571px",
            height: "386px",
            top: "642px",
            left: "80px",
            borderRadius: 16,
            background: "#2B2B3F",
            position: "absolute",
            color: "white",
          }}
        >
          <div
            style={{
              width: "250px",
              height: "24px",
              top: "24px",
              left: "24px",
              fontFamily: "Montserrat",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "24px",
              letterSpacing: "-0.002em",
              textAlign: "left",
              color: "#FF7506",
              position: "absolute",
            }}
          >
            Thông tin đối soát
          </div>
          <div
            style={{
              width: "111px",
              height: "auto",
              top: "80px",
              left: "24px",
              gap: "4px",
              position: "absolute",
            }}
          >
            Ký đối soát:
          </div>

          <div
            style={{
              width: "250px",
              height: "auto",
              top: "124px",
              left: "24px",
              gap: "4px",
              position: "absolute",
            }}
          >
            Số bài hát:
          </div>
          <div
            style={{
              width: "250px",
              height: "auto",
              top: "168px",
              left: "24px",
              gap: "4px",
              position: "absolute",
            }}
          >
            Tổng số lượt phát:
          </div>
          <div
            style={{
              width: "250px",
              height: "auto",
              top: "212px",
              left: "24px",
              gap: "4px",
              position: "absolute",
            }}
          >
            Tổng doanh thu:
          </div>
          <div
            style={{
              width: "250px",
              height: "auto",
              top: "256px",
              left: "24px",
              gap: "4px",
              position: "absolute",
            }}
          >
            Doanh thu chưa phân phối::
          </div>
          <div
            style={{
              width: "250px",
              height: "auto",
              top: "300px",
              left: "24px",
              gap: "4px",
              position: "absolute",
            }}
          >
            Trạng thái đối soát:
          </div>

          <div
            style={{
              width: "111px",
              height: "auto",
              top: "80px",
              left: "273px",
              gap: "4px",
              position: "absolute",
              opacity: "50%",
            }}
          >
            01/01/2020
          </div>

          <div
            style={{
              width: "250px",
              height: "auto",
              top: "124px",
              left: "273px",
              gap: "4px",
              position: "absolute",
              opacity: "50%",
            }}
          >
            13 bài
          </div>
          <div
            style={{
              width: "250px",
              height: "auto",
              top: "168px",
              left: "273px",
              gap: "4px",
              position: "absolute",
              opacity: "50%",
            }}
          >
            200.000 lượt
          </div>
          <div
            style={{
              width: "250px",
              height: "auto",
              top: "212px",
              left: "273px",
              gap: "4px",
              position: "absolute",
              opacity: "50%",
            }}
          >
            300.000.000 VNĐ
          </div>
          <div
            style={{
              width: "250px",
              height: "auto",
              top: "256px",
              left: "273px",
              gap: "4px",
              position: "absolute",
              opacity: "50%",
            }}
          >
            1.000.000 VNĐ
          </div>
          <div
            style={{
              width: "250px",
              height: "auto",
              top: "300px",
              left: "273px",
              gap: "4px",
              position: "absolute",
              opacity: "50%",
            }}
          >
            Chưa đối soát
          </div>
        </div>

        <div
          style={{
            width: "235px",
            height: "24px",
            top: "186px",
            left: "675px",
            fontFamily: "Montserrat",
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "-0.002em",
            textAlign: "left",
            color: "#E5E5E5",
            position: "absolute",
          }}
        >
          Danh sách bản ghi
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "176px",
            height: "24px",
            top: "246px",
            left: "675px",
            gap: "4px",
            position: "absolute",
            color: "white",
          }}
        >
          Xem theo ngày/tuần:
        </div>

        <input
          type="date"
          defaultValue={"18/05/2021"}
          style={{
            width: "225px",
            height: "auto",
            top: "234px",
            left: "863px",
            padding: "11px 16px 13px 16px",
            borderRadius: "8px",
            border: "1px solid #727288",
            justifyContent: "space-between",
            background: "#2B2B3F",
            position: "absolute",
          }}
        />

        <div
          style={{
            width: "525px",
            height: "48px",
            position: "absolute",
            top: "234px",
            left: "1245px",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#2B2B3F",
          }}
        >
          <input
            type="text"
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
            placeholder="Nhập tên bài hát"
          />
          <div
            style={{
              marginLeft: "12px",
              width: "24px",
              height: "24px",
              marginTop: 11,
              marginRight: 10,
            }}
          >
            <a href="/anhson">
              <i
                style={{ color: "white" }}
                className="fa-solid fa-magnifying-glass"
              ></i>
            </a>
          </div>
        </div>

        <div
          style={{
            width: 1095,
            position: "absolute",
            top: 306,
            left: 675,
            borderRadius: 16,
            gap: 56,
            backgroundColor: "#2F2F41B2",
          }}
        >
          <table
            style={{
              width: 1095,
              height: 722,
              margin: "16px 24px 104px 24px",
            }}
          >
            <thead style={{ color: "#FFAC69" }}>
              <tr style={{ textAlign: "left", height: 48, width: "100%" }}>
                <th style={{ width: "80px" }}>STT</th>
                <th style={{ width: "210px" }}>Tên bài hát</th>
                <th style={{ width: "161px" }}>Tổng số lượt phát</th>
                <th style={{ width: "161px" }}>Tổng doanh thu</th>
                <th style={{ width: "161px" }}>Quyền biểu diễn</th>
                <th style={{ width: "172px" }}>Quyền sản xuất</th>
                <th style={{ width: "102px" }}>VCPMC</th>
              </tr>
            </thead>
            <tbody
              style={{
                color: "#FFFFFF",
                fontFamily: "Montserrat",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                letterSpacing: "0.015em",
                textAlign: "left",
              }}
            >
              <tr style={{ height: 47 }}>
                <td>1</td>
                <td>Let Us Be</td>
                <td>365</td>
                <td>365.000.000 </td>
                <td>36.266</td>
                <td>36.266</td>
                <td>36.200</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>2</td>
                <td>Let Us Be</td>
                <td>365</td>
                <td>365.000.000 </td>
                <td>36.266</td>
                <td>36.266</td>
                <td>36.200</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>3</td>
                <td>Let Us Be</td>
                <td>365</td>
                <td>365.000.000 </td>
                <td>36.266</td>
                <td>36.266</td>
                <td>36.200</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>4</td>
                <td>Let Us Be</td>
                <td>365</td>
                <td>365.000.000 </td>
                <td>36.266</td>
                <td>36.266</td>
                <td>36.200</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>5</td>
                <td>Let Us Be</td>
                <td>365</td>
                <td>365.000.000 </td>
                <td>36.266</td>
                <td>36.266</td>
                <td>36.200</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>6</td>
                <td>Let Us Be</td>
                <td>365</td>
                <td>365.000.000 </td>
                <td>36.266</td>
                <td>36.266</td>
                <td>36.200</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>7</td>
                <td>Let Us Be</td>
                <td>365</td>
                <td>365.000.000 </td>
                <td>36.266</td>
                <td>36.266</td>
                <td>36.200</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>8</td>
                <td>Let Us Be</td>
                <td>365</td>
                <td>365.000.000 </td>
                <td>36.266</td>
                <td>36.266</td>
                <td>36.200</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>9</td>
                <td>Let Us Be</td>
                <td>365</td>
                <td>365.000.000 </td>
                <td>36.266</td>
                <td>36.266</td>
                <td>36.200</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>10</td>
                <td>Let Us Be</td>
                <td>365</td>
                <td>365.000.000 </td>
                <td>36.266</td>
                <td>36.266</td>
                <td>36.200</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>11</td>
                <td>Let Us Be</td>
                <td>365</td>
                <td>365.000.000 </td>
                <td>36.266</td>
                <td>36.266</td>
                <td>36.200</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>12</td>
                <td>Let Us Be</td>
                <td>365</td>
                <td>365.000.000 </td>
                <td>36.266</td>
                <td>36.266</td>
                <td>36.200</td>
              </tr>

              <tr style={{ height: 47 }}>
                <td>13</td>
                <td>Let Us Be</td>
                <td>365</td>
                <td>365.000.000 </td>
                <td>36.266</td>
                <td>36.266</td>
                <td>36.200</td>
              </tr>
            </tbody>
          </table>

          <div
            style={{
              width: "fit-content",
              maxWidth: "1485px",
              display: "flex",
              gap: "8px",
              marginLeft: 24,
              marginBottom: 10,
            }}
          >
            <div
              style={{
                width: "max-content",
                maxWidth: "279.82px",
                minHeight: "32px",
                color: "#F5F5FF",
              }}
            >
              Hiển thị
              <div style={{ display: "inline-flex", position: "relative" }}>
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
                marginBottom: 10,
              }}
              className="pagination"
            >
              <a href="/#" className="page-link1">
                &lt;
              </a>
              <a href="/#" className="page-link1 ">
                1
              </a>
              <a href="/#" className="page-link1 active">
                2
              </a>
              <a href="/#" className="page-link1">
                3
              </a>
              <a href="/#" className="page-link1">
                ...
              </a>
              <a href="/#" className="page-link1">
                100
              </a>
              <a href="/#" className="page-link1">
                &gt;
              </a>
            </div>
          </div>
        </div>

        <div
          className="khung2"
          style={{
            height: 110,
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
          }}
        >
          <div className="khung1">
            <a href="/ChinhSuaTTNguoiDung" style={{ textDecoration: "none" }}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/duan-ede31.appspot.com/o/xuatdulieu.png?alt=media&token=f03fe258-ca6e-4209-bd84-92041f1e392f"
                alt="xuatdulieu"
              />
              <div className="textt">Xuất file</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoanhThuTheoHD;
