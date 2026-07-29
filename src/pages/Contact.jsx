const Contact = () => {
  return (
    <div className="container">
      <section className="section" style={{paddingTop:'8rem'}}>
        <div className="text-center mb-8">
          <p className="section-subtitle">GET IN TOUCH</p>
          <h1 className="section-title">Let's Discuss Your NetSuite Project</h1>
          <p>Ready to transform your business with NetSuite and SuiteCommerce? Contact us today for a consultation.</p>
        </div>

        <div className="grid" style={{gridTemplateColumns: '1fr 1fr', gap: '3rem'}}>
          <div>
            <h2 className="section-title">Contact Information</h2>
            <div style={{marginBottom:'2rem'}}>
              <h3>Get in Touch</h3>
              <p style={{marginBottom:'1rem'}}>Email us at info@devscrewinc.com</p>
              <p style={{marginBottom:'1rem'}}>Call us at +1 (555) 123-4567</p>
              <p>Based in [Your Location]</p>
            </div>

            <div>
              <h3>Our Services</h3>
              <ul style={{listStyle:'none', paddingLeft:'0'}}>
                <li style={{marginBottom:'0.5rem'}}>• NetSuite Implementation</li>
                <li style={{marginBottom:'0.5rem'}}>• SuiteCommerce Customization</li>
                <li style={{marginBottom:'0.5rem'}}>• Integration Services</li>
                <li style={{marginBottom:'0.5rem'}}>• Consultation & Strategy</li>
                <li style={{marginBottom:'0.5rem'}}>• Ongoing Support & Maintenance</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="section-title">Send us a Message</h2>
            <form style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
              <input
                type="text"
                placeholder="Your Name"
                style={{padding:'0.75rem',borderRadius:'5px',border:'1px solid #e5e7eb',fontSize:'1rem'}}
              />
              <input
                type="email"
                placeholder="Your Email"
                style={{padding:'0.75rem',borderRadius:'5px',border:'1px solid #e5e7eb',fontSize:'1rem'}}
              />
              <input
                type="text"
                placeholder="Subject"
                style={{padding:'0.75rem',borderRadius:'5px',border:'1px solid #e5e7eb',fontSize:'1rem'}}
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                style={{padding:'0.75rem',borderRadius:'5px',border:'1px solid #e5e7eb',fontSize:'1rem'}}
              ></textarea>
              <button
                type="submit"
                className="btn btn-primary"
                style={{alignSelf:'flex-start',width:'fit-content'}}
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
