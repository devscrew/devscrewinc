import './Contact.scss';

const Contact = () => {
  return (
    <div className="container">
      <section className="section contact-section">
        <div className="text-center mb-8">
          <p className="section-subtitle">GET IN TOUCH</p>
          <h1 className="section-title">Let's Discuss Your NetSuite Project</h1>
          <p>Ready to transform your business with NetSuite and SuiteCommerce? Contact us today for a consultation.</p>
        </div>

        <div className="grid contact-grid">
          <div className="contact-info">
            <h2 className="section-title">Contact Information</h2>
            <div className="contact-details mb-6">
              <h3>Get in Touch</h3>
              <p className="contact-item">Email us at info@devscrewinc.com</p>
              <p className="contact-item">Call us at +1 (555) 123-4567</p>
              <p className="contact-item">Based in [Your Location]</p>
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

          <div className="contact-form">
            <h2 className="section-title">Send us a Message</h2>
            <form className="contact-form-elements">
              <input
                type="text"
                placeholder="Your Name"
                className="form-input"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="form-input"
              />
              <input
                type="text"
                placeholder="Subject"
                className="form-input"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="form-textarea"
              ></textarea>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
