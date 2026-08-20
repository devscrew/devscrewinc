import { Link } from 'react-router-dom';
import './NetSuite.scss';

const NetSuite = () => {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero-section hero-section--netsuite">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="section-title">NetSuite ERP Solutions for Business Growth</h1>
            <p className="hero-description mb-4">Streamline operations, automate financial processes, and achieve tax compliance with expert NetSuite implementation. Our certified professionals deliver measurable results: accurate data migration, e-invoicing readiness, and seamless integrations that drive your business forward.</p>
            <div className="cta-button">
              <Link to="/contact" className="btn btn-primary">Get Started Today</Link>
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
            <p>Deliver measurable business outcomes with our end-to-end NetSuite solutions—from implementation to ongoing support.</p>
          </div>

          <div className="grid services-grid">
            <div className="service-card">
              <h3 className="service-title">ERP Implementation</h3>
              <p className="service-description">End-to-end NetSuite ERP implementation aligned to your business goals. Our certified professionals deliver faster deployment, streamlined go-live processes, and measurable ROI from day one.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">System Configuration & Customization</h3>
              <p className="service-description">Tailor NetSuite to your unique workflows with custom configuration, SuiteScript development, and workflow automation. We configure roles, permissions, financial settings, inventory management, and industry-specific solutions.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Data Migration Services</h3>
              <p className="service-description">Seamless migration from legacy ERPs (SAP, Microsoft Dynamics, Oracle), spreadsheets, and third-party systems. Our proven methodology ensures data cleansing, validation testing, detailed field mapping, zero-loss transfer of financial records, customer data, inventory, and transaction history with minimal downtime.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">E-Invoicing & Tax Compliance</h3>
              <p className="service-description">Stay compliant across Middle East markets with FTA (UAE), ZATCA Phase 2 (Saudi Arabia VAT e-invoicing), and regional tax authority requirements. We implement XML/QR-code invoice generation, real-time clearinghouse integration, automated VAT calculations, audit-ready reporting, and continuous regulatory updates.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Integration Services</h3>
              <p className="service-description">Build unified business operations by connecting NetSuite to e-commerce (Shopify, Magento), CRM (Salesforce), WMS, payment gateways, shipping carriers, and custom applications via SuiteTalk REST/SOAP APIs.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Managed Support & SLAs</h3>
              <p className="service-description">Enterprise-grade managed services with defined service level agreements (SLAs) for critical, high, and medium priority incidents. Receive 24/7 proactive monitoring, quarterly system health assessments, release patch management, performance tuning, user training, and dedicated account support to ensure continuous platform optimization.</p>
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