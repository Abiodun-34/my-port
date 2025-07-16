import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { EarthCanvas } from "./EarthCanvas";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_xkfm8xh', 'template_4jp4w7b', form.current, 'j15GxxiZD4dc7sQkK')
      .then((result) => {
        console.log('Email sent:', result.text);
        // IMPORTANT: Replace alert() with a custom modal or message box for better UX in a React app.
        alert("Message sent successfully!");
        e.target.reset();
      }, (error) => {
        console.error('Email error:', error.text);
        // IMPORTANT: Replace alert() with a custom modal or message box.
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    // Added pb-16 to create space below the contact section.
    // Removed mb-0 to allow for default margins or further spacing if needed.
    <section className="bg-gray-800 pb-16 min-h-[calc(100vh-80px)]">
      {/* Main container with equal columns */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 w-full max-w-7xl mx-auto pt-8">
        
        {/* Contact Form - Left Column (50% width) */}
        <div className="w-full lg:w-[48%] lg:mr-auto bg-black rounded-lg shadow-md p-6">
          <div className="mb-8">
            <h2 className="text-amber-300 text-5xl font-bold mb-4">Contact Me</h2>
            <p className="text-gray-300 text-lg">Fill out the form to get in touch</p>
          </div>
          
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label className="block text-xl text-gray-100 font-bold mb-2">Name</label>
              <input 
                type="text" 
                name="user_name" 
                className="w-full p-3 bg-gray-900 text-gray-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-xl text-gray-100 font-bold mb-2">Email</label>
              <input 
                type="email" 
                name="user_email" 
                className="w-full p-3 bg-gray-900 text-gray-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-xl text-gray-100 font-bold mb-2">Phone Number</label>
              <input 
                type="Phone Number" 
                name="user_phone number" 
                className="w-full p-3 bg-gray-900 text-gray-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-xl text-gray-100 font-bold mb-2">Message</label>
              <textarea 
                name="message" 
                rows="4"
                className="w-full p-3 bg-gray-900 text-gray-100 border border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-1/3 py-3 px-4 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* EarthCanvas - Right Column (50% width) */}
        <div className="w-full lg:w-[48%] lg:ml-auto h-[500px] lg:h-auto rounded-lg overflow-hidden">
          <EarthCanvas />
        </div>
      </div>
    </section>
  );
};

export default Contact;
