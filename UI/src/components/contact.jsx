import React, { useState } from "react";
import "./Component.css"; // Link to your CSS file

const ContactWithLocation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    subscribe: false,
  });

  const [loading, setLoading] = useState(false); // New state for loading
  const [error, setError] = useState(""); // State to hold error message for validation

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Word count validation for the message field
    const wordCount = formData.message.trim().split(/\s+/).length;
  
    if (wordCount < 15) {
      setError("Please enter at least 15 words in the message.");
      return; // Prevent form submission if validation fails
    }
  
    // Clear the error if the validation passes
    setError("");
  
    console.log(formData); // Log form data to ensure it's correct
  
    // Set loading to true when the form is being submitted
    setLoading(true);
  
    // Prepare the data to send to the backend
    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      subscribe: formData.subscribe,
    };
  
    try {
      // Send the form data to the backend
      const response = await fetch("http://localhost:5000/message/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(data), // Convert the data to JSON
      });
  
      const result = await response.json(); // Parse the JSON response from the server
  
      if (response.ok) {
        // Success logic
        setLoading(false);
        alert("Your message has been sent successfully!");
  
        // Clear form data after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          subscribe: false,
        });
      } else {
        setLoading(false);
        // Failure logic
        alert("Failed to send the message, please try again.");
      }
    } catch (error) {
      console.log("Error while sending message:", error);
      setLoading(false);
      alert("Error occurred while sending message.");
    }
  };
  

  const apiKey = "AIzaSyAEeHYNj_l5RYUDnqC3uzz6MtGlFKY_t0k";
  const address = "30.252345,71.485896";
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${address}`;

  return (
    <div className="contact-page fade-in">
      <div className="contact-container">
        {/* Contact Us Form Section */}
        <div className="contact-form">
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

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="0314-6572538"
            />

            <label htmlFor="subject">Subject:</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Select Subject</option>
              <option value="inquiry">General Inquiry</option>
              <option value="support">Support Request</option>
              <option value="feedback">Feedback</option>
            </select>

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            {/* Error message for message length validation */}
            {error && <p className="error-message">{error}</p>}

            {/* Show loading spinner when submitting */}
            <button type="submit" disabled={loading} style={{ display: "flex", justifyContent: "center" }}>
              {loading ? (
                <div className="loader"></div> // Loading spinner
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Location Section */}
      <div className="location">
        <div className="location__container">
          <h2 className="location__title">Our Location</h2>

          {/* Map Section */}
          <div className="location__map">
            <iframe
              src={mapUrl}
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              title="Our Location"
            ></iframe>
          </div>

          {/* Address Section */}
          <div className="location__details">
            <h3>Visit Us</h3>
            <p className="location__address">
              BulkBytes, <br />
              House # 9-B IQ Villas, Northern Bypass <br />
              Bosan Road, Multan
            </p>

            <div className="location__contact">
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:+923146572538">+92314-6572538</a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@bulkbytes.org">info@bulkbytes.org</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactWithLocation;
