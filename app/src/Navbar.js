// import React from "react";
// import { Link } from "react-router-dom";
// import { FaBookOpen } from "react-icons/fa";

// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light nav shadow-sm px-5 py-3 sticky-top">
//             <div className="container-fluid">

//                 <div className="d-flex align-items-center">
//                     <FaBookOpen size={35} className="text-success me-3" />
//                     <h3 className="m-0">Isac Research Library</h3>
//                 </div>

//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#navbarNav"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse justify-content-end fs-5" id="navbarNav">
//                     <ul className="navbar-nav fw-semibold">

//                         <li className="nav-item">
//                             <Link className="nav-link nav-link-3d" to="/">Home</Link>
//                         </li>

//                         <li className="nav-item">
//                             <Link className="nav-link nav-link-3d" to="/journals">Journals</Link>
//                         </li>

//                         <li className="nav-item">
//                             <Link className="nav-link nav-link-3d" to="/for-authors">
//                                 For Authors
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link nav-link-3d" to="/for-editors">
//                                 For Editors
//                             </Link>
//                         </li>

//                         <li className="nav-item">
//                             <Link className="nav-link nav-link-3d" to="/for-reviewers">
//                                 For Reviewers
//                             </Link>
//                         </li>

                       
//                     </ul>
//                 </div>

//             </div>
//         </nav>
//     );
// }

// export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light nav shadow-sm px-5 py-3 sticky-top">
            <div className="container-fluid">

                <div className="d-flex align-items-center">
                    <FaBookOpen size={35} className="text-success me-3" />
                    <h3 className="m-0">Isac Research Library</h3>
                </div>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end fs-5" id="navbarNav">
                    <ul className="navbar-nav fw-semibold">

                        <li className="nav-item">
                            <NavLink 
                                to="/" 
                                end
                                className={({ isActive }) => 
                                    isActive ? "nav-link active-link" : "nav-link"
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink 
                                to="/journals"
                                className={({ isActive }) => 
                                    isActive ? "nav-link active-link" : "nav-link"
                                }
                            >
                                Journals
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink 
                                to="/for-authors"
                                className={({ isActive }) => 
                                    isActive ? "nav-link active-link" : "nav-link"
                                }
                            >
                                For Authors
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink 
                                to="/for-editors"
                                className={({ isActive }) => 
                                    isActive ? "nav-link active-link" : "nav-link"
                                }
                            >
                                For Editors
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink 
                                to="/for-reviewers"
                                className={({ isActive }) => 
                                    isActive ? "nav-link active-link" : "nav-link"
                                }
                            >
                                For Reviewers
                            </NavLink>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;