import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import journals from "./JournalsData";
import {
    FaBullseye,
    FaUsers,
    FaPaperPlane,
    FaBook,
    FaArchive,
    FaShieldAlt,
    FaUserEdit,
    FaUserTie,
    FaUserCheck,
    FaGlobe,
    FaMoneyBillWave,
    FaUniversity,
    FaFileAlt,
    FaCopyright
} from "react-icons/fa";
import "./JournalDetails.css";

function JournalDetails() {
    const { journalId } = useParams();
    const journal = journals.find((j) => j.id === parseInt(journalId));

    const [activeSection, setActiveSection] = useState("aims");

    if (!journal) {
        return (
            <div className="container text-center mt-5">
                <h2 className="text-danger">Journal Not Found</h2>
                <Link to="/" className="btn btn-success mt-3">
                    ← Back to Home
                </Link>
            </div>
        );
    }

    const menuItems = [
        { id: "aims", label: "Aim & Scope", icon: <FaBullseye /> },
        { id: "editorial", label: "Editorial Board", icon: <FaUsers /> },
        { id: "submission", label: "Paper Submission", icon: <FaPaperPlane /> },
        { id: "current", label: "Current Issue", icon: <FaBook /> },
        { id: "archives", label: "Archives", icon: <FaArchive /> },
        { id: "ethics", label: "Publication Ethics", icon: <FaShieldAlt /> },
        { id: "authors", label: "Guidelines for Authors", icon: <FaUserEdit /> },
        { id: "editors", label: "Guidelines for Editors", icon: <FaUserTie /> },
        { id: "reviewer", label: "Guidelines for Reviewer", icon: <FaUserCheck /> },
        { id: "indexing", label: "Indexing", icon: <FaGlobe /> },
        { id: "apc", label: "Article Processing Charges", icon: <FaMoneyBillWave /> },
        { id: "payment", label: "Mode of Payment for APC", icon: <FaUniversity /> },
        { id: "template", label: "Paper Template", icon: <FaFileAlt /> },
        { id: "copyright", label: "Copyright Form", icon: <FaCopyright /> }
    ];

    const sectionContent = {
        aims: "This journal focuses on high quality research publications in engineering and technology fields. It provides a platform for researchers worldwide.",
        editorial: "Our editorial board consists of experienced professors and researchers from reputed universities.",
        submission: "Authors can submit manuscripts through our online submission system.",
        current: "The current issue contains latest research articles.",
        archives: "Archives include all previous issues published since inception.",
        ethics: "We follow strict publication ethics to maintain academic integrity.",
        authors: "Authors must follow formatting guidelines before submission.",
        editors: "Editors ensure fair peer review process.",
        reviewer: "Reviewers provide unbiased and constructive feedback.",
        indexing: "The journal is indexed in reputed international databases.",
        apc: "Article Processing Charges (APC) details are available here.",
        payment: "Payment can be made via bank transfer or online methods.",
        template: "Download paper template in Word format.",
        copyright: "Submit signed copyright form after acceptance."
    };

    return (
        <>
            <div className="container-fuild">
                <header className="header bg-success" >
                    <h1>Book Details-Upcoming Issues</h1>
                </header>
            </div>
            <div className="container-fluid py-4">

                <div className="container">

                    <div className="row">

                        {/* LEFT MENU */}
                        <div className="col-lg-3 mb-4">
                            <div className="menu-card shadow">
                                {menuItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className={`menu-item ${activeSection === item.id ? "active-menu" : ""
                                            }`}
                                        onClick={() => setActiveSection(item.id)}
                                    >
                                        <span className="menu-icon">{item.icon}</span>
                                        {item.label}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="col-lg-9 d-flex justify-content-center">

                            <div className="card shadow-lg p-4 text-center journal-main-card">

                                {/* Book Image */}
                                <img
                                    src={journal.image}
                                    alt={journal.title}
                                    className="journal-image mb-4"
                                />

                                {/* Journal Details */}
                                <h4 className="mb-3 text-success">{journal.title}</h4>

                                <p className="mb-2">
                                    <strong>Short Name:</strong> {journal.short}
                                </p>

                                <p className="mb-2">
                                    <strong>ISSN:</strong> {journal.issn}
                                </p>

                                <p className="mb-0">
                                    <strong>Email:</strong>{" "}
                                    <a href={`mailto:${journal.email}`} className="text-decoration-none">
                                        {journal.email}
                                    </a>
                                </p>
                                <p className="parah">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minima voluptatem cumque architecto, distinctio nulla incidunt necessitatibus illo mollitia! Enim, porro! Atque dolores amet unde molestiae quaerat dolorum distinctio ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, exercitationem. Velit similique quis, nesciunt consequatur ab quod in voluptatibus, sed fugiat, nihil accusamus ullam dolore odit error autem quasi tempore.Lorem ipsum dolor sit amet and to be consectetur adipisicing elit. Nemo, repudiandae libero veritatis iste pariatur laboriosam dicta voluptatem ab aliquam impedit.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default JournalDetails;