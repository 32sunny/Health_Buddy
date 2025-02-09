import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styling/Profile.css';
import { toast } from 'react-toastify';

const PatientForm = () => {
  
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const [userEmail, setUserEmail] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [medicalConditions, setMedicalConditions] = useState('');

  // Fetch user email from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserEmail(storedUser);
      fetchPatientByEmail(storedUser);
    }
  }, []);



  // Fetch patient
  const fetchPatientByEmail = async (email) => {
    try {
      const response = await axios.get(`https://deploy-backend-3-kp6o.onrender.com/api/patients/email/${email}`);
      setSelectedPatient(response.data); // Store patient data
      setLoading(false);

      
      if (response.data) {
        setName(response.data.name || '');
        setAge(response.data.age || '');
        setPhone(response.data.phone || '');
        setMedicalConditions(response.data.medicalConditions || '');
      }
    } catch (err) {
      console.error('Error fetching patient:', err);
      setLoading(false);
    }
  };
 
  // Handle form submission (add or update patient)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedPatient) {
       
        await axios.put(`https://deploy-backend-3-kp6o.onrender.com/api/patients/${selectedPatient._id}`, {
          name,
          email: userEmail,
          age,
          phone,
          medicalConditions
        });
        toast('😊Profile updated successfully');
      } else {
        // Add new patient
        await axios.post('https://deploy-backend-3-kp6o.onrender.com/api/patients', {
          name,
          email: userEmail,
          age,
          phone,
          medicalConditions
        });
        toast('✔️Profile added successfully');
      }

      // Refresh patient details after update
      fetchPatientByEmail(userEmail);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <div className='Profile_container'>


      <h2>My Profile</h2>


      {loading ? (
    <p style={{color:'red'}}>Add your profile now</p>
) : selectedPatient ? (
    <div className="patient-details">
        <p><strong>Name:</strong> {selectedPatient.name}</p>
        <p><strong>Email:</strong> {selectedPatient.email}</p>
        <p><strong>Age:</strong> {selectedPatient.age}</p>
        <p><strong>Phone:</strong> {selectedPatient.phone}</p>
        <p><strong>Medical Conditions:</strong> {selectedPatient.medicalConditions}</p>
    </div>
) : (
    <p>Please Add your Profile</p>
)}


      <form onSubmit={handleSubmit}>
        <div>
          <label>Patient Name:</label><br/><br/>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Email:</label><br/><br/>
          <input type="email" value={userEmail} required disabled />
        </div>

        <div>
          <label>Age:</label><br/><br/>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Phone:</label><br/><br/>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className='impButton'>
          <label>Medical Conditions:</label>
          <input
            type="text"
            value={medicalConditions}
            onChange={(e) => setMedicalConditions(e.target.value)}
          />
       

        <button type="submit">
          {selectedPatient ? 'Update Profile' : 'Add Profile'}
        </button>

        </div>
      </form>

     
    </div>
    </>
  );
};

export default PatientForm;
