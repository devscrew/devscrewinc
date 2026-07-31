import { Link } from 'react-router-dom';
import './Home.scss';

const Home = () => {
  const services = [
    {
      title: 'NetSuite Implementation',
      description: 'End-to-end implementation of NetSuite ERP solutions tailored to your business needs, ensuring seamless integration with existing systems.'
    },
    {
      title: 'SuiteCommerce Customization',
      description: 'Customize and enhance SuiteCommerce storefronts to create unique shopping experiences that drive conversions and customer engagement.'
    },
    {
      title: 'Consultation & Strategy',
      description: 'Strategic consulting services to help you maximize the value of your NetSuite investment and align technology with business goals.'
    },
    {
      title: 'Integration Services',
      description: 'Seamless integration between NetSuite, SuiteCommerce, and third-party applications to create a unified digital ecosystem.'
    }
  ];

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="section hero-section">
        <div className="grid hero-grid">
          <div className="hero-content">
            <h1 className="section-title">Transform Your Business with NetSuite & SuiteCommerce</h1>
            <p className="hero-description mb-4">Expert implementation, customization, and integration services for NetSuite ERP and SuiteCommerce platforms.</p>
            <div className="cta-button">
              <Link to="/contact" className="btn btn-primary">Get Started Today</Link>
              <Link to="/services" className="btn btn-secondary">Our Services</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                 alt="NetSuite and SuiteCommerce Solutions" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="text-center mb-8">
          <p className="section-subtitle">OUR SERVICES</p>
          <h2 className="section-title">Comprehensive NetSuite & SuiteCommerce Solutions</h2>
          <p className="mb-4">Tailored services to help you maximize the value of your investment in NetSuite and SuiteCommerce platforms.</p>
        </div>

        <div className="grid services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section features-section">
        <div className="text-center mb-8">
          <p className="section-subtitle">WHY CHOOSE US</p>
          <h2 className="section-title">Why DevsCrew Inc.?</h2>
        </div>

        <div className="grid features-grid">
          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>NetSuite Certified Experts</h3>
            <p>Our team holds multiple NetSuite certifications and extensive implementation experience.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Proven Results</h3>
            <p>Successful implementations across various industries with measurable business impact.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Custom Solutions</h3>
            <p>Personalized approaches that align with your specific business requirements and goals.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Ongoing Support</h3>
            <p>Comprehensive support and maintenance to ensure long-term success of your platforms.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="cta-content text-center">
          <h2 className="section-title">Ready to Transform Your Business?</h2>
          <p className="mb-4">Let us help you maximize the value of your NetSuite and SuiteCommerce investments.</p>
          <div className="cta-button">
            <Link to="/contact" className="btn btn-primary">Schedule a Consultation</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;