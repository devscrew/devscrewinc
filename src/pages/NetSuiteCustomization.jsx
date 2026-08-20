import { Link } from 'react-router-dom';
import './NetSuiteCustomization.scss';

const NetSuiteCustomization = () => {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero-section hero-section--netsuite-customization">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="section-title">NetSuite Customization Services</h1>
            <p className="hero-description mb-4">Tailor NetSuite to your unique workflows with custom configuration, SuiteScript development, and workflow automation.</p>
            <div className="cta-button">
              <Link to="/contact" className="btn btn-primary">Get Started Today</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Process */}
      <section className="section customization-section">
        <div className="container">
          <div className="text-center mb-8">
            <p className="section-subtitle">OUR CUSTOMIZATION APPROACH</p>
            <h2 className="section-title">How We Customize NetSuite</h2>
            <p>Our team of certified NetSuite developers creates tailored solutions that align with your business processes and objectives.</p>
          </div>

          <div className="grid customization-steps">
            <div className="step-card">
              <div className="step-icon">
                <img src="/img/customization-step1.svg" alt="Requirements Analysis" />
              </div>
              <h3>Requirements Analysis</h3>
              <p>We work closely with your team to understand your unique business needs and identify areas for customization.</p>
            </div>
            <div className="step-card">
              <div className="step-icon">
                <img src="/img/customization-step2.svg" alt="Design & Planning" />
              </div>
              <h3>Design & Planning</h3>
              <p>We create detailed plans for how customizations will be implemented while maintaining system integrity.</p>
            </div>
            <div className="step-card">
              <div className="step-icon">
                <img src="/img/customization-step3.svg" alt="Development" />
              </div>
              <h3>Development</h3>
              <p>Our developers implement customizations using SuiteScript, NetSuite's powerful scripting language.</p>
            </div>
            <div className="step-card">
              <div className="step-icon">
                <img src="/img/customization-step4.svg" alt="Testing & Deployment" />
              </div>
              <h3>Testing & Deployment</h3>
              <p>We thoroughly test customizations and deploy them to your production environment.</p>
            </div>
            <div className="step-card">
              <div className="step-icon">
                <img src="/img/customization-step5.svg" alt="Training & Support" />
              </div>
              <h3>Training & Support</h3>
              <p>We provide training for your team and ongoing support to ensure successful adoption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Services */}
      <section className="section services-section">
        <div className="container">
          <div className="text-center mb-8">
            <p className="section-subtitle">CUSTOMIZATION SERVICES</p>
            <h2 className="section-title">NetSuite Customization Solutions</h2>
            <p>Our customization services help you unlock the full potential of your NetSuite platform.</p>
          </div>

          <div className="grid services-grid">
            <div className="service-card">
              <h3 className="service-title">Role & Permission Configuration</h3>
              <p>Configure user roles and permissions to ensure appropriate access levels across different modules and data.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Workflow Automation</h3>
              <p>Create automated workflows that streamline business processes and reduce manual tasks.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">SuiteScript Development</h3>
              <p>Develop custom SuiteScripts for complex business logic, integrations, and system enhancements.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Custom Forms & Fields</h3>
              <p>Create custom forms and fields that capture exactly the data your business requires.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Report & Dashboard Customization</h3>
              <p>Design custom reports and dashboards to provide actionable insights for decision-making.</p>
            </div>
            <div className="service-card">
              <h3 className="service-title">Integration Customization</h3>
              <p>Customize integrations with third-party applications to create seamless data flows.</p>
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
                <img src="/img/animated-customization.svg" alt="Customization Services" />
              </div>
              <h3>Customization Expertise</h3>
              <p>Deep expertise in NetSuite customization that aligns with your business needs and objectives.</p>
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
            <h2 className="section-title">Ready to Customize Your NetSuite?</h2>
            <p className="mb-4">Let us help you unlock the full potential of your NetSuite investment.</p>
            <div className="cta-button">
              <Link to="/contact" className="btn btn-secondary">Schedule a Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetSuiteCustomization;