import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function VideoTrailer() {
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
      <div className=" container">
        <div className=" row">
          <div data-aos="zoom-out" className=" col-12">
            <iframe
              width="100%"
              height="450"
              className=" rounded rounded-1"
              src="https://www.youtube.com/embed/3_FBIsSueQc?autoplay=1&mute=1&loop=1&playlist=3_FBIsSueQc"
              allow="autoplay; muted; loop"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoTrailer;
