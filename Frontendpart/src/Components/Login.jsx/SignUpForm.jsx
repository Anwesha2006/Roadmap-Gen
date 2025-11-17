import React, { useState } from "react";
import "./SignUpForm.css";
export default function SignupForm(){
  const [form, setForm] = useState({
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        <h2 className="signin-title">Hey Welcome!</h2>
        <p className="signin-subtitle">Sign in to continue your journey</p>

        <form onSubmit={handleSubmit} className="signin-form">

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit" className="signin-btn">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}