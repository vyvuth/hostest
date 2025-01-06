import React, { useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppProviders from "../UseContect/AppProvider";
import MoviePage from "./MoviePage";
import "animate.css";

function Component() {
  const { night } = useContext(AppProviders);
  let { images } = useContext(AppProviders);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div
      className={`container-fluid ${
        night ? "bg-dark text-light " : "bg-secondary text-dark "
      }`}
    >
      {/* Carousel component */}
      <div
        id="Ride"
        className="carousel slide container"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner animate__animated animate__zoomIn">
          {/* Example slide with AOS animation */}
          <div
            style={{ width: "100%", height: "100vh" }}
            className="carousel-item active mt-4"
          >
            <img
              src="/public/KH IMAGES/KH1.png"
              className="d-block w-100 h-100 object-fit-cover rounded rounded-3"
              alt="Slide 1"
            />
          </div>
          {/* Repeat for other slides */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#Ride"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#Ride"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Card scroll with AOS */}
      <div className="container-fluid">
        <div style={{ marginTop: "5%" }} className="container py-4">
          <h1 data-aos="zoom-in" className="mb-3 text-capitalize fs-4 fw-light">
            title trailer{" "}
            <span
              style={{ textDecoration: "underline" }}
              className="fw-medium text-danger text-capitalize"
            >
              here
            </span>
          </h1>
          <div
            className="row flex-nowrap overflow-auto border border-2 p-3 border-primary"
            style={{
              overflowX: "auto",
              whiteSpace: "nowrap",
              borderRadius: "5px 5px 0 0",
            }}
          >
            {/* Example card with AOS */}
            {images.length > 0 ? (
              images.map((movie, index) => (
                <div
                  className="col-lg-6 col-md-6"
                  style={{ flex: "0 0 auto" }}
                  data-aos="fade-left"
                  key={index}
                >
                  <div className="card">
                    <div
                      style={{ height: "250px" }}
                      className="card-img overflow-hidden"
                    >
                      <img
                        src={movie.image} // Replace with the correct property from the API
                        className="w-100 h-100 object-fit-cover"
                        alt={movie.title || "Movie"} // Use a meaningful alt text
                      />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading...</p> // Fallback while data is being fetched
            )}
          </div>
        </div>
      </div>
      <MoviePage />
    </div>
  );
}

export default Component;
