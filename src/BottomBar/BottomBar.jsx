import { useContext } from "react";
import AppProviders from "../UseContect/AppProvider";
import { FaHome } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import { FaPhotoFilm } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import "../App.css";
function BottomBar() {
  return (
    <>
      <div className="container-fluid d-lg-none d-block sticky-bottom bootomBar-900 p-2">
        <div className=" container  d-flex justify-content-between">
          <a className=" text-decoration-none text-center text-light">
            <FaHome size={30} />
            <p className=" m-0 text-capitalize">Home</p>
          </a>
          <a className=" text-decoration-none shadow-none text-center text-light">
            <MdOutlineLiveTv size={30} />
            <p className=" m-0 text-capitalize">TV</p>
          </a>
          <a className=" text-decoration-none text-center text-light">
            <FaPhotoFilm size={30} />
            <p className=" m-0 text-capitalize">Film</p>
          </a>
          <a className=" text-decoration-none text-center text-light">
            <MdContactMail size={30} />
            <p className=" m-0 text-capitalize">Contact</p>
          </a>
          <a className=" text-decoration-none text-center text-light">
            <MdAccountCircle size={30} />
            <p className=" m-0 text-capitalize">account</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default BottomBar;
