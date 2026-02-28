import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import Journals from './Journals';
import JournalDetails from './JournalDetails';  // NEW
import ForAuthors from './ForAuthors';
import ForEditors from './ForEditors';
import AboutPage from "./AboutPage";
import ConferencesPage from "./ConferencesPage";
import ForReviewers from './ForReviewers';
import OpenAccessPage from "./OpenAccessPage";
import LicensePolicyPage from "./LicensePolicyPage";
import LibraryPage from "./LibraryPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/journal/:journalId" element={<JournalDetails />} />  {/* NEW */}
        <Route path="/for-authors" element={<ForAuthors />} />
        <Route path="/for-editors" element={<ForEditors />} />
        <Route path="/for-reviewers" element={<ForReviewers />} />
         <Route path="/about" element={<AboutPage />} />
         <Route path="/conferences" element={<ConferencesPage />} />
         <Route path="/open-access" element={<OpenAccessPage />} />
<Route path="/license-policy" element={<LicensePolicyPage />} />
<Route path="/library" element={<LibraryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
