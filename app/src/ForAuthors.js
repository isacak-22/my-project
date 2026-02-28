import React, { useState } from "react";

function ForAuthors() {

    const [activeSection, setActiveSection] = useState("Publication Ethics");

    const sections = {
        "Publication Ethics": [
            "Article Assessment",
            "Plagiarism",
            "Duplicate Submission",
            "Citation Manipulation",
            "Data Fabrication and Falsification",
            "Improper Author Contribution or Attribution",
            "Redundant Publications",
            "Conflicts of Interest"
        ],
        "Step by Step Guidelines for Authors": [
            "Prepare Manuscript",
            "Format Guidelines",
            "Submit Online",
            "Peer Review Process",
            "Final Proofreading"
        ],
        "Important Items when submitting a manuscript": [
            "Cover Letter",
            "Author Details",
            "Abstract",
            "Keywords",
            "References"
        ],
        "What is Open Access?": [
            "Definition",
            "Benefits",
            "Author Rights",
            "Licensing"
        ],
        "Review Process": [
            "Initial Screening",
            "Peer Review",
            "Reviewer Comments",
            "Final Decision"
        ],
        "Conflicts of Interest": [
            "Financial Conflicts",
            "Personal Conflicts",
            "Disclosure Policy"
        ],
        "Licensing Policy": [
            "Creative Commons",
            "Reuse Policy",
            "Distribution Rights"
        ],
        "Copyrights Infringement": [
            "Copyright Rules",
            "Violation Handling",
            "Legal Actions"
        ],
        "Correction Policy": [
            "Erratum",
            "Retraction",
            "Article Updates"
        ]
    };

    return (

        <>
            {/* Header */}
            <div className="bg-success text-white text-center py-4">
                <h2>For Authors - Upcoming Issues</h2>
            </div>
            <div className="container">
                <div className="row mt-4">

                    {/* Sidebar */}
                    <div className="col-md-3">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="text-success mb-3">For Authors</h5>

                                <ul className="list-group list-group-flush">
                                    {Object.keys(sections).map((section, index) => (
                                        <li
                                            key={index}
                                            className={`list-group-item ${activeSection === section ? "active" : ""}`}
                                            style={{ cursor: "pointer" }}
                                            onClick={() => setActiveSection(section)}
                                        >
                                            {section}
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="col-md-9">
                        <h3 className="text-success mb-3">{activeSection}</h3>

                        <div className="accordion" id="dynamicAccordion">
                            {sections[activeSection].map((item, index) => (
                                <div className="accordion-item" key={index}>
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${index}`}
                                        >
                                            {item}
                                        </button>
                                    </h2>
                                    <div
                                        id={`collapse${index}`}
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#dynamicAccordion"
                                    >
                                        <div className="accordion-body">
                                            Detailed policy regarding <strong>{item}</strong> will be explained here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid laborum non, laudantium quod sapiente repudiandae necessitatibus minus totam, et commodi ab accusamus saepe facere dolorem repellat eum, excepturi nesciunt earum!
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default ForAuthors;