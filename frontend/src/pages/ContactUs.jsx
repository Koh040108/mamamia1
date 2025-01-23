import React, { useState } from "react";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for contacting us!");
        // Here you can handle form submission like sending the form data to an API
    };

    return (
        <div className="contact-us-container">
            {/* Header Section */}
            <header
                className="text-center py-5 text-white"
                style={{
                    backgroundColor: "#C586A5",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                }}
            >
                <h1 className="fw-bold">Contact Us</h1>
                <p className="mt-2" style={{color: "white"}}>
                    We would love to hear from you! Please reach out to us with any
                    inquiries.
                </p>
            </header>

            {/* Main Content Section */}
            <section className="container my-5">
                <div className="row">
                    {/* Contact Form */}
                    <div className="col-lg-6">
                        <div className="p-4 rounded shadow bg-light">
                            <h2 className="text-primary mb-4">Get in Touch</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                <div className="mb-3 row align-items-center">
                                    <label htmlFor="message" className="col-form-label col-sm-3">
                                        Your Message
                                    </label>
                                    <div className="col-sm-9">
                                     <textarea
                                      className="form-control"
                                      id="message"
                                      name="message"
                                      value={formData.message}
                                      onChange={handleInputChange}
                                      rows="5"
                                      placeholder="Write your message here"
                                      required
                                      />
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary w-100">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Location Section */}
                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <div className="p-4 rounded shadow bg-light">
                            <h2 className="text-primary mb-4">Our Location</h2>
                            <p>Visit us at the following address:</p>
                            <p>
                                <strong>Address:</strong> University Sains Malaysia
                            </p>
                            <p>
                                <strong>Phone:</strong> 04-456 9834
                            </p>
                            <p>
                                <strong>Email:</strong> support@mamamia.com
                            </p>

                            {/* Embedded Google Map */}
                            <div
                                id="map"
                                style={{
                                    width: "100%",
                                    height: "300px",
                                    overflow: "hidden",
                                    borderRadius: "8px",
                                }}
                            >
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.4011752477013!2d100.3025455!3d5.3555943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac1a836ae7e53%3A0x835ac54fe8f4d95a!2sUniversiti%20Sains%20Malaysia!5e0!3m2!1sen!2smy!4v1735911179905!5m2!1sen!2smy"
                                    width="100%"
                                    height="100%"
                                    style={{ border: "0" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
