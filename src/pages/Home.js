import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import { Button } from "@material-ui/core";
import profileAnimation from "../assets/profileAnimation.mp4";


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
                <a href="mailto:dakshathkumar@gmail.com"><EmailIcon/></a>
                   <a href="https://github.com/Dakshparva"><GithubIcon /></a>
                      <p>
                         <Button variant="contained"  download='Dakshath_Resume' href={require('../assets/Resume-Dakshath kumar N.pdf')}>
                  Download Resume
                  </Button>
            </p>
        </div>
      </div>
      
      
      <div className="skills">
        <h1> Skills</h1>
      
            <h2> Front-End</h2>
            <div className="i-title">
            <div className="i-title-wrapper">
            <div className="i-title-item">ReactJS</div>
            <div className="i-title-item">HTML, CSS</div>  
            <div className="i-title-item">BootStrap, Material-UI</div> 
            <div className="i-title-item">TailwindCSS</div>
            <div className="i-title-item">StyledComponents</div>
            </div>
            </div>
            <h2>Back-End</h2>
            <div className="i-title">
            <div className="i-title-wrapper-1">
            <div className="i-title-item">NodeJS</div>
            <div className="i-title-item">ExpressJS</div> 
            </div>
            </div>
        
          
            <h2>Languages</h2>
            <div className="i-title">
            <div className="i-title-wrapper-2">
            <div className="i-title-item">Java</div>
            <div className="i-title-item">Javascript</div> 
            </div>
            </div>
        
        
      </div>
      
    </div>
  );
}

export default Home;