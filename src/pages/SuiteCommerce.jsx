import { Link } from 'react-router-dom';
import './SuiteCommerce.scss';

const SuiteCommerce = () => {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero-section hero-section--suitecommerce">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="section-title">SuiteCommerce Expertise</h1>
            <p className="hero-description mb-4">DevsCrew Inc. operates a dedicated SuiteCommerce practice focused on advanced customization, performance optimization, and building differentiated shopping experiences that drive conversions.</p>
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
            <h2 className="section-title">Specialized SuiteCommerce Services</h2>
            <p>We deliver deep customization and optimization for SuiteCommerce platforms—transforming standard storefronts into high-performing, brand-differentiated commerce experiences.</p>
          </div>

          <div className="grid services-grid">
            <div className="service-card">
              <h3 className="service-title">Storefront Customization</h3>
              <p className="service-description">We architect and deploy custom SuiteCommerce storefronts that reflect your brand identity at every touchpoint. Our approach leverages Isotope framework expertise, YQL queries, and CSS/SCSS modifications to create distinctive customer journeys—from homepage layouts to category navigation structures.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Product Display Optimization</h3>
              <p className="service-description">Transform product presentation with custom PDP templates, dynamic merchandising rules based on customer segmentation, enhanced image galleries with zoom and 360° views, related products algorithms, and inventory-driven content personalization that increases engagement and conversion rates.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Search & Discovery Enhancement</h3>
              <p className="service-description">Upgrade search performance with ElasticSearch integration, custom synonym management, faceted navigation optimization, predictive autocomplete features, and visual merchandising controls that surface high-margin products strategically throughout the shopping experience.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Checkout Customization</h3>
              <p className="service-description">Reduce cart abandonment with streamlined checkout workflows: one-page checkout configurations, guest checkout optimization, address autocomplete integration (Google Maps API), custom payment gateway implementations, and progressive disclosure techniques that minimize friction points.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Mobile-First Responsive Design</h3>
              <p className="service-description">Build mobile-first experiences from the ground up with touch-optimized navigation, accelerated mobile pages (AMP) considerations, lazy-loading imagery strategies, and performance tuning specifically for mobile network conditions—ensuring consistent experience across all devices.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">SuiteCommerce Editions Support</h3>
              <p className="service-description">Deep expertise across SuiteCommerce editions: SuiteCommerce Classic (SCC) for established platforms requiring strategic customization, and SuiteCommerce Platform Edge™ with real-time architecture—helping you migrate or optimize based on your business requirements and technical roadmap.</p>
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
            <p>Unlike generalist consulting firms, we maintain a dedicated SuiteCommerce practice—providing depth of expertise that competitors simply cannot match.</p>
          </div>

          <div className="grid features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/img/animated-suitecommerce.svg" alt="Dedicated SuiteCommerce Practice" />
              </div>
              <h3>Dedicated SuiteCommerce Practice</h3>
              <p>We focus exclusively on advanced NetSuite commerce solutions—deep expertise in Isotope framework, Platform Edge™ architecture, and SuiteScript integration that separates us from generalist competitors who treat SuiteCommerce as an afterthought.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/img/animated-implementation.svg" alt="Specialized Expertise" />
              </div>
              <h3>Deep Customization Mastery</h3>
              <p>Beyond templated solutions, we architect bespoke storefront experiences—from custom accelerators to complex B2B buying workflows—leveraging proven patterns and frameworks specific to SuiteCommerce customization challenges.</p>
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
            <h2 className="section-title">Ready to Build a Differentiated Commerce Experience?</h2>
            <p className="mb-4">Partner with true SuiteCommerce specialists who understand the full spectrum—from deep customization to performance optimization.</p>
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