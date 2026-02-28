import React from "react";
import { Link } from "react-router-dom";
import "./LicensePolicyPage.css";

function LicensePolicyPage() {
  return (
    <div>

      {/* Top Green Header */}
      <div className="license-top-header">
        <h2>LicensePolicy - Upcoming Issues</h2>
      </div>

      <div className="license-container">

        {/* Breadcrumb */}

        <div className="license-content-wrapper">

          {/* Left Sidebar */}
          <div className="license-sidebar">
            <h4>For Editors</h4>
            <ul>
              <li>▶ The Editorial Work Flow</li>
              <li>▶ How to Become an Editor ?</li>
              <li>▶ Peer Review Policy and Procedure</li>
              <li>▶ How to Propose Special Issue ?</li>
            </ul>
          </div>

          {/* Right Content */}
          <div className="license-main-content">
            <h2>For Editors</h2>
            <h3>The Editorial Workflow</h3>

            <p>
              The editorial workflow can be broadly summarized into 10 steps.
            </p>

            <h5>1. Submission of Paper</h5>
            <p>
              The corresponding or submitting author submits the paper
              to the journal via an online system such as Scholar-One.
            </p>

            <h5>2. Editorial Office Assessment</h5>
            <p>
              The journal checks the paper’s composition and arrangement
              against the journal’s Author Guidelines.
            </p>

            <h5>3. Appraisal by the Editor-in-Chief (EIC)</h5>
            <p>
              The EIC checks that the paper is appropriate for the journal
              and sufficiently original and interesting.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default LicensePolicyPage;
