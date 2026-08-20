import { Link } from 'react-router-dom';
import './NetSuiteIntegration.scss';

const NetSuiteIntegration = () => {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero-section hero-section--netsuite-integration">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="section-title">NetSuite Integration Services</h1>
            <p className="hero-description mb-4">Seamlessly connect NetSuite with third-party applications to create a unified digital ecosystem.</p>
            <div className="cta-button">
              <Link to="/contact" className="btn btn-primary">Get Started Today</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="section integration-section">
        <div className="container">
          <div className="text-center mb-8">
            <p className="section-subtitle">OUR INTEGRATION APPROACH</p>
            <h2 className="section-title">How We Integrate NetSuite</h2>
            <p>Our integration services help you create a seamless digital ecosystem connecting NetSuite with your other business applications.</p>
          </div>

          <div className="grid integration-steps">
            <div className="step-card">
              <div className="step-icon">
                <img src="/img/integration-step1.svg" alt="Discovery & Analysis" />
              </div>
              <h3>Discovery & Analysis</h3>
              <p>We analyze your current systems and identify integration opportunities that will drive business value.</p>
            </div>
            <div className="step-card">
              <div className="step-icon">
                <img src="/img/integration-step2.svg" alt="Design & Planning" />
              </div>
              <h3>Design & Planning</h3>
              <p>We design the integration architecture and plan the implementation approach.</p>
            </div>
            <div className="step-card">
              <div className="step-icon">
                <img src="/img/integration-step3.svg" alt="Development" />
              </div>
              <h3>Development</h3>
              <p>We build robust integration solutions using various integration methods and technologies.</p>
            </div>
            <div className="step-card">
              <div className="step-icon">
                <img src="/img/integration-step4.svg" alt="Testing & Deployment" />
              </div>
              <h3>Testing & Deployment</h3>
              <p>We conduct thorough testing and deploy the integration to your production environment.</p>
            </div>
            <div className="step-card">
              <div className="step-icon">
                <img src="/img/integration-step5.svg" alt="Monitoring & Support" />
              </div>
              <h3>Monitoring & Support</h3>
              <p>We provide ongoing monitoring and support to ensure reliable operation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Solutions */}
      <section className="section services-section">
        <div className="container">
          <div className="text-center mb-8">
            <p className="section-subtitle">INTEGRATION SOLUTIONS</p>
            <h2 className="section-title">NetSuite Integration Services</h2>
            <p>Our integration services connect NetSuite with your existing business applications and platforms.</p>
          </div>

          <div className="grid services-grid">
            <div className="service-card">
              <h3 className="service-title">E-Commerce Integration</h3>
              <p>Connect NetSuite with major e-commerce platforms like SuiteCommerce, Shopify, Magento, and WooCommerce for seamless data flow.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">CRM Integration</h3>
              <p>Integrate NetSuite with CRM systems such as Salesforce, HubSpot, and Microsoft Dynamics for unified customer data management.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Payment Gateway Integration</h3>
              <p>Connect NetSuite to payment processors like Stripe, PayPal, and local payment gateways for secure transactions.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">WMS & Logistics Integration</h3>
              <p>Integrate with Warehouse Management Systems for real-time inventory tracking and order fulfillment management.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">ERP Integration</h3>
              <p>Connect NetSuite with other ERP systems to create a unified enterprise view of your business operations.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Data Analytics & BI Tools</h3>
              <p>Integrate with business intelligence tools like Power BI, Tableau, and Looker for advanced reporting and analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Technologies */}
      <section className="section technologies-section">
        <div className="container">
          <div className="text-center mb-8">
            <p className="section-subtitle">INTEGRATION TECHNOLOGIES</p>
            <h2 className="section-title">Our Integration Approach</h2>
            <p>We leverage modern integration technologies to ensure reliable, scalable solutions.</p>
          </div>

          <div className="grid technologies-grid">
            <div className="technology-card">
              <div className="technology-icon">
                <img src="/img/technology-rest.svg" alt="REST API" />
              </div>
              <h3>REST API Integration</h3>
              <p>Use NetSuite's REST API for secure, scalable integration with modern applications.</p>
            </div>
            <div className="technology-card">
              <div className="technology-icon">
                <img src="/img/technology-soap.svg" alt="SOAP API" />
              </div>
              <h3>SOAP API Integration</h3>
              <p>Implement robust SOAP integrations for complex enterprise-level requirements.</p>
            </div>
            <div className="technology-card">
              <div className="technology-icon">
                <img src="/img/technology-suitelet.svg" alt="SuiteLet" />
              </div>
              <h3>SuiteLet Development</h3>
              <p>Develop custom Suitelets for creating web services and integrating with external systems.</p>
            </div>
            <div className="technology-card">
              <div className="technology-icon">
                <img src="/img/technology-suitescript.svg" alt="SuiteScript" />
              </div>
              <h3>SuiteScript Integration</h3>
              <p>Use SuiteScript for custom integration logic and automation.</p>
            </div>
            <div className="technology-card">
              <div className="technology-icon">
                <img src="/img/technology-web-service.svg" alt="Web Services" />
              </div>
              <h3>Web Services</h3>
              <p>Implement standard web services protocols for interoperability with third-party applications.</p>
            </div>
            <div className="technology-card">
              <div className="technology-icon">
                <img src="/img/technology-file-cabinet.svg" alt="File Cabinet" />
              </div>
              <h3>File Cabinet Integration</h3>
              <p>Integrate with NetSuite's File Cabinet for document management and file sharing.</p>
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
                <img src="/img/animated-integration.svg" alt="Integration Services" />
              </div>
              <h3>Integration Expertise</h3>
              <p>Deep expertise in integrating NetSuite with various business applications and platforms.</p>
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
            <h2 className="section-title">Ready to Integrate Your Systems?</h2>
            <p className="mb-4">Let us help you create a seamless digital ecosystem with NetSuite integration.</p>
            <div className="cta-button">
              <Link to="/contact" className="btn btn-secondary">Schedule a Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetSuiteIntegration;