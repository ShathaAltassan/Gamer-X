// Contact.jsx

import React, { useState } from 'react';
import MainLayout from '../Layout/MainLayout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
   
    console.log('Form submitted:', formData);

    
    setFormData({ name: '', email: '', message: '' });
    setFormSubmitted(true);
  };

  return (
    <div className="bill-back">

    <MainLayout>
    <div className="contact-page">
      <h1 className="contact-title">تواصل معنا </h1>
      {formSubmitted && <p className="contact-success">تم الارسال بنجاح!</p>}
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="contact-form-group">
          <label htmlFor="name" className="contact-label">الاسم:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="contact-input"
          />
        </div>
        
        <div className="contact-form-group">
          <label htmlFor="email" className="contact-label">الايميل:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="contact-input"
          />
        </div>
        
        <div className="contact-form-group">
          <label htmlFor="message" className="contact-label">رسالتك:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="contact-textarea"
          />
        </div>

        <button type="submit" className="contact-submit-btn">ارسال</button>
      </form>
    </div>
    </MainLayout>
    </div>

  );
};

export default Contact;
