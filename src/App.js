import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HTMLCourses, CSSCourses, JSCourses } from './data/courses';
import Home from "./components/Home";
import About from "./components/About";
import Header from "./components/Header";
import Teachers from "./components/Teachers";
import Courses from "./components/Courses";
import CourseContainer from "./components/courses/CourseContainer";
import NotFound from "./components/NotFound";
import Featured from "./components/Featured";

function App() {
  return (
    <div className="container">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} /> 
      {/* Forward slash indicates root path */}
      <Route path="about" element={<About />} />
      <Route path="teachers"> 
        <Route index element={<Teachers />} />
        <Route path=":topic/:name" element={<Featured />} />
      </Route>
      
      <Route path="courses" element={<Courses />}>
      {/* The first Route makes the Courses page default to the HTML content and keeps Courses link active. Setting 'replace' to true also fixes history stack. */}
          <Route index element={<Navigate replace to="/courses/html"/>}/> 
          <Route path="html" element={<CourseContainer data={HTMLCourses} />} />
          <Route path="css" element={<CourseContainer data={CSSCourses} />} />
          <Route path="javascript" element={<CourseContainer data={JSCourses} />} />
      </Route>
      {/* /Renders Page not found page when any other url is used */}
      <Route path="*" element={<NotFound />} />
    </Routes>

    </div>
  );
}

export default App;
