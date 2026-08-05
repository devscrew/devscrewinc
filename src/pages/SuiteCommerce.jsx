import { Link } from 'react-router-dom';
import './SuiteCommerce.scss';

const SuiteCommerce = () => {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero-section hero-section--suitecommerce">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="section-title">SuiteCommerce Solutions</h1>
            <p className="hero-description mb-4">DevsCrew Inc. specializes in customizing and enhancing SuiteCommerce storefronts to create unique shopping experiences.</p>
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
            <p className="section-subtitle">OUR SUITECOMMERCE SOLUTIONS</p>
            <h2 className="section-title">Custom SuiteCommerce Services</h2>
            <p>From customization to optimization, we create engaging shopping experiences that drive conversions and customer loyalty.</p>
          </div>

          <div className="grid services-grid">
            <div className="service-card">
              <h3 className="service-title">Storefront Customization</h3>
              <p className="service-description">Customize SuiteCommerce storefronts to create unique shopping experiences that match your brand identity.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Product Display Optimization</h3>
              <p className="service-description">Enhance product presentation with custom displays, advanced search functionality, and personalized recommendations.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Checkout Process Enhancement</h3>
              <p className="service-description">Streamline the checkout process with customizable workflows that reduce cart abandonment and increase conversions.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Responsive Design</h3>
              <p className="service-description">Ensure your SuiteCommerce platform performs flawlessly across all devices and browsers with responsive design.</p>
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
            <p>Our expertise in SuiteCommerce ensures your online store delivers exceptional customer experiences.</p>
          </div>

          <div className="grid features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/img/animated-suitecommerce.svg" alt="Customization Expertise" />
              </div>
              <h3>Customization Expertise</h3>
              <p>We specialize in tailoring SuiteCommerce storefronts to match your brand identity while ensuring seamless integration with NetSuite ERP.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/img/animated-implementation.svg" alt="Implementation Services" />
              </div>
              <h3>Implementation Services</h3>
              <p>Comprehensive implementation services ensuring your SuiteCommerce platform is set up for success from day one.</p>
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
            <h2 className="section-title">Ready to Transform Your Online Store?</h2>
            <p className="mb-4">Let us help you maximize the value of your SuiteCommerce investment.</p>
            <div className="cta-button">
              <Link to="/contact" className="btn btn-secondary">Schedule a Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuiteCommerce;