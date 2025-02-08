import React, { useEffect } from 'react';
import '../styling/HealthConsultation.css';
import { useNavigate } from 'react-router-dom';

const specialties = [
  { name: 'Gynaecology', price: '₹499', image: 'https://www.practo.com/consult/static/images/top-speciality-gynaecologist.svg' },
  { name: 'Sexology', price: '₹399', image: 'https://www.practo.com/consult/static/images/top-speciality-sexology.svg' },
  { name: 'General physician', price: '₹399', image: 'https://www.practo.com/consult/static/images/top-speciality-gp.svg' },
  { name: 'Dermatology', price: '₹449', image: 'https://www.practo.com/consult/static/images/top-speciality-dermatologist.svg' },
  { name: 'Psychiatry', price: '₹499', image: 'https://www.practo.com/consult/static/images/top-speciality-psychiatric.svg' },
  { name: 'Stomach and digestion', price: '₹399', image: 'https://www.practo.com/consult/static/images/top-speciality-stomach.svg' }
];

const concerns = [
  { name: 'Cough & Cold?', price: '₹399', image: 'https://www.practo.com/consult/static/images/cough-cold-v1.jpg' },
  { name: 'Period problems?', price: '₹499', image: 'https://www.practo.com/consult/static/images/period-problems-v1.jpg' },
  { name: 'Want to lose weight?', price: '₹499', image: 'https://www.practo.com/consult/static/images/lose-weight-v1.jpg' },
  { name: 'Skin problems?', price: '₹449', image: 'https://www.practo.com/consult/static/images/skin-problems-v1.jpg' }
];

const HealthConsultation = () => {

  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const navigate = useNavigate()

function gotoForm(){
  navigate('/CallForm')
}

  return (
    <div className="health-consultation">
      <div>
        <h2 className="section-title">25+ Specialities</h2>
        <p className="section-subtitle">Consult with top doctors across specialities</p>
        <div className="specialties-grid responsive-grid">
          {specialties.map((specialty, index) => (
            <div key={index} className="specialty-card">
              <img src={specialty.image} alt={specialty.name} className="card-image1" />
              <div className="card-content">
                <h3 className="specialty-name">{specialty.name}</h3>
                <p className="specialty-price">{specialty.price}</p>
                <button className="consult-button" onClick={gotoForm}>Consult now</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="section-title">Common Health Concerns</h2>
        <p className="section-subtitle">Consult a doctor online for any health issue</p>
        <div className="concerns-grid responsive-grid">
          {concerns.map((concern, index) => (
            <div key={index} className="concern-card">
              <img src={concern.image} alt={concern.name} className="card-image" />
              <div className="card-content">
                <h3 className="concern-name">{concern.name}</h3>
                <p className="concern-price">{concern.price}</p>
                <button className="consult-button" onClick={gotoForm}>Consult Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthConsultation;
