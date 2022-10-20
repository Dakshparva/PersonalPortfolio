import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Contact from "../components/Contact";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
    <Contact/>
      <div className="socialMedia">
        <a href="https://www.instagram.com/art_by_daksh_parva/">
        <InstagramIcon  />
        </a>
        <a href="https://www.linkedin.com/in/dakshath-kumar-n-4a2a66114">
        <LinkedInIcon />
        </a>
        <a href="https://web.whatsapp.com/send?phone=918553606553">
        <WhatsAppIcon />
        </a>

       
      </div>
      <p>Address & phone:</p>
     <p> Bengaluru, Karnataka - 571301</p>
      <p> &copy; 2022 Dakshath kumar</p>
    </div>
  );
}

export default Footer;