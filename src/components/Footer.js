import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/art_by_daksh_parva/">
        <InstagramIcon  />
        </a>
        <a href="https://www.linkedin.com/in/dakshath-kumar-n-4a2a66114">
        <LinkedInIcon />
        </a>
       
      </div>
      <p> &copy; 2022 Dakshath kumar</p>
    </div>
  );
}

export default Footer;