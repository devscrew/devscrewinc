import { Link } from 'react-router-dom';
import './SuiteCommerce.scss';

const SuiteCommerceCustomization = () => {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero-section hero-section--suitecommerce">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="section-title">SuiteCommerce Customization</h1>
            <p className="hero-description mb-4">Customize and enhance SuiteCommerce storefronts to create unique shopping experiences that drive conversions and customer engagement.</p>
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
            <p className="section-subtitle">SUITECOMMERCE CUSTOMIZATION</p>
            <h2 className="section-title">Tailored Shopping Experiences</h2>
            <p>Our customization services create distinctive shopping experiences that reflect your brand identity and drive conversions.</p>
          </div>

          <div className="grid services-grid">
            <div className="service-card">
              <h3 className="service-title">Storefront Design</h3>
              <p className="service-description">Custom design and layout of SuiteCommerce storefronts to match your brand identity and user experience requirements.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Product Display Optimization</h3>
              <p className="service-description">Enhance product presentation with custom PDP templates, dynamic merchandising rules, and inventory-driven content personalization.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Search & Discovery</h3>
              <p className="service-description">Upgrade search performance with ElasticSearch integration, custom synonym management, and faceted navigation optimization.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Checkout Customization</h3>
              <p className="service-description">Streamline checkout workflows with one-page checkout configurations, guest checkout optimization, and custom payment gateway implementations.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Mobile Optimization</h3>
              <p className="service-description">Ensure responsive design and optimal performance across all devices with mobile-first approaches and touch-optimized navigation.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Advanced Features</h3>
              <p className="service-description">Implement advanced features like customer segmentation, personalized recommendations, and real-time inventory updates.</p>
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
            <p>Our dedicated SuiteCommerce practice provides deep expertise in creating differentiated shopping experiences.</p>
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
            <h2 className="section-title">Ready to Customize Your SuiteCommerce?</h2>
            <p className="mb-4">Partner with true SuiteCommerce specialists who understand the full spectrum of customization and optimization.</p>
            <div className="cta-button">
              <Link to="/contact" className="btn btn-secondary">Schedule a Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuiteCommerceCustomization;