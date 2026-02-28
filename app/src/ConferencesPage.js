import React from "react";
import { Link } from "react-router-dom";
import { FaMicrophone, FaPenNib, FaFileAlt } from "react-icons/fa";
import "./ConferencesPage.css";

function ConferencesPage() {
    return (
        <div>

            {/* GREEN HEADER */}
            <div className="conference-header text-center">
                <h2>Conference- Upcoming Issues</h2>
            </div>

            <div className="container py-4">

                {/* Breadcrumb */}


                <h2 className="conference-title">Conference</h2>

                {/* THREE CARDS */}
                <div className="row text-center mt-4">

                    {/* Card 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="conference-card">
                            <div className="icon-box">
                                <FaMicrophone />
                            </div>
                            <h4>Upcoming Conference</h4>
                            <p>
                                International conferences will be in various states of India
                                like Tamilnadu, Andhra Pradesh, Telangana, Karnataka,
                                Kerala, Maharashtra, Goa, Mumbai, etc.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="conference-card">
                            <div className="icon-box">
                                <FaPenNib />
                            </div>
                            <h4>Conference Proposal</h4>
                            <p>
                                SSRG sponsors for organizing the International or National
                                conferences in your college. This initiative strengthens
                                research community and disseminates knowledge.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="conference-card">
                            <div className="icon-box">
                                <FaFileAlt />
                            </div>
                            <h4>Special Issue</h4>
                            <p>
                                The special issue is our add-on issue from guest editors
                                significantly involved and recognized in their research areas.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default ConferencesPage;