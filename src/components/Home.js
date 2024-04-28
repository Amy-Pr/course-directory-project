import React, { useRef } from 'react';
import {useNavigate} from "react-router-dom"; //does pretty much the same as Navigate, except this is a hook. See documentation.
// import { Link } from "react-router-dom";

const Home = () => {
  const name = useRef();
  const topic = useRef();
  let navigate = useNavigate(); //Hooks can only be called inside the body of a function component -- so can't put useNavigate inside handleSubmit

  //Sets the url programmatically when the form is submitted based on user input
  const handleSubmit = (e) => {
    e.preventDefault();
    let teacherName = name.current.value;
    let teacherTopic = topic.current.value;
    let path = `teachers/${teacherTopic}/${teacherName}`;
    navigate(path); //Don't want to use "replace" as parameter because we want Home to stay in the history stack
  }

  return (
    <div className="main-content home">
      <h2>Front End Course Directory</h2>
      <p>This fun directory is a project for the <em>React Router Basics</em> course on Treehouse.</p>
      <p>Learn front end web development and much more! This simple directory app offers a preview of our course library. Choose from many hours of content, from HTML to CSS to JavaScript. Learn to code and get the skills you need to launch a new career in front end web development.</p>
      <p>We have thousands of videos created by expert teachers on web design and front end development. Our library is continually refreshed with the latest on web technology so you will never fall behind.</p>
      <hr />

      <h3>Featured Teachers</h3>
      
      {/* <Link to="teachers/HTML/Tommy-Wingo"> Tommy Wingo </Link>
      <Link to="teachers/HTML/Alan-Davies"> Alan Davies </Link>
      <Link to="teachers/CSS/Jimmy-Carr"> Jimmy Carr </Link> */}

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" ref={name}/>
        <input type="text" placeholder="Topic" ref={topic}/>
        <button type="submit">Go!</button>
      </form>

    </div>
  );
}

export default Home;