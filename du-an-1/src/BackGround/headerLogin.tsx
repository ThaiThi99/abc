import React, { useState } from "react";
import CustomOption from "./imgg";

function HeaderLogin() {
  const [language, setLanguage] = useState("vi");

  return (
    <>
      <div>
        <div
          style={{
            background: "#1E1E2E",
          }}
        >
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{
              width: "143px",
              height: "40px",
              top: "24px",
              left: "1697px",
              padding: "8px 4px 8px 8px",
              borderRadius: "4px",
              border: "1px solid #C8C8DB",
              gap: "8px",
              color: "#C8C8DB",
              backgroundColor: "transparent",
              position: "relative",
              background: "#1E1E2E",
            }}
          >
            <option style={{ background: "#1E1E2E" }} value="vi">
              Tiếng Việt
            </option>
            <option style={{ background: "#1E1E2E" }} value="en">
              English
            </option>
            <option style={{ background: "#1E1E2E" }} value="fr">
              French
            </option>
            {/* <CustomOption
              value="vi"
              label="Tiếng Việt"
              imageUrl="/images/ENG.svg"
            />
            <CustomOption
              value="option2"
              label="Option 2"
              imageUrl="/path/to/image2.jpg"
            /> */}
          </select>
        </div>
      </div>
    </>
  );
}

export default HeaderLogin;
