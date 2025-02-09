import React from "react";
import "./PatientIntake.css";

const PatientIntake = () => {
  return (
    <>
   <div className="my-personal">
    <div className="container">
      <h2 className="header">Bypass the Entire Front Desk</h2>
      <p className="description">
        Make DocResponse your new best employee by automating the entire pre-visit registration & check-in process, freeing up phone lines and streamlining your workflow with clerical data that goes straight to your charts.
      </p>
      <h3 className="sub-header">The #1 Companion For Healthcare Professionals Everywhere</h3>
      <div className="content">
        <div className="text-section">
          <h4 className="section-title">Patient Intake Made Easy</h4>
          <p className="text">
            Greet new patients with a smile and let DocResponse worry about administrative tasks like patient registration, insurance info, and screening.
          </p>
          <ul className="features-list">
            <li>✅ Capture demographics, pre-visit registration, insurance & diagnosis</li>
            <li>✅ Patients schedule appointments online with auto text reminders</li>
            <li>✅ Immediate EHR updates for accuracy</li>
            <li>✅ 11 minutes saved per patient visit</li>
          </ul>
          <p className="highlight">70% avg. decrease in documentation time</p>
          
          <button className="cta-button">Learn More About Patient Intake</button>
        </div>
      
       
     
      </div>
    </div>
    <div className="image-section">
        <img 
            src="https://enhancelanguageskills.com/wp-content/uploads/2023/04/Sin-titulo-1-Recuperado27-1014x1024.webp" 
            alt="Patient Intake" 
            className="image"
          />
        </div>

        </div>


        <div className="testimonial-container">
        <div className="testimonial-box">
        
        </div>
        <div className="info-section">
          <h4 className="section-title">Reduce No-shows & Fill Your Calendar</h4><br/>
          <p className="text">Set automatic text and email reminders for upcoming appointments...</p><br/>
          <ul className="features-list">
            <li>✅ HIPAA-compliant telemedicine software</li><br/>
            <li>✅ Easy appointment reminders & payment collection (0% transaction fees)</li><br/>
            <li>✅ No log-ins or app installations</li>
          </ul> 
          <p className="highlight-2">20x avg. ROI</p><br/><br/>
          <button className="cta-button">Learn More About Patient Scheduling</button>
        </div>
      </div>
      
      <div className="content-r">
        <div className="text-section">
          <h4 className="section-title">Pick a Form, Any Form</h4>
          <p className="text">No printers, pens, or white-out needed. Send digital forms securely...</p>
          <ul className="features-list">
            <li>✅ Collect payments easily and get real-time balances/copays at check-in</li>
            <li>✅ HIPAA-compliant consent forms, questionnaires, or payment info</li>
            <li>✅ Safeguard and track patient information on a secure cloud</li>
          </ul><br/><br/><br/>
          <button className="cta-button">Learn More About Intake Forms</button>
        </div>
        <div className="image-section">
          <img 
            src="https://terumoindiaskilllab.com/assets/images/Laptop-White.png" 
            alt="Digital Forms" 
            className="image"
          />
        </div>
      </div>
      </>
  );
};

export default PatientIntake;
