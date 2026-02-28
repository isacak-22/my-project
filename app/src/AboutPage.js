import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div>

      {/* GREEN HEADER */}
      <div className="about-header text-center">
        <h2>About- Upcoming Issues</h2>
      </div>

      <div className="container py-4">

        {/* Breadcrumb */}
       

        <h2 className="about-title text-center mb-4">About Us</h2>

        {/* THREE CARDS */}
        <div className="row text-center mt-4">

          <div className="col-md-4 mb-4">
            <div className="about-card">
              <div className="icon-circle">
                <FaUser />
              </div>
              <h4>High Integrity</h4>
              <p>
                The peer-review process is double-blinded: the identity of
                the peer reviewers to the authors and the author's identity
                to the reviewers unrevealed.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="about-card">
              <div className="icon-circle">
                <FaUser />
              </div>
              <h4>Board Members</h4>
              <p>
                The editorial Board Member is a vital part of the SSRG
                International Journal promoting scholarship in the specialist field.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="about-card">
              <div className="icon-circle">
                <FaUser />
              </div>
              <h4>R & D Team</h4>
              <p>
                SSRG has an exclusive and robust research team for evaluating
                technical excellence and developing new products.
              </p>
            </div>
          </div>

        </div>

        {/* LONG CONTENT CENTER SECTION */}
        <div className="about-content-wrapper mt-5">
          <div className="about-content">

            <p>
              <strong>Seventh Sense Research Group® (SSRG)</strong> is a registered independent organisation
              that delivers support and services to education professionals and researchers worldwide
              by publishing international open-access journals.
            </p>

            <p>
              We aim to provide a high-level platform where cutting-edge advancements in
              Arts, Engineering, Humanities, Science & Technology can be shared.
            </p>

            <p>
              All manuscripts must be prepared in English and are subject to a rigorous
              and fair peer-review process.
            </p>

          </div>
        </div>

        
      </div>
    </div>
  );
}

export default AboutPage;