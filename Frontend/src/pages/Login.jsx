import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/stylesheets/login.css';
import { useAppContext } from '../app';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Login() {
  const { setUser } = useAppContext();
  let navigate = useNavigate();
  
  const [type, setType] = useState('login');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      let url = 'http://localhost:3000/users';
      if (type === 'login') url += '/login';
      else if (type === 'signup') url += '/signup';

      const response = await axios.post(url, formData);
      let msg = "Something is wrong!";
      if (type === 'login') {
        console.log('User:', response.data.user); // Handle response from server
        console.log('Token:', response.data.token); // Handle token from server
        msg = 'Login successful!';
      } else {
        console.log('User created:', response.data.user); // Handle response from server
        msg = 'Signup successful!';
      }

      toast.success(msg)
      setUser(response.data.user);
      setMessage(msg);
      (response.data.user && response.data.user.isAdmin) ? navigate('/dashboard') : navigate('/');
    } catch (error) {
      console.error('Error:', error.response?.data?.message || error.message); // Handle error
      setError(error.response?.data?.message || 'An error occurred');
    }
  };

  useEffect(() => {
    const signupButton = document.getElementById('signup-button');
    const loginButton = document.getElementById('login-button');
    const userForms = document.getElementById('user_options-forms');

    signupButton.addEventListener('click', () => {
      userForms.classList.remove('bounceRight');
      userForms.classList.add('bounceLeft');
      setType('signup');
      setFormData({
        username: '',
        email: '',
        password: ''
      });
    });

    loginButton.addEventListener('click', () => {
      userForms.classList.remove('bounceLeft');
      userForms.classList.add('bounceRight');
      setType('login');
      setFormData({
        username: '',
        email: '',
        password: ''
      });
    });
  }, []);

  return (
    <section className="user">
      <div className="user_options-container">
        <div className="user_options-text">
          <div className="user_options-unregistered">
            <h2 className="user_unregistered-title">Don't have an account?</h2>
            <p className="user_unregistered-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore impedit, mollitia amet earum nisi nihil.</p>
            <button className="user_unregistered-signup" id="signup-button">Sign Up</button>
          </div>

          <div className="user_options-registered">
            <h2 className="user_registered-title">Have an account?</h2>
            <p className="user_registered-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore impedit, mollitia amet earum nisi nihil.</p>
            <button className="user_registered-login" id="login-button">Login</button>
          </div>
        </div>

        <div className="user_options-forms" id="user_options-forms">
          {type === 'login' ? (
            <div className="user_forms-login">
              <h2 className="forms_title">Login</h2>
              <form className="forms_form" onSubmit={handleSubmit}>
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input type="email" placeholder="Email" className="forms_field-input" name="email" value={formData.email} onChange={handleChange} required autoFocus />
                  </div>
                  <div className="forms_field">
                    <input type="password" placeholder="Password" className="forms_field-input" name="password" value={formData.password} onChange={handleChange} required />
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <button type="button" className="forms_buttons-forgot">Forgot password?</button>
                  <input type="submit" value="Log In" className="forms_buttons-action" />
                </div>
                {error && <p className="error_message">{error}</p>}
                {message && <p className="success_message">{message}</p>}
              </form>
            </div>
          ) : (
            <div className="user_forms-signup">
              <h2 className="forms_title">Sign Up</h2>
              <form className="forms_form" onSubmit={handleSubmit}>
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input type="text" placeholder="Username" className="forms_field-input" name="username" value={formData.username} onChange={handleChange} required />
                  </div>
                  <div className="forms_field">
                    <input type="email" placeholder="Email" className="forms_field-input" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="forms_field">
                    <input type="password" placeholder="Password" className="forms_field-input" name="password" value={formData.password} onChange={handleChange} required />
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <input type="submit" value="Sign Up" className="forms_buttons-action" />
                </div>
                {error && <p className="error_message">{error}</p>}
                {message && <p className="success_message">{message}</p>}
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
