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
      {/* Hero Section - Simplified */}
      <section className="hero-section">
        <div className="text-center mb-8">
          <h1 className="section-title">Transform Your Business with NetSuite & SuiteCommerce</h1>
          <p className="hero-description mb-4">Expert implementation, customization, and integration services for NetSuite ERP and SuiteCommerce platforms. We help businesses like yours streamline operations and drive digital transformation.</p>
          <div className="cta-button">
            <Link to="/contact" className="btn btn-primary">Get Started Today</Link>
            <Link to="/services" className="btn btn-secondary">Our Services</Link>
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
            <p>At DevsCrew Inc., we pride ourselves on having a team of highly qualified NetSuite certified professionals who possess extensive expertise in ERP implementation and customization. Our certified experts hold multiple NetSuite certifications including NetSuite Certified Implementation Specialist, NetSuite Certified Systems Administrator, and NetSuite Certified Developer credentials. These certifications validate our team's deep understanding of NetSuite's complex architecture and their ability to deliver robust solutions tailored to your specific business requirements. With years of hands-on experience across various industries, our certified professionals understand the nuances of implementing NetSuite ERP systems that seamlessly integrate with existing business processes, ensuring optimal performance and maximum ROI for your organization. We stay current with NetSuite's latest updates and features, providing you with cutting-edge solutions that keep your business competitive in an ever-evolving digital landscape.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <img src="/img/animated-suitecommerce.svg" alt="SuiteCommerce Customization" />
            </div>
            <h3>SuiteCommerce Customization</h3>
            <p>Our SuiteCommerce customization services are designed to create unique, engaging shopping experiences that drive conversions and customer loyalty. We specialize in tailoring SuiteCommerce storefronts to match your brand identity while ensuring seamless integration with your existing NetSuite ERP system. Our team of expert developers and designers work closely with you to understand your business objectives and translate them into compelling digital experiences. Whether you need custom product displays, personalized shopping journeys, advanced search functionality, or sophisticated checkout processes, our customization capabilities allow us to build a storefront that truly represents your brand values. We leverage modern web technologies and responsive design principles to ensure your online store performs flawlessly across all devices and browsers. Our approach focuses on scalability and maintainability, so as your business grows, your SuiteCommerce platform can evolve with your needs without requiring complete rework or expensive overhauls.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <img src="/img/animated-implementation.svg" alt="Implementation Services" />
            </div>
            <h3>Implementation Services</h3>
            <p>Our comprehensive NetSuite ERP implementation services ensure a smooth, efficient transition to your new system with minimal disruption to your business operations. We follow industry best practices and proven methodologies to deliver successful implementations tailored specifically to your organization's unique requirements. Our implementation process begins with detailed analysis of your current business processes and pain points, followed by careful planning and configuration of the NetSuite system to match your operational needs. We provide end-to-end support throughout the entire implementation lifecycle, including data migration, system configuration, user training, and post-implementation support. Our experienced project managers coordinate all aspects of the implementation, ensuring that timelines are met, budgets are respected, and quality standards are maintained. We work closely with your team to understand your business objectives and translate them into technical solutions that drive measurable results. With our proven track record of successful implementations across diverse industries, we guarantee a robust, scalable ERP system that will serve as the foundation for your long-term business success.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <img src="/img/animated-business-meeting.svg" alt="Business Meetings & Consultation" />
            </div>
            <h3>Consultation & Strategy</h3>
            <p>Our strategic consulting services provide you with expert guidance to maximize the value of your NetSuite investment and align technology solutions with your business objectives. We begin by conducting comprehensive assessments of your current systems, processes, and challenges to develop a clear understanding of your unique requirements. Our experienced consultants work closely with your leadership team to identify opportunities for improvement and create actionable strategies that leverage NetSuite's capabilities effectively. Whether you're looking to optimize existing processes, implement new features, or plan for future growth, our consultation services ensure that every technology decision supports your broader business goals. We provide ongoing support through regular strategy reviews, performance monitoring, and recommendations for continuous improvement. Our approach combines deep technical expertise with business acumen, enabling us to deliver solutions that not only solve immediate challenges but also position your organization for sustained success in the digital economy. With our strategic guidance, you can confidently navigate complex ERP implementations and realize maximum return on investment.</p>
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