
import React from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import journals from './JournalsData';  // ✅ FIXED: Add this import
import gl from './gl.jpg'


function Home() {
    const navigate = useNavigate();  // ✅ For routing

    return (
        <div>
            {/* Hero Section */}
            <div className="hero-section container-fluid py-5 sec">
                <div className="row align-items-center px-5">
                    {/* Left Content */}
                    <div className="col-md-6">
                        <h1 className="mb-3">
                            <span className="highlight-green">DIGITAL KNOWLEDGE</span><br />
                            LIBRARY PLATFORM
                        </h1>
                        <p className="hero-text">
                            Access world wide books, research materials, academic journals
                            and digital resources from our smart library system designed
                            for students and researchers.
                        </p>
                      <button
  className="btn btn-success px-4 py-2 mt-3"
  onClick={() => navigate("/library")}
>
  Explore Library »
</button>
                    </div>
                    {/* Right Image */}
                    <div className="col-md-6 text-center">
                        <img
                            src={gl}
                            className="d-block w-100"
                            alt="Slide 1" style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="container py-5">
                <div className="row text-center mb-5">
                    {/* About Us */}
                    <div className="col-md-3">
                        <h5 className="text-success fw-bold">
                            <i className="bi bi-people-fill me-2"></i>
                            About Us
                        </h5>
                        <hr />
                        <p>
                            Seventh Sense Research Group® (SSRG) is a registered
                            independent Organization, delivering supports and services...
                        </p>
                        <Link to="/about" className="text-success">Learn more</Link>
                    </div>
                    {/* Open Access */}
                    <div className="col-md-3">
                        <h5 className="text-success fw-bold">
                            <i className="bi bi-unlock-fill me-2"></i>
                            Open Access
                        </h5>
                        <hr />
                        <p>
                            In accordance with major definitions in scientific
                            literature (Budapest, Berlin and Bethesda declarations)...
                        </p>
                        <Link to="/open-access" className="text-success">
                            Learn more
                        </Link>
                    </div>
                    {/* License Policy */}
                    <div className="col-md-3">
                        <h5 className="text-success fw-bold">
                            <i className="bi bi-shield-lock-fill me-2"></i>
                            License Policy
                        </h5>
                        <hr />
                        <p>
                            SSRG International Journals publishes open access articles
                            under Attribution-NonCommercial-No Derivatives 4.0...
                        </p>
                        <Link to="/license-policy" className="text-success">
                            Learn more
                        </Link>
                    </div>
                    {/* Conferences */}
                    <div className="col-md-3">
                        <h5 className="text-success fw-bold">
                            <i className="bi bi-mic-fill me-2"></i>
                            Conferences
                        </h5>
                        <hr />
                        <p>
                            SSRG sponsors international conferences which play a major
                            role in knowledge sharing among researchers.
                        </p>
                        <Link to="/conferences" className="text-success">Learn more</Link>
                    </div>
                </div>
            </div>

            {/* Journals Section - ✅ CLICKABLE CARDS */}
            <div className="container py-5">
                <h1 className="text-center mb-5">LIBRARY INTERNATIONAL JOURNALS</h1>
                <div className="row">
                    {journals.map((journal) => (
                        <div
                            className="col-6 col-md-3 mb-4"
                            key={journal.id}
                            onClick={() => navigate(`/journal/${journal.id}`)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div
                                className="card p-3 text-center shadow h-100 position-relative overflow-hidden"
                                style={{
                                    transition: 'all 0.3s ease',
                                    border: '2px solid transparent'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.borderColor = '#198754';
                                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(25,135,84,0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.borderColor = 'transparent';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                                }}
                            >
                                <div className="position-absolute top-0 end-0 bg-success text-white p-2 rounded-start fs-6 fw-bold">
                                    View →
                                </div>
                                <img
                                    src={journal.image}
                                    alt={journal.short}
                                    style={{ height: "220px", objectFit: "contain" }}
                                />
                                <h6 className="mt-3 mb-2">{journal.title}</h6>
                                <p className="text-muted mb-0 small">({journal.short})</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;  // ✅ FIXED: Default export
