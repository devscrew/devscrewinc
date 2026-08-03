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
            <img src="/img/home_hero_image.png" alt="NetSuite ERP Implementation" />
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
            <div className="feature-icon">
              <img src="/img/animated-certified.svg" alt="NetSuite Certified Experts" />
            </div>
            <h3>NetSuite Certified Experts</h3>
            <p>Our team holds multiple NetSuite certifications and extensive implementation experience.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <img src="/img/animated-suitecommerce.svg" alt="SuiteCommerce Customization" />
            </div>
            <h3>SuiteCommerce Customization</h3>
            <p>Customize and enhance SuiteCommerce storefronts to create unique shopping experiences.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <img src="/img/animated-implementation.svg" alt="Implementation Services" />
            </div>
            <h3>Implementation Services</h3>
            <p>End-to-end implementation of NetSuite ERP solutions tailored to your business needs.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <img src="/img/animated-business-meeting.svg" alt="Business Meetings & Consultation" />
            </div>
            <h3>Consultation & Strategy</h3>
            <p>Strategic consulting services to align technology with business goals.</p>
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