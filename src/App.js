import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Teachers from "./components/Teachers";
import Courses from "./components/Courses";
import CSS from "./components/courses/CSS";
import HTML from "./components/courses/HTML";
import JavaScript from "./components/courses/JavaScript";

function App() {
  return (
    <div className="container">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} /> 
      {/* Forward slash indicates root path */}
      <Route path="about" element={<About />} />
      <Route path="teachers" element={<Teachers />} />
      <Route path="courses" element={<Courses />}>
          <Route path="html" element={<HTML />} />
          <Route path="css" element={<CSS />} />
          <Route path="javascript" element={<JavaScript />} />
      </Route>
    </Routes>

    </div>
  );
}

export default App;
