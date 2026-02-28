import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LibraryPage.css";
import ab1 from "./ab1.jpg";
import ca1 from "./ca1.jpg";
import ca2 from "./ca2.jpg";
import ca3 from "./ca3.jpg";

function LibraryPage() {
  return (
    <div>

      {/* Header Section */}
      <div className="library-header text-center py-4">
        <h2 className="fw-bold">Digital Library Collection</h2>
        <p className="text-light">
          Explore thousands of books, journals and research materials online.
        </p>
      </div>

      <div className="container py-5">

        {/* Library About Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h3 className="mb-3">About Our Digital Library</h3>
            <p>
              Our Digital Library provides access to academic books,
              engineering resources, computer science materials,
              and research journals. Students and professionals can
              explore high-quality educational content anytime, engineering resources, computer science materials,anywhere.
            </p>
            <p>
              We aim to support learning, innovation, and research
              through a modern and user-friendly platform.
            </p>
          </div>

          <div className="col-md-6 text-center">
            <img src={ab1} alt="Library" className="img-fluid rounded shadow" />
          </div>
        </div>

        {/* Carousel Section */}
        <h3 className="text-center mb-4">Featured Resources</h3>

        <Carousel className="mb-5">

          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src={ca1}
              alt="Engineering"
            />
            <Carousel.Caption>
              <h5>Engineering Mathematics</h5>
              <p>Complete reference for engineering students.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src={ca2}
              alt="Computer Science"
            />
            <Carousel.Caption>
              <h5>Computer Science</h5>
              <p>Programming, Data Structures & Algorithms.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src={ca3}
              alt="AI"
            />
            <Carousel.Caption>
              <h5>Artificial Intelligence</h5>
              <p>Machine Learning & Modern AI Concepts.</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>

      </div>
      {/* Description Section Below Carousel */}
      <div className="library-description text-center ">
        <h3 className="mb-3">Why Choose Our Digital Library?</h3>
        <p className="px-4">
          Our Digital Library offers a wide collection of academic and professional
          resources including Engineering, Computer Science, and Artificial Intelligence materials.
          Each resource is carefully selected to support students, researchers, and professionals
          in enhancing their knowledge and skills.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, culpa consequuntur quasi, dolor odit perspiciatis corporis, debitis the  iusto suscipit ab adipisci pariatur aliquam nisi. A corporis porro ad at cum?
        </p>

        <p className="px-4">
          With easy access, organized categories, and high-quality content,
          our platform ensures a seamless learning experience. Whether you are preparing
          for exams, conducting research, or exploring new technologies,
          our digital collection is designed to empower your academic journey.
        </p>
      </div>
    </div>
  );
}

export default LibraryPage;