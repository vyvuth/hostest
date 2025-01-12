import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CiStar } from "react-icons/ci";
import VideoTrailer from "./VideoTrailer";
import "../style.scss";
function MoviePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
    // AOS.init();
  }, []);
  return (
    <div className=" container-fluid mt-5">
      <h4
        data-aos="flip-left"
        className=" text-capitalize text-info fs-5 opacity-75 mx-5"
      >
        {" "}
        horror & action movies (☞ﾟヮﾟ)☞
      </h4>
      <div className=" container p-3">
        {/* session 1 */}
        <div className=" row">
          {/* card1 */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="card-movie col-lg-2 col-md-6 col-sm-6  py-2 "
          >
            <div style={{ height: "50vh" }} className=" card Slider">
              <div className=" card-img-top overflow-hidden">
                <div className="imgs" style={{ height: "20vh" }}>
                  <img
                    className=" w-100 h-100 object-fit-cover "
                    src="https://i.ytimg.com/vi/rGsXo6cjKyE/maxresdefault.jpg"
                    alt="404"
                  />
                </div>
              </div>
              <div className=" card-body">
                <h6 className=" card-title text-uppercase">house of dead</h6>
                <p className=" card-text">
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <span>
                    <CiStar className=" fs-5" />
                  </span>
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Release Date: July 3, 2024
                  </small>
                </p>
              </div>
            </div>
          </div>
          {/* card2 */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="card-movie col-lg-2 col-md-6 col-sm-6 py-2"
          >
            <div style={{ height: "50vh" }} className=" card Slider">
              <div className=" card-img-top overflow-hidden">
                <div className="imgs" style={{ height: "20vh" }}>
                  <img
                    className=" w-100 h-100 object-fit-cover "
                    src="https://i.ytimg.com/vi/jgh1A7ppnxo/maxresdefault.jpg"
                    alt="404"
                  />
                </div>
              </div>
              <div className=" card-body">
                <h6 className=" card-title text-uppercase">the trip</h6>
                <p className=" card-text">
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <span>
                    <CiStar className=" fs-5" />
                  </span>
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Release Date: July 27, 2024
                  </small>
                </p>
              </div>
            </div>
          </div>
          {/* card3 */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="card-movie col-lg-2 col-md-6 py-2"
          >
            <div style={{ height: "50vh" }} className=" card Slider">
              <div className=" card-img-top overflow-hidden">
                <div className="imgs" style={{ height: "20vh" }}>
                  <img
                    className=" w-100 h-100 object-fit-cover "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMkK-P8XCKKbIwuN-FDgfaRvrZ3825c7lGw&s"
                    alt="404"
                  />
                </div>
              </div>
              <div className=" card-body">
                <h6 className=" card-title text-uppercase">
                  horror in the forest
                </h6>
                <p className=" card-text">
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Release Date: July 27, 2024
                  </small>
                </p>
              </div>
            </div>
          </div>
          {/* card4 */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="card-movie col-lg-2 col-md-6 py-2"
          >
            <div style={{ height: "50vh" }} className=" card Slider">
              <div className=" card-img-top overflow-hidden">
                <div className="imgs" style={{ height: "20vh" }}>
                  <img
                    className=" w-100 h-100 object-fit-cover "
                    src="https://i.ytimg.com/vi/QPJjWFglM3w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD71KbiaJVce2NljGAjcWXLZF_Idg"
                    alt="404"
                  />
                </div>
              </div>
              <div className=" card-body">
                <h6 className=" card-title text-uppercase">abbeygrace</h6>
                <p className=" card-text">
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <span>
                    <CiStar className=" fs-5" />
                    <CiStar className=" fs-5" />
                  </span>
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Release Date: July 10, 2024
                  </small>
                </p>
              </div>
            </div>
          </div>
          {/* card5 */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="card-movie col-lg-2 col-md-6 py-2"
          >
            <div style={{ height: "50vh" }} className=" card Slider">
              <div className=" card-img-top overflow-hidden">
                <div className="imgs" style={{ height: "20vh" }}>
                  <img
                    className=" w-100 h-100 object-fit-cover "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1WeBygJJYNdDBX6QuA_9UdK1lFVSDnZxrg&s"
                    alt="404"
                  />
                </div>
              </div>
              <div className=" card-body">
                <h6 className=" card-title text-uppercase">hunted</h6>
                <p className=" card-text">
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <span>
                    <CiStar className=" fs-5" />
                  </span>
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Release Date: April 15, 2024
                  </small>
                </p>
              </div>
            </div>
          </div>
          {/* card6 */}
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            className="card-movie col-lg-2 col-md-6 py-2"
          >
            <div style={{ height: "50vh" }} className=" card Slider">
              <div className=" card-img-top overflow-hidden">
                <div className="imgs" style={{ height: "20vh" }}>
                  <img
                    className=" w-100 h-100 object-fit-cover "
                    src="https://i.ytimg.com/vi/bccFol1JGsM/hqdefault.jpg"
                    alt="404"
                  />
                </div>
              </div>
              <div className=" card-body">
                <h6 className=" card-title text-uppercase">hotel hell</h6>
                <p className=" card-text">
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Release Date: March 11, 2024
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* session 2 */}
        <div className=" row">
          {/* card1 */}
          <div
            data-aos="flip-right"
            className="card-movie col-lg-2 col-md-6 py-2"
          >
            <div style={{ height: "50vh" }} className=" card Slider">
              <div className=" card-img-top overflow-hidden">
                <div className="imgs" style={{ height: "20vh" }}>
                  <img
                    className=" w-100 h-100 object-fit-cover "
                    src="https://i.ytimg.com/vi/vZpGiPFiR1w/hqdefault.jpg"
                    alt="404"
                  />
                </div>
              </div>
              <div className=" card-body">
                <h6 className=" card-title text-uppercase">hitman</h6>
                <p className=" card-text">
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <span>
                    <CiStar className=" fs-5" />
                  </span>
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Release Date: Oct 22, 2022
                  </small>
                </p>
              </div>
            </div>
          </div>
          {/* card2 */}
          <div
            data-aos="flip-right"
            className="card-movie col-lg-2 col-md-6 py-2"
          >
            <div style={{ height: "50vh" }} className=" card Slider">
              <div className=" card-img-top overflow-hidden">
                <div className="imgs" style={{ height: "20vh" }}>
                  <img
                    className=" w-100 h-100 object-fit-cover "
                    src="https://www.etv.co.za/sites/default/files/inline-images/eMovies-Extra-WK-3Enemies-800x400.png"
                    alt="404"
                  />
                </div>
              </div>
              <div className=" card-body">
                <h6 className=" card-title text-uppercase">enemies among us</h6>
                <p className=" card-text">
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Release Date: March 25, 2023
                  </small>
                </p>
              </div>
            </div>
          </div>
          {/* card3 */}
          <div
            data-aos="flip-right"
            className="card-movie col-lg-2 col-md-6 py-2"
          >
            <div style={{ height: "50vh" }} className=" card Slider">
              <div className=" card-img-top overflow-hidden">
                <div className="imgs" style={{ height: "20vh" }}>
                  <img
                    className=" w-100 h-100 object-fit-cover "
                    src="https://e1.pxfuel.com/desktop-wallpaper/510/730/desktop-wallpaper-avengers-hollywood-best-movie-2015-avengers-thumbnail.jpg"
                    alt="404"
                  />
                </div>
              </div>
              <div className=" card-body">
                <h6 className=" card-title text-uppercase">avengers</h6>
                <p className=" card-text">
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Release Date: Nov 11, 2020
                  </small>
                </p>
              </div>
            </div>
          </div>
          {/* card4 */}
          <div
            data-aos="flip-right"
            className="card-movie col-lg-2 col-md-6 py-2"
          >
            <div style={{ height: "50vh" }} className=" card Slider">
              <div className=" card-img-top overflow-hidden">
                <div className="imgs" style={{ height: "20vh" }}>
                  <img
                    className=" w-100 h-100 object-fit-cover "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2p7hBuPaQ6wcJzSGva9Q3iGqsC654b-arkA&s"
                    alt="404"
                  />
                </div>
              </div>
              <div className=" card-body">
                <h6 className=" card-title text-uppercase">awang</h6>
                <p className=" card-text">
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Release Date: March 1, 2024
                  </small>
                </p>
              </div>
            </div>
          </div>
          {/* card5 */}
          <div
            data-aos="flip-right"
            className="card-movie col-lg-2  col-md-6 py-2"
          >
            <div style={{ height: "50vh" }} className=" card Slider">
              <div className=" card-img-top overflow-hidden">
                <div className="imgs" style={{ height: "20vh" }}>
                  <img
                    className=" w-100 h-100 object-fit-cover "
                    src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-ad-design-template-49cae0ff516599ec8637843f2ad23978.jpg?ts=1706023363"
                    alt="404"
                  />
                </div>
              </div>
              <div className=" card-body">
                <h6 className=" card-title text-uppercase">
                  revenge of the fallen
                </h6>
                <p className=" card-text">
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <span>
                    <CiStar className=" fs-5" />
                  </span>
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Release Date: Agu 11, 2024
                  </small>
                </p>
              </div>
            </div>
          </div>
          {/* card6 */}
          <div
            data-aos="flip-right"
            className="card-movie col-lg-2 col-md-6 py-2"
          >
            <div style={{ height: "50vh" }} className=" card Slider">
              <div className=" card-img-top overflow-hidden">
                <div className="imgs" style={{ height: "20vh" }}>
                  <img
                    className=" w-100 h-100 object-fit-cover "
                    src="https://i.ytimg.com/vi/oFePCtMl7zI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCCA2eL1DRzqNYUuOqKR-QA36nzCQ"
                    alt="404"
                  />
                </div>
              </div>
              <div className=" card-body">
                <h6 className=" card-title text-uppercase">fire girl</h6>
                <p className=" card-text">
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Release Date: Dec 18, 2018
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* session 3 */}
        <div className=" row">
          {/* card1 */}
          <div data-aos="flip-up" className="card-movie col-lg-2 col-md-6 py-2">
            <div style={{ height: "50vh" }} className=" card Slider">
              <div className=" card-img-top overflow-hidden">
                <div className="imgs" style={{ height: "20vh" }}>
                  <img
                    className=" w-100 h-100 object-fit-cover "
                    src="https://m.media-amazon.com/images/M/MV5BODcwZmU2ZjEtNmQyNy00ZTJjLWJhNjctYjczM2RlMTYzMDg3XkEyXkFqcGc@._V1_.jpg"
                    alt="404"
                  />
                </div>
              </div>
              <div className=" card-body">
                <h6 className=" card-title text-uppercase">the dark monther</h6>
                <p className=" card-text">
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <span>
                    <CiStar className=" fs-5" />
                  </span>
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Release Date: Jan 27, 2024
                  </small>
                </p>
              </div>
            </div>
          </div>
          {/* card2 */}
          <div
            data-aos="flip-up"
            className="card-movie col-lg-2  col-md-6 py-2"
          >
            <div style={{ height: "50vh" }} className=" card Slider">
              <div className=" card-img-top overflow-hidden">
                <div className="imgs" style={{ height: "20vh" }}>
                  <img
                    className=" w-100 h-100 object-fit-cover "
                    src="https://m.media-amazon.com/images/M/MV5BZmMzZDQ2MTMtNzlmZC00NTBhLTgxNDQtNTQ5MzI5ZTBkYTFlXkEyXkFqcGc@._V1_.jpg"
                    alt="404"
                  />
                </div>
              </div>
              <div className=" card-body">
                <h6 className=" card-title text-uppercase">
                  បណ្ដាសារនាងរាត្រី
                </h6>
                <p className=" card-text">
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <span>
                    <CiStar className=" fs-5" />
                  </span>
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Release Date: July 27, 2024
                  </small>
                </p>
              </div>
            </div>
          </div>
          {/* card3 */}
          <div
            data-aos="flip-up"
            className="card-movie col-lg-2  col-md-6 py-2"
          >
            <div style={{ height: "50vh" }} className=" card Slider">
              <div className=" card-img-top overflow-hidden">
                <div className="imgs" style={{ height: "20vh" }}>
                  <img
                    className=" w-100 h-100 object-fit-cover "
                    src="https://m.media-amazon.com/images/M/MV5BOThhY2FmMjQtMDAxYi00YjRmLTk5ZGItYTE2Y2FlZTQ3YzY0XkEyXkFqcGc@._V1_.jpg"
                    alt="404"
                  />
                </div>
              </div>
              <div className=" card-body">
                <h6 className=" card-title text-uppercase">ខ្មោចចូល</h6>
                <p className=" card-text">
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <span>
                    <CiStar className=" fs-5" />
                  </span>
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Release Date:27 Jul, 2023
                  </small>
                </p>
              </div>
            </div>
          </div>
          {/* card4 */}
          <div
            data-aos="flip-up"
            className="card-movie col-lg-2  col-md-6 py-2"
          >
            <div style={{ height: "50vh" }} className=" card Slider">
              <div className=" card-img-top overflow-hidden">
                <div className="imgs" style={{ height: "20vh" }}>
                  <img
                    className=" w-100 h-100 object-fit-cover "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRscYVIFHmsEJE0hN1e6oHjONud2r_86BcyGQ&s"
                    alt="404"
                  />
                </div>
              </div>
              <div className=" card-body">
                <h6 className=" card-title text-uppercase">ក្បាលខ្ញំុនៅឯណា</h6>
                <p className=" card-text">
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <span>
                    <CiStar className=" fs-5" />
                  </span>
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Release Date: Apr 28, 2024
                  </small>
                </p>
              </div>
            </div>
          </div>
          {/* card5 */}
          <div
            data-aos="flip-up"
            className="card-movie col-lg-2  col-md-6 py-2"
          >
            <div style={{ height: "50vh" }} className=" card Slider">
              <div className=" card-img-top overflow-hidden">
                <div className="imgs" style={{ height: "20vh" }}>
                  <img
                    className=" w-100 h-100 object-fit-cover "
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7iceNy6RvQe1UgoXDCTkVpfupctkMdorEpw&s"
                    alt="404"
                  />
                </div>
              </div>
              <div className=" card-body">
                <h6 className=" card-title text-uppercase">ព្រៃអាគម</h6>
                <p className=" card-text">
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <span>
                    <CiStar className=" fs-5" />
                  </span>
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Release Date: July 30, 2020
                  </small>
                </p>
              </div>
            </div>
          </div>
          {/* card6 */}
          <div
            data-aos="flip-up"
            className="card-movie col-lg-2  col-md-6 py-2"
          >
            <div style={{ height: "50vh" }} className=" card Slider">
              <div className=" card-img-top overflow-hidden">
                <div className="imgs" style={{ height: "20vh" }}>
                  <img
                    className=" w-100 h-100 object-fit-cover "
                    src="https://i.ytimg.com/vi/NY_M-FKKKrg/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCvTIj-coYf65avRNGiWidALOS3FQ"
                    alt="404"
                  />
                </div>
              </div>
              <div className=" card-body">
                <h6 className=" card-title text-uppercase">បន្លុងខ្មោច</h6>
                <p className=" card-text">
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <CiStar className=" fs-5 text-primary text-bolder" />
                  <span>
                    <CiStar className=" fs-5" />
                  </span>
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Release Date: July 27, 2021
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoTrailer />
    </div>
  );
}

export default MoviePage;
