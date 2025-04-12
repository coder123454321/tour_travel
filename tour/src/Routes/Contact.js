import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import "./contact.css";

function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <div className="contact-container max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md mt-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              className="input-field"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="input-field"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              className="input-field"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>

      <style jsx>{`
        .contact-container {
          background: linear-gradient(to right, #e0eafc, #cfdef3);
          padding: 40px 20px;
          border-radius: 1rem;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          margin-top: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          text-align: center;
        }

        .contact-heading {
          font-size: 2.5rem;
          font-weight: bold;
          color: #1e3a8a;
          margin-bottom: 30px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .input-field {
          width: 100%;
          padding: 12px;
          margin-top: 8px;
          border-radius: 8px;
          border: 1px solid #ccc;
          box-sizing: border-box;
          font-size: 16px;
          font-family: 'Roboto', sans-serif;
          transition: border-color 0.3s ease;
        }

        .input-field:focus {
          border-color: #1e3a8a;
          outline: none;
        }

        .submit-button {
          width: 100%;
          padding: 12px;
          margin-top: 20px;
          background-color: #1e3a8a;
          color: white;
          font-weight: bold;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .submit-button:hover {
          background-color: #1e2d5c;
        }
      `}</style>
    </>
  );
}

export default About;
