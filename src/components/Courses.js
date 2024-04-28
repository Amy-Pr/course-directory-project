import React from 'react';
import {Outlet, NavLink} from "react-router-dom";


const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to="html">HTML</NavLink></li>
        <li><NavLink to="css">CSS</NavLink></li>
        <li><NavLink to="javascript">JavaScript</NavLink></li>
        {/* Render page not found page if any other url is used. Only use this if using descendent and not nested routes
        <Route index element={<Navigate replace to="/404"/>}/> */}
      </ul>
    </div>
    {/* The Outlet component tells us where any nested routes written inside of App.js should render in the parent component.  */}
    <Outlet />
  </div>
);

export default Courses;