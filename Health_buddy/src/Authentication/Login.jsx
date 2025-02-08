
import React, { useState } from 'react';
import axios from 'axios';
import './authentication.css'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


 
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password,
      });
      toast(" ✔️login succesfully")
      setEmail("")
      setPassword("")
      localStorage.setItem('user', email)
    await navigate('/')
 
    } catch (err) {
      toast(` ❌ Failed to login: ${err.response.data.message || "Unknown error"}`);
    }
  }

  return (
    <div className='back_ground'>
    <div className='login-container'>
      <h2 className='login-title'>Login</h2>
      <form onSubmit={handleSubmit} className='login-form '>



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
      
        <button type="submit" className='login-button '>Login</button>

         <p> Don't have an account?{' '}
          <Link to='/signup' id='links'>
            Sign up
          </Link></p>
      </form>
    </div>
    </div>
  );
};

export default Login;


