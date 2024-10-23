// src/components/Register.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Register from './Register';

const Login = () => {
  const [formData, setFormData] = useState({
    // name: '',
    email: '',
    // phoneNumber: '',
    password: '',
    // role: 'Student',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', formData);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  const handleClick = () => {
    <Register />;
  };

  return (
    <div>
      {/* <div>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => onChange(e)}
          required
        />
      </div> */}
      <div>
        <input
          type='email'
          name='email'
          value={email}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      {/* <div>
        <input
          type='text'
          name='phoneNumber'
          value={phoneNumber}
          onChange={(e) => onChange(e)}
          required
        />
      </div> */}
      <div>
        <input
          type='password'
          name='password'
          value={password}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      {/* <div>
        <select name='role' value={role} onChange={(e) => onChange(e)}>
          <option value='Student'>Student</option>
          <option value='Teacher'>Teacher</option>
          <option value='Institute'>Institute</option>
        </select>
      </div> */}
      <button type='submit' onClick={(e) => onSubmit(e)}>
        Login
      </button>
      <button onClick={handleClick}>or Create an account</button>
    </div>
  );
};

export default Login;
