// ForEditors.js - Fully Working with React State
import React, { useState } from 'react';
import './ForEditors.css';

const ForEditors = () => {
    const [activeAccordion, setActiveAccordion] = useState('workflow'); // First one open by default

    const toggleAccordion = (section) => {
        setActiveAccordion(activeAccordion === section ? null : section);
    };

    const sections = {
        workflow: {
            title: 'Editorial Workflow',
            content: (
                <ol className="numbered-list">
                    <li>The editorial workflow can be summarized in 3-5 steps.</li>
                    <li>Submission of submitting author's paper/journal, this is an online system</li>
                    <li>Editorial check paper's completion and arrangement against the Journal Guidelines to make it</li>
                    <li>Appraised that the EIC is-dc appropriate journal and not submitted or interesting, not</li>
                    <li>may require without reviewed further.</li>
                    <li>The editorial workflow can be summarized in 3-5 steps.</li>
                    <li>Submission of submitting author's paper/journal, this is an online system</li>
                    <li>Editorial check paper's completion and arrangement against the Journal Guidelines to make it</li>
                    <li>Appraised that the EIC is-dc appropriate journal and not submitted or interesting, not</li>
                    <li>may require without reviewed further.</li>
                </ol>
            )
        },
        review: {
            title: 'Peer Review Policy',
            content: (
                <ol className="numbered-list">
                    <li>The editorial workflow can be summarized in 3-5 steps.</li>
                    <li>Submission of submitting author's paper/journal, this is an online system</li>
                    <li>Editorial check paper's completion and arrangement against the Journal Guidelines to make it</li>
                    <li>Appraised that the EIC is-dc appropriate journal and not submitted or interesting, not</li>
                    <li>may require without reviewed further.</li>
                    <li>The editorial workflow can be summarized in 3-5 steps.</li>
                    <li>Submission of submitting author's paper/journal, this is an online system</li>
                    <li>Editorial check paper's completion and arrangement against the Journal Guidelines to make it</li>
                    <li>Appraised that the EIC is-dc appropriate journal and not submitted or interesting, not</li>
                    <li>may require without reviewed further.</li>
                </ol>
            )

        },
        special: {
            title: 'Special Issue',
            content: (
                <ol className="numbered-list">
                    <li>The editorial workflow can be summarized in 3-5 steps.</li>
                    <li>Submission of submitting author's paper/journal, this is an online system</li>
                    <li>Editorial check paper's completion and arrangement against the Journal Guidelines to make it</li>
                    <li>Appraised that the EIC is-dc appropriate journal and not submitted or interesting, not</li>
                    <li>may require without reviewed further.</li>
                    <li>The editorial workflow can be summarized in 3-5 steps.</li>
                    <li>Submission of submitting author's paper/journal, this is an online system</li>
                    <li>Editorial check paper's completion and arrangement against the Journal Guidelines to make it</li>
                    <li>Appraised that the EIC is-dc appropriate journal and not submitted or interesting, not</li>
                    <li>may require without reviewed further.</li>
                </ol>
            )
        }
    };

    return (
        <>
            <div className="container-fuild">
                <header className="header bg-success" >
                    <h1>ForEditors-Upcoming Issues</h1>
                </header>
            </div>
            <div className="editors container">
                <div className="main-content">
                    {/* Left Sidebar */}
                    <nav className="sidebar">
                        <h3>For Editors</h3>
                        <ul>
                            <li
                                className={activeAccordion === 'workflow' ? 'active' : ''}
                                onClick={() => toggleAccordion('workflow')}
                            >
                                Editorial Workflow
                            </li>
                            <li
                                className={activeAccordion === 'review' ? 'active' : ''}
                                onClick={() => toggleAccordion('review')}
                            >
                                Peer Review Policy
                            </li>
                            <li
                                className={activeAccordion === 'special' ? 'active' : ''}
                                onClick={() => toggleAccordion('special')}
                            >
                                Special Issue
                            </li>
                        </ul>
                    </nav>

                    {/* Right Side - Pure React Accordions */}
                    <main className="content-area">
                        <div className="accordion-container">
                            {Object.entries(sections).map(([key, section]) => (
                                <div key={key} className="accordion-item">
                                    <div
                                        className={`accordion-header ${activeAccordion === key ? 'active' : ''}`}
                                        onClick={() => toggleAccordion(key)}
                                    >
                                        {section.title}
                                        <span className="accordion-icon">
                                            {activeAccordion === key ? '−' : '+'}
                                        </span>
                                    </div>
                                    {activeAccordion === key && (
                                        <div className="accordion-body">
                                            {section.content}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default ForEditors;
