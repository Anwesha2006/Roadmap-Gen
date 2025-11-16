    import React, { useState } from 'react';
    import './End.css'
    function InputWrapper() {
      const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    stream: "",
    center: "",
    selectClass: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <div className="callback-container">
      
      <form className="callback-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <input
            type="text"
            name="mobile"
            placeholder="Mobile No."
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <button type="button" className="otp-btn">
            Send OTP
          </button>
        </div>

        <div className="form-row">
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
          />
          <select name="selectClass" value={formData.selectClass} onChange={handleChange}>
            <option value="">Select Year</option>
            <option value="11">1st year</option>
            <option value="12">2nd year</option>
            <option value="12-pass">3rd year</option>
            <option value="4-th">4th year</option>
          </select>
        </div>

        <div className="form-row">
          <select name="stream" value={formData.stream} onChange={handleChange}>
            <option value="">Stream</option>
            <option value="engineering">Engineering</option>
            <option value="medical">Medical</option>
             <option value="foundation">Foundation</option>
            
          </select>

          <select name="center" value={formData.center} onChange={handleChange}>
            <option value="">City</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="checkbox-row">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          <label>
            By submitting this form, I agree to receive all the WhatsApp communication on my
            registered number and agree to the{" "}
            <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
          </label>
        </div>

        <button type="submit" className="submit-btn">
          Submit Now
        </button>
      </form>
    </div>
  );
};

export default InputWrapper;