// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    role: 'Student',
  });

  const { name, email, phoneNumber, password, role } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', formData);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div>
      <div>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <div>
        <input
          type='email'
          name='email'
          value={email}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <div>
        <input
          type='text'
          name='phoneNumber'
          value={phoneNumber}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <div>
        <input
          type='password'
          name='password'
          value={password}
          onChange={(e) => onChange(e)}
          required
        />
      </div>
      <div>
        <select name='role' value={role} onChange={(e) => onChange(e)}>
          <option value='Student'>Student</option>
          <option value='Teacher'>Teacher</option>
          <option value='Institute'>Institute</option>
        </select>
      </div>
      <button type='submit' onClick={(e) => onSubmit(e)}>
        Register
      </button>
    </div>
  );
};

export default Register;
