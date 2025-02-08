import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styling/Testimonial.css";

const testimonials = [
  { name: "Preeti", age: "26 yr old IT Professional", feedback: "I was in pain and it was really late at night. I wanted help but couldn’t go to see the doctor due to lateness of the hour. Consulted online on Practo and doctor responded immediately.", image: "https://randomuser.me/api/portraits/women/1.jpg" },
  { name: "Deepak", age: "29 yr old Traveller", feedback: "I was travelling to a remote place for scuba diving and injured myself. Tough to find doctors around, so did an online consultation on Practo and hey presto, I have my medicines. Disruptive. Convenient.", image: "https://randomuser.me/api/portraits/men/1.jpg" },
  { name: "Anamika Bajpai", age: "Anonymous", feedback: "Excellent experience consulting on Practo. I could solve my health issue without going to a clinic! Highly recommended!", image: "https://randomuser.me/api/portraits/women/2.jpg" },
  { name: "Rahul Kumar", age: "35 yr old Engineer", feedback: "Quick and reliable consultation. Saved me a trip to the hospital! Highly efficient service.", image: "https://randomuser.me/api/portraits/men/2.jpg" },
  { name: "Sanya Mehra", age: "24 yr old Student", feedback: "Great service! Got the right advice without stepping out. Highly recommend online consultation.", image: "https://randomuser.me/api/portraits/women/3.jpg" },
  { name: "Amit Singh", age: "40 yr old Teacher", feedback: "Fantastic platform! Got professional advice within minutes.", image: "https://randomuser.me/api/portraits/men/3.jpg" },
  { name: "Neha Sharma", age: "30 yr old Lawyer", feedback: "Convenient and time-saving. I could consult a doctor while working from home!", image: "https://randomuser.me/api/portraits/women/4.jpg" },
  { name: "Vikram Verma", age: "45 yr old Businessman", feedback: "Impressed by the quality of consultation. Hassle-free and efficient.", image: "https://randomuser.me/api/portraits/men/4.jpg" }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = testimonials.length;
  const cardsToShow = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + cardsToShow, totalCards - cardsToShow));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - cardsToShow, 0));
  };

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-heading">What our users say about online consultation</h2>
      <div className="testimonial-carousel">
        <button onClick={handlePrev} className="nav-button left-button">
          <FaChevronLeft size={24} />
        </button>
        <div className="testimonial-wrapper">
          <div className="testimonial-slider" style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-age">{testimonial.age}</p>
                <p className="testimonial-feedback">{testimonial.feedback}</p>
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleNext} className="nav-button right-button">
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
