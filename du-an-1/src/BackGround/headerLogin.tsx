import React, { useState } from "react";

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
          </select>
        </div>

        {/* <div className="dropdown text-end">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle show"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width={32}
                  height={32}
                  className="rounded-circle"
                />
              </a>
              <ul
                className="dropdown-menu text-small show"
                style={{
                  position: "absolute",
                  inset: "0px 0px auto auto",
                  margin: 0,
                  transform: "translate3d(0px, 34.4px, 0px)",
                }}
                data-popper-placement="bottom-end"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div> */}
      </div>
    </>
  );
}

export default HeaderLogin;
