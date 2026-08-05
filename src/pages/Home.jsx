import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import Modal from '../components/Modal';

const Home = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    },
    {
      title: 'Ongoing Support & Maintenance',
      description: 'Comprehensive support and maintenance services to ensure long-term success of your NetSuite and SuiteCommerce platforms.'
    },
    {
      title: 'Training & Knowledge Transfer',
      description: 'Comprehensive training programs for your team to ensure they can effectively utilize NetSuite and SuiteCommerce platforms.'
    }
  ];

  const features = [
    {
      title: "NetSuite Certified Experts",
      icon: "/img/animated-shield.svg",
      summary: "At DevsCrew Inc., we pride ourselves on having a team of highly qualified NetSuite certified professionals who possess extensive expertise in ERP implementation and customization.",
      content: "At DevsCrew Inc., we pride ourselves on having a team of highly qualified NetSuite certified professionals who possess extensive expertise in ERP implementation and customization. Our certified experts hold multiple NetSuite certifications including NetSuite Certified Implementation Specialist, NetSuite Certified Systems Administrator, and NetSuite Certified Developer credentials. These certifications validate our team's deep understanding of NetSuite's complex architecture and their ability to deliver robust solutions tailored to your specific business requirements. With years of hands-on experience across various industries, our certified professionals understand the nuances of implementing NetSuite ERP systems that seamlessly integrate with existing business processes, ensuring optimal performance and maximum ROI for your organization. We stay current with NetSuite's latest updates and features, providing you with cutting-edge solutions that keep your business competitive in an ever-evolving digital landscape."
    },
    {
      title: "SuiteCommerce Customization",
      icon: "/img/animated-cart.svg",
      summary: "Our SuiteCommerce customization services are designed to create unique, engaging shopping experiences that drive conversions and customer loyalty.",
      content: "Our SuiteCommerce customization services are designed to create unique, engaging shopping experiences that drive conversions and customer loyalty. We specialize in tailoring SuiteCommerce storefronts to match your brand identity while ensuring seamless integration with your existing NetSuite ERP system. Our team of expert developers and designers work closely with you to understand your business objectives and translate them into compelling digital experiences. Whether you need custom product displays, personalized shopping journeys, advanced search functionality, or sophisticated checkout processes, our customization capabilities allow us to build a storefront that truly represents your brand values. We leverage modern web technologies and responsive design principles to ensure your online store performs flawlessly across all devices and browsers. Our approach focuses on scalability and maintainability, so as your business grows, your SuiteCommerce platform can evolve with your needs without requiring complete rework or expensive overhauls."
    },
    {
      title: "Implementation Services",
      icon: "/img/animated-gear.svg",
      summary: "Our comprehensive NetSuite ERP implementation services ensure a smooth, efficient transition to your new system with minimal disruption to your business operations.",
      content: "Our comprehensive NetSuite ERP implementation services ensure a smooth, efficient transition to your new system with minimal disruption to your business operations. We follow industry best practices and proven methodologies to deliver successful implementations tailored specifically to your organization's unique requirements. Our implementation process begins with detailed analysis of your current business processes and pain points, followed by careful planning and configuration of the NetSuite system to match your operational needs. We provide end-to-end support throughout the entire implementation lifecycle, including data migration, system configuration, user training, and post-implementation support. Our experienced project managers coordinate all aspects of the implementation, ensuring that timelines are met, budgets are respected, and quality standards are maintained. We work closely with your team to understand your business objectives and translate them into technical solutions that drive measurable results. With our proven track record of successful implementations across diverse industries, we guarantee a robust, scalable ERP system that will serve as the foundation for your long-term business success."
    },
    {
      title: "Consultation & Strategy",
      icon: "/img/animated-meeting.svg",
      summary: "Our strategic consulting services provide you with expert guidance to maximize the value of your NetSuite investment and align technology solutions with your business objectives.",
      content: "Our strategic consulting services provide you with expert guidance to maximize the value of your NetSuite investment and align technology solutions with your business objectives. We begin by conducting comprehensive assessments of your current systems, processes, and challenges to develop a clear understanding of your unique requirements. Our experienced consultants work closely with your leadership team to identify opportunities for improvement and create actionable strategies that leverage NetSuite's capabilities effectively. Whether you're looking to optimize existing processes, implement new features, or plan for future growth, our consultation services ensure that every technology decision supports your broader business goals. We provide ongoing support through regular strategy reviews, performance monitoring, and recommendations for continuous improvement. Our approach combines deep technical expertise with business acumen, enabling us to deliver solutions that not only solve immediate challenges but also position your organization for sustained success in the digital economy. With our strategic guidance, you can confidently navigate complex ERP implementations and realize maximum return on investment."
    }
  ];

  const openModal = (feature) => {
    console.log('Opening modal for feature:', feature.title);
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('Closing modal');
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      {/* Hero Section with Full Width Background */}
      <section className="hero-section hero-section--home">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="section-title">NetSuite ERP & SuiteCommerce Solutions</h1>
            <p className="hero-description mb-4">DevsCrew Inc. is a specialized consulting firm dedicated to helping businesses leverage the power of NetSuite ERP and SuiteCommerce platforms.</p>
            <p className="mb-4">With deep expertise in NetSuite implementation, customization, and integration services, we help organizations streamline operations, enhance customer experiences, and drive business growth through technology.</p>
            <p>Our team of certified NetSuite professionals brings years of experience across various industries to ensure your platform delivers maximum value.</p>
            <div className="cta-button">
              <Link to="/contact" className="btn btn-primary">Schedule a Consultation</Link>
              <Link to="/services" className="btn btn-secondary">Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <div className="text-center mb-8">
            <p className="section-subtitle">OUR SERVICES</p>
            <h1 className="section-title">NetSuite & SuiteCommerce Solutions</h1>
            <p>We provide comprehensive services to help you maximize the value of your NetSuite and SuiteCommerce investments.</p>
          </div>

          <div className="grid services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section features-section">
        <div className="container">
          <div className="text-center mb-8">
            <p className="section-subtitle">WHY CHOOSE US</p>
            <h2 className="section-title">Why DevsCrew Inc.?</h2>
          </div>

          <div className="grid features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log('Feature card clicked:', feature.title);
                  openModal(feature);
                }}
                style={{ cursor: 'pointer' }}
              >
                <div className="feature-icon">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="text-center mb-8">
            <p className="section-subtitle">CLIENT TESTIMONIALS</p>
            <h2 className="section-title">What Our Clients Say</h2>
            <p>See how we've helped businesses transform their operations with NetSuite and SuiteCommerce solutions.</p>
          </div>

          <div className="grid testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"DevsCrew Inc. transformed our ERP system implementation. Their expertise in NetSuite helped us streamline our operations and reduce costs by 30%."</p>
              </div>
              <div className="testimonial-author">
                <h4>Michael Johnson</h4>
                <p>CTO, TechSolutions Inc.</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The SuiteCommerce customization they provided created a shopping experience that increased our conversion rate by 45% and improved customer satisfaction scores."</p>
              </div>
              <div className="testimonial-author">
                <h4>Sarah Williams</h4>
                <p>Marketing Director, RetailPlus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta-section">
        <div className="cta-content text-center">
          <h2 className="section-title">Ready to Transform Your Business?</h2>
          <p className="mb-4">Let us help you maximize the value of your NetSuite and SuiteCommerce investments.</p>
          <div className="cta-button">
            <Link to="/contact" className="btn btn-secondary">Schedule a Consultation</Link>
          </div>
        </div>
      </section>

      {/* Modal Component - Clean implementation */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedFeature?.title || ""}
      >
        {selectedFeature && (
          <p>{selectedFeature.content}</p>
        )}
      </Modal>
    </div>
  );
};

export default Home;