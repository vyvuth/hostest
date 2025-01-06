import { CiFacebook } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

import "./FooterStyle.scss";
import { useEffect } from "react";
function FooterPage() {
  return (
    <>
      <div className=" container-fluid w-100 bg-secondary">
        <div className=" container">
          <div className="row">
            <div data-aos="zoom-in" className=" col-lg-2 col-md-12 p-4 ">
              <h6 className="text-light fs-2">TV</h6>
              <p className=" text-capitalize fs-5 opacity-75">recommend</p>
              <p className=" text-capitalize fs-5 opacity-75">most popular</p>
              <p className=" text-capitalize fs-5 opacity-75">new video</p>
              <p className=" text-capitalize fs-5 opacity-75">most viewed</p>
            </div>
            <div data-aos="zoom-in" className=" col-lg-2 col-md-12 p-4">
              <h6 className="text-light fs-2">FILM</h6>
              <p className=" text-capitalize fs-5 opacity-75">KHMER movie</p>
              <p className=" text-capitalize fs-5 opacity-75">horrior movie</p>
              <p className=" text-capitalize fs-5 opacity-75">love story</p>
              <p className=" text-capitalize fs-5 opacity-75">korea movie</p>
            </div>
            <div data-aos="zoom-in" className=" col-lg-2 col-md-12 p-4">
              <h6 className="text-light fs-2">SPORT</h6>
              <p className=" text-capitalize fs-5 opacity-75">live sport</p>
              <p className=" text-capitalize fs-5 opacity-75">live schema</p>
            </div>
            <div data-aos="zoom-in" className=" col-lg-2 col-md-12 p-4">
              <h6 className="text-light fs-2">VAIPLAY</h6>
              <p className=" text-capitalize fs-5 opacity-75">kontakt</p>
              <p className=" text-capitalize fs-5 opacity-75">press</p>
              <p className=" text-capitalize fs-5 opacity-75">job</p>
            </div>
            <div data-aos="zoom-in" className=" col-lg-2 col-md-12 p-4">
              <h6 className="text-light fs-2">SUPPORT</h6>
              <p className=" text-capitalize fs-5 opacity-75">FAQ</p>
              <p className=" text-capitalize fs-5 opacity-75">support</p>
              <p className=" text-capitalize fs-5 opacity-75">devices</p>
            </div>
            <div data-aos="zoom-in" className=" col-lg-2 col-md-12 p-4">
              <h6 className="text-light fs-2">SYSTEM</h6>
              <p className=" text-capitalize fs-5 opacity-75">systemkrav</p>
              <p className=" text-capitalize fs-5 opacity-75">cookies</p>
              <p className=" text-capitalize fs-5 opacity-75">
                allmanna villkor
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" container-fluid w-100 bg-dark text-light py-3">
        <div className=" row">
          <div className=" col-lg-4 col-md-12 d-flex">
            <div style={{ width: "150px", height: "100px", padding: "15px" }}>
              <img
                className="w-100 h-100 object-fit-cover rounded rounded-3"
                src="logo.png"
                alt="logo.png"
              />
            </div>
            <p
              style={{ fontSize: "10px" }}
              className=" text-light mt-5 justify-content-around"
            >
              &copy; DEVELOPED ON 01 JAN 2025 BY{" "}
              <span className=" text-danger text-decoration-underline link-underline-secondary ">
                VUTHVY
              </span>
            </p>
          </div>
          <div className=" bars d-none d-lg-block col-lg-4 col-md-12 me-5 m-auto align-items-end">
            <button
              onClick={() =>
                window.open("https://web.facebook.com/?_rdc=1&_rdr#", "_blank")
              }
              className=" fb btn btn-secondary opacity-75 shadow-none rounded rounded-5 me-2"
            >
              <CiFacebook
                style={{ height: "20px" }}
                className=" fs-3 text-primary"
              />{" "}
              <span className=" text-capitalize">facebook</span>
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://tiktok.com/@useragency_butterfly?lang=en",
                  "_blank"
                )
              }
              className=" tik btn btn-secondary opacity-75 shadow-none rounded rounded-5 "
            >
              <FaTiktok
                style={{ height: "20px" }}
                className=" fs-5 text-danger"
              />{" "}
              <span className=" text-capitalize">tik tok</span>
            </button>
            <button
              onClick={() =>
                window.open("https://t.me/Webfront_developer", "_blank")
              }
              className=" telegram btn btn-secondary opacity-75 shadow-none rounded rounded-5  mx-2"
            >
              <FaTelegramPlane
                style={{ height: "20px" }}
                className=" fs-5 text-info-emphasis"
              />{" "}
              <span className=" text-capitalize">telegram</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterPage;
