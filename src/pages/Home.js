import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import profileAnimation from "../assets/profileAnimation.mp4"

import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <video src={profileAnimation} autoPlay loop muted className="back-video">
    
      </video>
      
      <div className="about">
    <div className="Header">
        <h2> Hi, My Name is Dakshath Kumar N</h2>
        </div>
        <div className="prompt">
        
          <p>A software developer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/dakshath-kumar-n-4a2a66114"><LinkedInIcon /></a>
          <a href="dakshathkumar@gmail.com"><EmailIcon /></a>
          <a href="https://github.com/Dakshparva"><GithubIcon /></a>
        </div>
      </div>
      
      
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM,
              Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS,ExpressJS
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;