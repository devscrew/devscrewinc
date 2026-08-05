import { Link } from 'react-router-dom';
import './NetSuite.scss';

const NetSuite = () => {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero-section hero-section--netsuite">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="section-title">NetSuite ERP Solutions</h1>
            <p className="hero-description mb-4">DevsCrew Inc. delivers comprehensive NetSuite ERP implementation and customization services tailored to your business needs.</p>
            <div className="cta-button">
              <Link to="/contact" className="btn btn-primary">Schedule a Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-section">
        <div className="container">
          <div className="text-center mb-8">
            <p className="section-subtitle">OUR NETSUITE SOLUTIONS</p>
            <h2 className="section-title">Comprehensive NetSuite Services</h2>
            <p>From implementation to ongoing support, we provide end-to-end NetSuite solutions that drive business growth.</p>
          </div>

          <div className="grid services-grid">
            <div className="service-card">
              <h3 className="service-title">ERP Implementation</h3>
              <p className="service-description">End-to-end implementation of NetSuite ERP solutions tailored to your business needs, ensuring seamless integration with existing systems.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">System Configuration</h3>
              <p className="service-description">Custom configuration of NetSuite ERP to match your specific business processes and requirements for optimal efficiency.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Data Migration</h3>
              <p className="service-description">Seamless data migration from legacy systems to NetSuite with full data integrity and minimal business disruption.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Integration Services</h3>
              <p className="service-description">Connect NetSuite with third-party applications and systems to create a unified digital ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section features-section">
        <div className="container">
          <div className="text-center mb-8">
            <p className="section-subtitle">WHY CHOOSE US</p>
            <h2 className="section-title">Why DevsCrew Inc.?</h2>
            <p>Our team of certified NetSuite professionals brings years of experience across various industries.</p>
          </div>

          <div className="grid features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/img/animated-certified.svg" alt="Certified Experts" />
              </div>
              <h3>NetSuite Certified Experts</h3>
              <p>Our team holds multiple NetSuite certifications including Implementation Specialist, Systems Administrator, and Developer credentials.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/img/animated-implementation.svg" alt="Implementation Services" />
              </div>
              <h3>Implementation Services</h3>
              <p>Comprehensive implementation services ensuring smooth transition with minimal disruption to your business operations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/img/animated-support.svg" alt="Support & Maintenance" />
              </div>
              <h3>Ongoing Support & Maintenance</h3>
              <p>Comprehensive support and maintenance services to ensure long-term success of your NetSuite platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="section-title">Ready to Transform Your Business?</h2>
            <p className="mb-4">Let us help you maximize the value of your NetSuite investment.</p>
            <div className="cta-button">
              <Link to="/contact" className="btn btn-secondary">Schedule a Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetSuite;