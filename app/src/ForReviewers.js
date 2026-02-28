// ForReviewers.js - Matches screenshot with bullet points on left + content on right
import React, { useState } from 'react';
import './ForReviewers.css';

const ForReviewers = () => {
    const [activeSection, setActiveSection] = useState('step-guide');

    const menuItems = [
        { id: 'step-guide', title: 'Step by step guide' },
        { id: 'working-editors', title: 'Working with editors' },
        { id: 'review-clinical', title: 'How to review clinical manuscripts' },
        { id: 'reviewer-responsibility', title: 'Reviewer Responsibility' }
    ];

    const contentSections = {
        'step-guide': (
            <div className="content-panel">
                <h3 className='text-success'>Step by step guide to reviewers</h3> <br />
                <p>You should take note of the paper while helping editors decide whether to accept an article. This section will help you understand why reviewers recommendations are looking for a good review.</p>
                <p>Evaluation of the review report between journals. Your structural comments, while there are more information may not provide others reviews for the journal which are of use to you.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, alias. Cumque eum at sunt commodi!</p>
                <p>Other material requires a formal approach. Sometimes you will receive questions in your review invitation. It is a good idea to tackle these first.</p>
                <p>There are many techniques for brainstorming; whichever one you choose, this stage of paragraph development cannot be skipped. Building paragraphs can be like building a skyscraper: there must be a well-planned foundation that supports what you are building. Any cracks, inconsistencies, or other corruptions of the foundation can cause your whole paper to crumble.</p>
            </div>
        ),
        'working-editors': (
            <div className="content-panel">
                <h3 className='text-success'>Working with editors</h3> <br />
                <p>Helps you understand why recommendations are looking for a good review. Editors may not provide others reviews for the journal.</p>
                <p>Unified: All of the sentences in a single paragraph should be related to a single controlling idea (often expressed in the topic sentence of the paragraph).</p>
                <p>Well-developed: Every idea discussed in the paragraph should be adequately explained and supported through evidence and details that work together to explain the paragraph’s controlling idea (Rosen and Behrens 119).</p>
                <p>There are many different ways to organize a paragraph. The organization you choose will depend on the controlling idea of the paragraph. Below are a few possibilities for organization, with links to brief examples:</p>
                <p>From the list above, let’s choose “illustration” as our rhetorical purpose. We’ll walk through a 5-step process for building a paragraph that illustrates a point in an argument. For each step there is an explanation and example. Our example paragraph will be about human misconceptions of piranhas.</p>
                <p>Evaluation of the review report between journals. Your structural comments, while there are more information.</p>
            </div>
        ),
        'review-clinical': (
            <div className="content-panel">
                <h3 className='text-success'>How to review revised manuscripts</h3> <br />
                <p>Revised manuscripts are sent back once lightly commented upon without changes. Most are at least lightly commented upon.</p>
                <p>Well-developed: Every idea discussed in the paragraph should be adequately explained and supported through evidence and details that work together to explain the paragraph’s controlling idea (Rosen and Behrens 119).</p>
                <p>There are many different ways to organize a paragraph. The organization you choose will depend on the controlling idea of the paragraph. Below are a few possibilities for organization, with links to brief examples:</p>
                <p>There are many different ways to organize a paragraph. The organization you choose will depend on the controlling idea of the paragraph. Below are a few possibilities for organization, with links to brief examples:</p>
                <p>From the list above, let’s choose “illustration” as our rhetorical purpose. We’ll walk through a 5-step process for building a paragraph that illustrates a point in an argument. For each step there is an explanation and example. Our example paragraph will be about human misconceptions of piranhas.</p>
                <p>Evaluation of the review report between journals. Your structural comments, while there are more information.</p>
                <p>Minor changes will usually be requested by the editor from the original because they are pointed out.</p>
            </div>
        ),
        'reviewer-responsibility': (
            <div className="content-panel">
                <h3 className='text-success'>Reviewing Registered Reports</h3> <br />
                <p>Review comments should be quick and only check this content requires. Your recommendation to the editor will help ensure a publication standard.</p>
                <p>Revised manuscripts are sent back once lightly commented upon without changes. Most are at least lightly commented upon.</p>
                <p>Well-developed: Every idea discussed in the paragraph should be adequately explained and supported through evidence and details that work together to explain the paragraph’s controlling idea (Rosen and Behrens 119).</p>
                <p>There are many different ways to organize a paragraph. The organization you choose will depend on the controlling idea of the paragraph. Below are a few possibilities for organization, with links to brief examples:</p>
                <p>There are many different ways to organize a paragraph. The organization you choose will depend on the controlling idea of the paragraph. Below are a few possibilities for organization, with links to brief examples:</p>
                <p>From the list above, let’s choose “illustration” as our rhetorical purpose. We’ll walk through a 5-step process for building a paragraph that illustrates a point in an argument. For each step there is an explanation and example. Our example paragraph will be about human misconceptions of piranhas.</p>
                <p>Evaluation of the review report between journals. Your structural comments, while there are more information.</p>
                <p>Evaluation of the review report between journals. Your structural comments, while there are more information.</p>
            </div>
        )
    };

    return (
        <>
            <div className="">
                <header className="header bg-success">
                    <div className="header-content ">
                        <h1>For Reviewers-Upcoming Issues</h1>
                    </div>
                </header>
            </div>
            <div className="container">
                <div className="reviewers-container">
                    <div className="main-content">
                        {/* Left Sidebar - Bullet menu */}
                        <nav className="sidebar">
                            <h3>For Reviewers</h3>
                            <ul>
                                {menuItems.map(item => (
                                    <li
                                        key={item.id}
                                        className={activeSection === item.id ? 'active' : ''}
                                        onClick={() => setActiveSection(item.id)}
                                    >
                                        • {item.title}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Right Side - Content Panel */}
                        <main className="content-area">
                            <div className="content-panel-container">
                                {contentSections[activeSection]}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForReviewers;
