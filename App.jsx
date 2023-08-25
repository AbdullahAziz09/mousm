import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Professional from "./pages/Professional";
import TagLine from "./pages/TagLine";
import Education from "./pages/Education";
import Interest from "./pages/Interest";
import Language from "./pages/Language";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/professional" element={<Professional />} />
          <Route path="/education" element={<Education />} />
          <Route path="/interest" element={<Interest />} />
          <Route path="/language" element={<Language />} />
          <Route path="/tagline" element={<TagLine />} />
          <Route path="/tagline" element={<TagLine />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
