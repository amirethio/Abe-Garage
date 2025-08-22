import React from "react";
import banner1 from "../../../../assets/images/banner/banner1.jpg";
import { FaPlay } from "react-icons/fa";


function Video() {
  return (
    <section
      className="video-section"
      style={{
        backgroundImage: `url(${banner1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="auto-container">
        <h5>Working since 1999</h5>
        <h2>
          Tuneup Your Car <br /> to Next Level
        </h2>
        <div className="video-box">
          <div className="video-btn">
            <a
              href="https://www.youtube.com/"
              className="overlay-link lightbox-image video-fancybox ripple"
            >
              <FaPlay size={35} />
            </a>
          </div>
          <div className="text">
            Watch intro video <br /> about us
          </div>
        </div>
      </div>
    </section>
  );
}

export default Video;
