
import React, { useState } from 'react';
import axios from 'axios';
import './authentication.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      const response = await axios.post('http://localhost:5000/auth/register', {
        name,
        email,
        password,
      }); 
            toast("✔️ signup succesfully")
      setName("")
      setEmail("")
      setPassword("")
     navigate('/login')
    } catch (err) {
      toast(`❌ Failed to login: ${err.response.data.message || "Unknown error"}`);
    }
  };

  return (
    <div className='back_ground'>
    <div className='login-container'>
      <h2  className='login-title'>Sign Up</h2>
      <form onSubmit={handleSubmit}  className='login-form '>
        <div>
         
          <input
            placeholder='Name'
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
              className='login-input'
          />
        </div>
        <div>
       
          <input
            placeholder='Email'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
              className='login-input'
          />
        </div>
        <div>
    
          <input
          placeholder='Password'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
              className='login-input'
          />
        </div>

        <button type="submit" className='login-button '>Sign Up</button>
        <p> Already have an account?{' '}
          <Link to='/login' id='links'>
           Login
          </Link></p>
      </form>
    </div>
    </div>
  )
}

export default SignUp;
