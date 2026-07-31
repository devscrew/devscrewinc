import './Services.scss';

const Services = () => {
  return (
    <div className="container">
      <section className="section services-section">
        <div className="text-center mb-8">
          <p className="section-subtitle">OUR SERVICES</p>
          <h1 className="section-title">NetSuite & SuiteCommerce Solutions</h1>
          <p>We provide comprehensive services to help you maximize the value of your NetSuite and SuiteCommerce investments.</p>
        </div>

        <div className="grid services-grid">
          <div className="service-card">
            <h3>NetSuite Implementation</h3>
            <p>Complete end-to-end implementation of NetSuite ERP solutions tailored to your business needs. We ensure seamless integration with existing systems and provide comprehensive training for your team.</p>
          </div>

          <div className="service-card">
            <h3>SuiteCommerce Customization</h3>
            <p>Customize and enhance SuiteCommerce storefronts to create unique shopping experiences that drive conversions and customer engagement. We build responsive, user-friendly interfaces that align with your brand identity.</p>
          </div>

          <div className="service-card">
            <h3>Consultation & Strategy</h3>
            <p>Strategic consulting services to help you maximize the value of your NetSuite investment and align technology with business goals. We assess your current systems and recommend optimization strategies.</p>
          </div>

          <div className="service-card">
            <h3>Integration Services</h3>
            <p>Seamless integration between NetSuite, SuiteCommerce, and third-party applications to create a unified digital ecosystem. We ensure data flows smoothly across all platforms.</p>
          </div>

          <div className="service-card">
            <h3>Ongoing Support & Maintenance</h3>
            <p>Comprehensive support and maintenance services to ensure long-term success of your NetSuite and SuiteCommerce platforms. We provide regular updates, performance monitoring, and technical assistance.</p>
          </div>

          <div className="service-card">
            <h3>Training & Knowledge Transfer</h3>
            <p>Comprehensive training programs for your team to ensure they can effectively utilize NetSuite and SuiteCommerce platforms. We provide both technical and business training sessions.</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="section-title">Why Choose Our Services?</h2>
          <div className="grid reasons-grid">
            <div className="reason-card">
              <p className="reason-icon">⏱️</p>
              <h3>Timely Delivery</h3>
              <p>We deliver projects on schedule without compromising quality.</p>
            </div>

            <div className="reason-card">
              <p className="reason-icon">🎯</p>
              <h3>Custom Solutions</h3>
              <p>Every project is tailored to your specific business requirements.</p>
            </div>

            <div className="reason-card">
              <p className="reason-icon">💡</p>
              <h3>Expert Team</h3>
              <p>Our certified NetSuite and SuiteCommerce experts bring industry experience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
