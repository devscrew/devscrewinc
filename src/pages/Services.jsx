import { Link } from 'react-router-dom';
import './Services.scss';

const Services = () => {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="section-title">Our Services</h1>
            <p className="hero-description mb-4">Comprehensive NetSuite and SuiteCommerce solutions tailored to your business needs.</p>
            <div className="cta-button">
              <Link to="/contact" className="btn btn-primary">Schedule a Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Menu */}
      <section className="section services-menu-section">
        <div className="container">
          <div className="services-menu">
            <h2 className="section-title text-center mb-6">Our Service Areas</h2>
            <div className="grid services-grid">
              <Link to="/netsuite" className="service-card service-card--netsuite">
                <h3>NetSuite ERP Solutions</h3>
                <p>Comprehensive implementation, customization, and support for NetSuite ERP systems.</p>
              </Link>
              <Link to="/suitecommerce" className="service-card service-card--suitecommerce">
                <h3>SuiteCommerce Solutions</h3>
                <p>Custom storefronts, enhancements, and optimization for SuiteCommerce platforms.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section services-section">
        <div className="container">
          <div className="text-center mb-8">
            <p className="section-subtitle">OUR SERVICES</p>
            <h2 className="section-title">NetSuite & SuiteCommerce Solutions</h2>
            <p>We provide comprehensive services to help you maximize the value of your NetSuite and SuiteCommerce investments.</p>
          </div>

          <div className="grid services-grid">
            <div className="service-card">
              <h3 className="service-title">NetSuite Implementation</h3>
              <p className="service-description">End-to-end implementation of NetSuite ERP solutions tailored to your business needs, ensuring seamless integration with existing systems.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">SuiteCommerce Customization</h3>
              <p className="service-description">Customize and enhance SuiteCommerce storefronts to create unique shopping experiences that drive conversions and customer engagement.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Consultation & Strategy</h3>
              <p className="service-description">Strategic consulting services to help you maximize the value of your NetSuite investment and align technology with business goals.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Integration Services</h3>
              <p className="service-description">Seamless integration between NetSuite, SuiteCommerce, and third-party applications to create a unified digital ecosystem.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Ongoing Support & Maintenance</h3>
              <p className="service-description">Comprehensive support and maintenance services to ensure long-term success of your NetSuite and SuiteCommerce platforms.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Training & Knowledge Transfer</h3>
              <p className="service-description">Comprehensive training programs for your team to ensure they can effectively utilize NetSuite and SuiteCommerce platforms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content text-center">
            <h2 className="section-title">Ready to Transform Your Business?</h2>
            <p className="mb-4">Let us help you maximize the value of your NetSuite and SuiteCommerce investments.</p>
            <div className="cta-button">
              <Link to="/contact" className="btn btn-secondary">Schedule a Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;