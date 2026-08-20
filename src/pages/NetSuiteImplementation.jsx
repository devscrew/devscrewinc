import { Link } from 'react-router-dom';
import './NetSuiteImplementation.scss';

const NetSuiteImplementation = () => {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero-section hero-section--netsuite-implementation">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="section-title">NetSuite Implementation Services</h1>
            <p className="hero-description mb-4">End-to-end implementation of NetSuite ERP solutions tailored to your business needs, ensuring seamless integration with existing systems.</p>
            <div className="cta-button">
              <Link to="/contact" className="btn btn-primary">Get Started Today</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="section implementation-section">
        <div className="container">
          <div className="text-center mb-8">
            <p className="section-subtitle">OUR IMPLEMENTATION PROCESS</p>
            <h2 className="section-title">How We Implement NetSuite</h2>
            <p>Our proven methodology ensures smooth, efficient transitions to your new NetSuite system with minimal disruption.</p>
          </div>

          <div className="grid implementation-steps">
            <div className="step-card">
              <div className="step-icon">
                <img src="/img/implementation-step1.svg" alt="Discovery & Analysis" />
              </div>
              <h3>Discovery & Analysis</h3>
              <p>We conduct a comprehensive assessment of your current business processes, pain points, and requirements to understand your specific needs.</p>
            </div>
            <div className="step-card">
              <div className="step-icon">
                <img src="/img/implementation-step2.svg" alt="Planning & Design" />
              </div>
              <h3>Planning & Design</h3>
              <p>We develop a detailed implementation plan and design the system configuration that aligns with your business objectives.</p>
            </div>
            <div className="step-card">
              <div className="step-icon">
                <img src="/img/implementation-step3.svg" alt="Configuration & Setup" />
              </div>
              <h3>Configuration & Setup</h3>
              <p>We configure NetSuite according to your specifications, ensuring all modules and features are properly set up.</p>
            </div>
            <div className="step-card">
              <div className="step-icon">
                <img src="/img/implementation-step4.svg" alt="Data Migration" />
              </div>
              <h3>Data Migration</h3>
              <p>We seamlessly transfer your existing data into NetSuite with minimal downtime and maximum accuracy.</p>
            </div>
            <div className="step-card">
              <div className="step-icon">
                <img src="/img/implementation-step5.svg" alt="Testing & Training" />
              </div>
              <h3>Testing & Training</h3>
              <p>We conduct thorough testing and provide comprehensive training to ensure your team can use NetSuite effectively.</p>
            </div>
            <div className="step-card">
              <div className="step-icon">
                <img src="/img/implementation-step6.svg" alt="Go-Live & Support" />
              </div>
              <h3>Go-Live & Support</h3>
              <p>We support your go-live process and provide ongoing maintenance to ensure long-term success.</p>
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

      {/* Services Overview */}
      <section className="section services-section">
        <div className="container">
          <div className="text-center mb-8">
            <p className="section-subtitle">OUR NETSUITE SOLUTIONS</p>
            <h2 className="section-title">Additional NetSuite Services</h2>
            <p>We offer a comprehensive suite of services to maximize the value of your NetSuite investment.</p>
          </div>

          <div className="grid services-grid">
            <div className="service-card">
              <h3 className="service-title">System Configuration & Customization</h3>
              <p>Tailor NetSuite to your unique workflows with custom configuration, SuiteScript development, and workflow automation.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Data Migration Services</h3>
              <p>Seamless migration from legacy ERPs (SAP, Microsoft Dynamics, Oracle), spreadsheets, and third-party systems.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">E-Invoicing & Tax Compliance</h3>
              <p>Stay compliant across Middle East markets with FTA (UAE), ZATCA Phase 2 (Saudi Arabia VAT e-invoicing), and regional tax authority requirements.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Integration Services</h3>
              <p>Build unified business operations by connecting NetSuite to e-commerce, CRM, WMS, payment gateways, and custom applications.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Managed Support & SLAs</h3>
              <p>Enterprise-grade managed services with defined service level agreements (SLAs) for critical, high, and medium priority incidents.</p>
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

export default NetSuiteImplementation;