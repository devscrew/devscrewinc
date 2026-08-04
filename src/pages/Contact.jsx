import './Contact.scss';

const Contact = () => {
  return (
    <div className="container">
      <section className="section contact-section">
        <div className="text-center mb-8">
          <p className="section-subtitle">GET IN TOUCH</p>
          <h1 className="section-title">Let's Discuss Your NetSuite Project</h1>
          <p className="mb-4">Ready to transform your business with NetSuite and SuiteCommerce? Contact us today for a consultation.</p>
        </div>

        <div className="grid contact-grid">
          <div className="contact-info">
            <div className="contact-card">
              <h2 className="section-title">Contact Information</h2>

              <div className="contact-details mb-6">
                <h3>Get in Touch</h3>
                <div className="contact-item">
                  <p className="contact-label">Email</p>
                  <a href="mailto:info@devscrewinc.com" className="contact-link">info@devscrewinc.com</a>
                </div>
                <div className="contact-item">
                  <p className="contact-label">Phone</p>
                  <a href="tel:+15551234567" className="contact-link">+1 (555) 123-4567</a>
                </div>
                <div className="contact-item">
                  <p className="contact-label">Location</p>
                  <p className="contact-text">Based in [Your Location]</p>
                </div>
              </div>

              <div className="business-hours mb-6">
                <h3>Business Hours</h3>
                <div className="hours-item">
                  <span className="days">Monday - Friday</span>
                  <span className="time">9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="hours-item">
                  <span className="days">Saturday</span>
                  <span className="time">10:00 AM - 2:00 PM EST</span>
                </div>
                <div className="hours-item">
                  <span className="days">Sunday</span>
                  <span className="time">Closed</span>
                </div>
              </div>

              <div className="services-list">
                <h3>Our Services</h3>
                <ul className="services-list-items">
                  <li className="service-item">• NetSuite Implementation</li>
                  <li className="service-item">• SuiteCommerce Customization</li>
                  <li className="service-item">• Integration Services</li>
                  <li className="service-item">• Consultation & Strategy</li>
                  <li className="service-item">• Ongoing Support & Maintenance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <div className="form-card">
              <h2 className="section-title">Send us a Message</h2>

              <p className="form-description mb-4">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>

              <form className="contact-form-elements">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select id="service" className="form-input">
                    <option value="">Select a service</option>
                    <option value="implementation">NetSuite Implementation</option>
                    <option value="suitecommerce">SuiteCommerce Customization</option>
                    <option value="integration">Integration Services</option>
                    <option value="consultation">Consultation & Strategy</option>
                    <option value="support">Support & Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Briefly describe your project"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    placeholder="Tell us about your project requirements..."
                    rows="5"
                    className="form-textarea"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
