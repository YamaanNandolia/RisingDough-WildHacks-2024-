"use client";

import { useState } from "react";
import { inter } from '@/app/ui/fonts/fonts';

export default function Multiple() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
  };

  return (
    <form onSubmit={handleSubmit} style={{ fontFamily: 'inter' }}>
      <div className="form-group" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px', marginTop: '20px'}}>
        <label htmlFor="Food" style={{ marginRight: '10px' }}>Food:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={{ width: '150px', borderRadius: '5px' }} />
      </div>

      <div className="form-group" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <label htmlFor="Utilities" style={{ marginRight: '10px' }}>Utilities:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '150px', borderRadius: '5px' }} />
      </div>

      <div className="form-group" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <label htmlFor="Food" style={{ marginRight: '10px' }}>Rent:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={{ width: '150px', borderRadius: '5px' }} />
      </div>

      <div className="form-group" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <label htmlFor="Utilities" style={{ marginRight: '10px' }}>Car Expenses:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '150px', borderRadius: '5px' }} />
      </div>

      <div className="form-group" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <label htmlFor="Food" style={{ marginRight: '10px' }}>Savings:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={{ width: '150px', borderRadius: '5px' }} />
      </div>

      <div className="form-group" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <label htmlFor="Utilities" style={{ marginRight: '10px' }}>Fun:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '150px', borderRadius: '5px' }} />
      </div>

      <button className="mt-4 w-full bg-orange">
            Submit
      </button>
    </form>
  );
}
