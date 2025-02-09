import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styling/CallForm.css"; 
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CallForm = () => {
  
  const navigate = useNavigate()


   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const [email, setEmail] = useState("");
  const [number, setnumber] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const userEmail =localStorage.getItem("user")
    if (userEmail) setEmail(userEmail);
  
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('https://deploy-backend-3-kp6o.onrender.com/api/add', {
            email,
            number,
            message,
            date,
            time
          });
         
        await  toast('appointment added successfully');
          await navigate('/Consultation')
        }
     catch (err) {
        console.error(err);
        toast('getting error')
    }
  };
  


  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Schedule a Call</h2>
        <form onSubmit={handleSubmit}>
          <label>Your Email</label>
          <input type="email" value={email} readOnly />

          <label>Phone Number</label>
          <input type="tel"
           value={number}
            onChange={(e) => setnumber(e.target.value)}
             />


          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            rows="3"
          ></textarea>

          <div className="input-group">
            <div>
              <label>Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div>
              <label>Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="form_butt">Send Call Request</button>
        </form>
      </div>
    </div>
  );
};

export default CallForm;
