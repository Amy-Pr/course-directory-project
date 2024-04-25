import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Teachers from "./components/Teachers";
import Courses from "./components/Courses"

function App() {
  return (
    <div className="container">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} /> 
      {/* Forward slash indicates root path */}
      <Route path="about" element={<About />} />
      <Route path="teachers" element={<Teachers />} />
      <Route path="courses" element={<Courses />} />
    </Routes>

    </div>
  );
}

export default App;
