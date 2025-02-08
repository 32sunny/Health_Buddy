import React from "react";
import "../styling/Footer.css"
import { Facebook, Twitter, Linkedin, Youtube, Github } from "lucide-react"


const Footer = () => {
  return (
    <div className="container">
      <footer className="footer">
        <div className="footer-column">
          <h4>HealthBuddy</h4>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>For patients</h4>
          <ul>
            <li>Search for doctors</li>
            <li>Search for clinics</li>
            <li>Search for hospitals</li>
            <li>HealthBuddy Plus</li>
            <li>Covid Hospital listing</li>
         
          </ul>
        </div>
        <div className="footer-column">
  
          <h4>For clinics</h4>
          <ul>
            <li>Ray by HealthBuddy</li>
            <li>HealthBuddy Reach</li>
            <li>Ray Tab</li>
            <li>HealthBuddy Pro</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>For hospitals</h4>
          <ul>
            <li>Insta by HealthBuddy</li>
            <li>Qikwell by HealthBuddy</li>
            <li>HealthBuddy Profile</li>
            <li>HealthBuddy Reach</li>
            <li>HealthBuddy Drive</li>
          </ul>
        
        </div>
        <div className="footer-column">
          <h4>More</h4>
          <ul>
            <li>Help</li>
            <li>Developers</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
       
          </ul>
        
        
        </div>
        <div className="footer-bottom">
       
        <ul className="social">
          <Facebook size={24} />
      <Twitter size={24} />
      <Linkedin size={24} />
      <Youtube size={24} />
      <Github size={24} />
          </ul>
          <p>© 2025, HealthBuddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
