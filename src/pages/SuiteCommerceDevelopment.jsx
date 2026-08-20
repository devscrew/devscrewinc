import { Link } from 'react-router-dom';
import './SuiteCommerce.scss';

const SuiteCommerceDevelopment = () => {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero-section hero-section--suitecommerce">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="section-title">SuiteCommerce Development Services</h1>
            <p className="hero-description mb-4">Build robust, scalable e-commerce solutions with our specialized SuiteCommerce development services tailored to your business needs.</p>
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
            <p className="section-subtitle">SUITECOMMERCE DEVELOPMENT</p>
            <h2 className="section-title">Custom Development Solutions</h2>
            <p>Our development services create powerful, scalable e-commerce solutions that integrate seamlessly with your existing NetSuite ERP system.</p>
          </div>

          <div className="grid services-grid">
            <div className="service-card">
              <h3 className="service-title">Frontend Development</h3>
              <p className="service-description">Custom frontend development using modern web technologies, responsive design principles, and the Isotope framework.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Backend Integration</h3>
              <p className="service-description">Seamless integration with NetSuite ERP backend systems through SuiteTalk APIs, SuiteScripts, and custom data flows.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Performance Optimization</h3>
              <p className="service-description">Optimize loading times, improve user experience, and ensure high performance across all devices and network conditions.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Security Implementation</h3>
              <p className="service-description">Implement robust security measures including SSL/TLS encryption, secure payment processing, and data protection protocols.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Feature Development</h3>
              <p className="service-description">Custom development of advanced features like personalized recommendations, dynamic pricing, and real-time inventory updates.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Testing & Quality Assurance</h3>
              <p className="service-description">Comprehensive testing including unit tests, integration tests, and user acceptance testing to ensure quality and reliability.</p>
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
            <p>Our specialized SuiteCommerce development services ensure your platform is built to the highest standards.</p>
          </div>

          <div className="grid features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/img/animated-suitecommerce.svg" alt="Dedicated SuiteCommerce Practice" />
              </div>
              <h3>Dedicated SuiteCommerce Practice</h3>
              <p>We focus exclusively on advanced NetSuite commerce solutions—deep expertise in Isotope framework, Platform Edge™ architecture, and SuiteScript integration.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/img/animated-implementation.svg" alt="Specialized Expertise" />
              </div>
              <h3>Deep Customization Mastery</h3>
              <p>Beyond templated solutions, we architect bespoke storefront experiences—from custom accelerators to complex B2B buying workflows.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/img/animated-support.svg" alt="Support & Maintenance" />
              </div>
              <h3>Ongoing Support & Maintenance</h3>
              <p>Continuous support and maintenance to keep your SuiteCommerce platform performing at its best.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="section-title">Ready to Develop Your SuiteCommerce?</h2>
            <p className="mb-4">Partner with true SuiteCommerce specialists who understand the full spectrum of development and optimization.</p>
            <div className="cta-button">
              <Link to="/contact" className="btn btn-secondary">Schedule a Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuiteCommerceDevelopment;