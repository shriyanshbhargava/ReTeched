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
      <div class="bg-gray-900 h-screen flex flex-col items-center justify-center text-center">
        <div class="text-white">
          <h1 class="text-4xl font-bold">Domain For Sale Template</h1>
          <p class="mt-4 text-lg">
            Interested in purchasing mydomain.com ? Contact us!
          </p>
        </div>
        <div class="mt-8">
          <form
            action="https://fabform.io/f/xxxxx"
            method="post"
            class="flex flex-col items-center"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              class="py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              class="py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              class="py-2 px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4 resize-none w-full"
              required
            ></textarea>
            <button
              type="submit"
              class="bg-blue-500 py-2 px-4 text-white rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Send
            </button>
          </form>
          <p class="mt-2 text-gray-400 text-sm">
            We'll get back to you as soon as possible!
          </p>
          <div class="mt-4 text-gray-500 text-sm">
            Powered by{" "}
            <a
              href="https://fabform.io"
              class="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              FabForm.io
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
