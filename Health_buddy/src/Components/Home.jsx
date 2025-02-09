import React from "react";
import "./Home.css"; 
import { useNavigate } from 'react-router-dom';
import PatientIntake from "./home_part";

export const Home = () => {

    const navigate = useNavigate()

    function gotoForm(){
      navigate('/CallForm')
    }
    

  return (
    <>
    <div className="home-container">
    
      <div className="home-text">
        <h2 className="home-title">
          Patient Engagement Solution To <br/>Improve Outcomes
        </h2>
        <ul className="home-list">
          <li> ✔️Automated pre-visit patient intake process</li>
          <li>✔️Improved patient outcomes</li>
          <li>✔️Patient participation in their healthcare</li>
          <li>✔️Reduced patient wait times by 16 minutes per patient visit</li>
          <li>✔️70% less provider documentation time</li>
          <li>✔️720x average ROI</li>
          <li>✔️11 minutes saved per patient visit</li>
        
        </ul>
        <button className="home-button" onClick={gotoForm} >Free Consultation</button>
      </div>
      <img 
            src="https://st2.depositphotos.com/2001403/5308/v/950/depositphotos_53088729-stock-illustration-concept-for-health-care-and.jpg" 
            alt="Patient Intake" 
            className="image-home"
          />
    </div>
    <PatientIntake/>
    </>
  );
};

export default Home;
