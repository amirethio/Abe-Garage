import React from "react";
import bgImage from "./../../../assets/images/misc/bottomVideo.png";
import { FaPlay } from "react-icons/fa";

function BottomVideo({ text, video, page }) {
  return (
    <section
      className="video-section position-relative d-flex align-items-center text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        height: "400px",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        // style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
      ></div>

      {/* Content aligned left */}
      <div className="container position-relative">
        <div className="col-lg-6 col-md-8 text-start">
          <h5 className="fw-light mb-2">Working since 1992</h5>

          {/* Dynamic text from props */}
          <h2 className="fw-bold display-5 ">{text}</h2>

          {/* Show video section only if `video=true` */}
          {video && (
            <div className="d-flex align-items-center mt-4">
              {/* Play Button */}
              <a
                href="https://www.youtube.com/"
                className="d-flex align-items-center justify-content-center rounded-circle bg-danger shadow-lg text-white"
                style={{
                  width: "80px",
                  height: "80px",
                  transition: "transform 0.3s ease",
                  marginRight:"15px"
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.1)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <FaPlay size={28} />
              </a>

              {/* Video Text */}
              <div className="ms-4">
                <span className="d-block fw-semibold fs-5">
                  Watch intro video
                </span>
                <span className="d-block text-light small">about us</span>
              </div>
            </div>
          )}
          {page && (
            <ul class="page-breadcrumb">
              <li>
                <a href="index.html">home &gt;</a>
              </li>
              <li>{page}</li>
            </ul>
          )}
          <div class="auto-container"></div>
        </div>
      </div>
    </section>
  );
}

export default BottomVideo;
