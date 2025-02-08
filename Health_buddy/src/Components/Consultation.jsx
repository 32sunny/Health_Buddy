import React from "react";
import '../styling/Consultaion.css'
import HealthConsultation from "./Consaltaion_Part";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import HealthQueries from './HealthQueries'
import TestimonialCarousel from "./Testimonial";
const Consultaion = () => {

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const navigate = useNavigate()

function gotoForm(){
  navigate('/CallForm')
}


  return (
    <div className="Consultaionlpage">
    <div className="home_container">
      <h1>Skip the travel!<br/>
      Take Online Doctor Consultation 
      <button onClick={gotoForm}> connect with Doctor </button> 
      <p>
     
 🎖️Verified Doctors  🗒️Digital Prescription ⭐Free Followup
      </p>  </h1> 
      
        <div className="content-pic">
      </div>


      </div>
 <HealthConsultation/>
 <HealthQueries/>
 <TestimonialCarousel/>

    </div>
  );
};

export default Consultaion;