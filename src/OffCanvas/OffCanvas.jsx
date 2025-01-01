import "./BarOff.scss";
import "animate.css";
function OffCanvas() {
  return (
    <>
      <div className="offcanvas offcanvas-start" id="bars">
        <div className=" offcanvas-header">
          <h5 className=" offcanvas-title fs-1 fw-bolder text-light">Menu</h5>

          <button
            className=" btn-close shadow-none"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="  offcanvas-body">
          <ul data-aos="flip-down" className=" nav fs-5 flex-column gap-2">
            <li className="px-3 fs-1 fw-bolder  text-light">TV</li>
            <li className="px-3 fs-1 fw-bolder  text-light">Films</li>
            <li className="px-3 fs-1 fw-bolder  text-light">Sport</li>
            <li className="px-3 fs-1 fw-bolder  text-light">About</li>
          </ul>
          <img
            className=" w-100 h-100 object-fit-cover mt-5 rounded rounded-3"
            src="image.png"
            alt="image.png"
          />
          <p style={{ fontSize: "10px" }} className=" text-light mt-3">
            &copy; DEVELOPED ON 01 JAN 2025 BY{" "}
            <span className=" text-danger text-decoration-underline link-underline-secondary ">
              VUTHVY
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default OffCanvas;
