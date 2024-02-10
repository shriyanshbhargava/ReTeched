// src/components/ContactForm.js
import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'YOUR_SERVER_URL' with the actual URL where your Node.js server is running
      const response = await axios.post("YOUR_SERVER_URL/contact", formData);

      if (response.status === 200) {
        console.log("Message sent successfully");
        // Optionally, you can add logic to show a success message or redirect the user.
      }
    } catch (error) {
      console.error("Error sending message:", error);
      // Optionally, you can handle errors and show an error message to the user.
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactForm;
