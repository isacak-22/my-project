import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-top">
                    <div className="footer-column">
                        <h4>Quick Links</h4>
                        <ul className='line'>
                            <li><Link to="/">› Home</Link></li>
                            <li><Link to="/journals">› Journals</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Authors</h4>
                       <ul className='line'>
                        
                             <li><Link to="for-authors">› Paper submission</Link></li>
                             <li><Link to="/journals">›Preparation Guidelines</Link></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Editors</h4>
                        <ul>
                            <li>› Reviewer Guidelines</li>
                            <li>› Join as Editor</li>
                            <li>› Special Issue Proposal</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Events</h4>
                        <ul>
                            <li>› Conferences</li>
                            <li>› Awards</li>
                            <li>› Special Issues</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>SSRG</h4>
                        <ul>
                            <li>› Contact Us</li>
                            <li>› Indexing</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>Follow Us</h4>
                        <ul>
                            <li>› Facebook</li>
                            <li>› Linkedin</li>
                            <li>› Twitter</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="left">
                        © Isac Research Library- All right reserved
                    </div>

                    <div className="center">
                        IRL site and its metadata are licensed under CC BY-NC-ND
                    </div>

                    <div className="right">
                        Designed by <span className="highlight">IsacAk</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
