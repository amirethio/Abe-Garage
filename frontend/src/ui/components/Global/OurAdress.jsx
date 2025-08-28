import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; 

function OurAdress() {
  return (
    <section className="contact-section">
      <div className="auto-container">
        <div className="row">
          {/* Map Column */}
          <div className="map-column col-lg-7">
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3071.2910802067827!2d90.45905169331171!3d23.691532202989123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1577214205224!5m2!1sen!2sbd"
                width="600"
                height="470"
                style={{ border: 0, width: "100%" }}
                allowFullScreen=""
                loading="lazy"
                title="Company Location"
              ></iframe>
            </div>
          </div>
          {/* Info Column */}
          <div className="info-column col-lg-5">
            <div className="inner-column">
              <h4>Our Address</h4>
              <div className="text">
                Completely synergize resource taxing relationships via premier
                niche markets. Professionally cultivate one-to-one customer
                service.
              </div>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  <span>Address:</span> 54B, Tailstoi Town 5238 MT, La city, IA
                  5224
                </li>
                <li>
                  <i className="bi bi-envelope-fill me-2"></i>
                  <span>Email:</span> contact@buildtruck.com
                </li>
                <li>
                  <i className="bi bi-telephone-fill me-2"></i>
                  <span>Phone:</span> 1800 456 7890 / 1254 897 3654
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurAdress;
