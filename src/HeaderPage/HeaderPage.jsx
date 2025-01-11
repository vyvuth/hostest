import { LuCloudMoon } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { HiMiniBars4 } from "react-icons/hi2";
import OffCanvas from "../OffCanvas/OffCanvas";
import { useContext } from "react";
import AppProviders from "../UseContect/AppProvider";
import { IoSunnyOutline } from "react-icons/io5";
import "animate.css";

function HeaderPage() {
  const { night, NightMode, DayMode } = useContext(AppProviders);

  return (
    <>
      <nav
        className={`container-fluid d-flex justify-content-between  ${
          night ? "bg-dark text-light " : "bg-secondary text-warning "
        }`}
      >
        <div style={{ width: "150px", height: "100px", padding: "15px" }}>
          <img
            className="w-100 h-100 object-fit-cover rounded rounded-3    animate__animated animate__lightSpeedInRight "
            src="logo.png"
            alt="logo.png"
          />
        </div>
        <div className="d-none d-lg-block animate__animated animate__lightSpeedInRight">
          <ul className="nav mt-5 fs-5">
            <li className="px-3">TV</li>
            <li className="px-3">Films</li>
            <li className="px-3">Sport</li>
            <li className="px-3">About</li>
          </ul>
        </div>
        <div className="p-0 mt-5 d-lg-flex d-none d-lg-block animate__animated animate__lightSpeedInRight">
          <input
            className="form-control w-100 mb-4 shadow-none border-2 border-warning"
            type="text"
            placeholder="Search..."
          />
          <CiSearch size={40} className="fs-3 mx-2" />
        </div>
        <div
          onClick={NightMode}
          className={`d-flex align-items-center justify-content-center  cursor-pointer ${
            night
              ? "bg-dark text-light d-none"
              : "d-block bg-secondary text-warning"
          }`}
        >
          <LuCloudMoon
            size={50}
            className=" animate__animated animate__lightSpeedInRight"
          />
        </div>
        <div
          onClick={DayMode}
          className={`d-flex align-items-center justify-content-center cursor-pointer  ${
            night ? "d-block bg-dark text-light" : "bg-light text-dark d-none"
          }`}
        >
          <IoSunnyOutline
            size={50}
            className="animate__animated animate__lightSpeedInRight"
          />
        </div>

        <div
          className="d-md-px-3 d-lg-none d-md-block "
          data-bs-toggle="offcanvas"
          data-bs-target="#bars"
        >
          <HiMiniBars4
            size={50}
            className="mt-4 animate__animated animate__lightSpeedInRight"
          />
          <OffCanvas className="animate__animated animate__lightSpeedInRight" />
        </div>
      </nav>
    </>
  );
}

export default HeaderPage;
