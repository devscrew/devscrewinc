import { Link } from 'react-router-dom';

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
      <section className="section" style={{paddingTop:'10rem', paddingBottom:'5rem'}}>
        <div className="grid" style={{gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center'}}>
          <div>
            <h1 className="section-title">Transform Your Business with NetSuite & SuiteCommerce</h1>
            <p className="mb-4" style={{fontSize:'1.25rem', lineHeight:'1.6'}}>Expert implementation, customization, and integration services for NetSuite ERP and SuiteCommerce platforms.</p>
            <div className="cta-button">
              <Link to="/contact" className="btn btn-primary" style={{backgroundColor:'#ac2a29', color:'white', fontWeight:'bold'}}>Get Started Today</Link>
              <Link to="/services" className="btn btn-secondary" style={{marginLeft:'1rem', backgroundColor:'#2A4A7B', color:'white', fontWeight:'bold'}}>Our Services</Link>
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                 alt="NetSuite and SuiteCommerce Solutions"
                 style={{borderRadius:'10px', boxShadow:'0 10px 30px rgba(0,0,0,0.1)'}} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" style={{backgroundColor:'#f8fafc'}}>
        <div className="text-center mb-8">
          <p className="section-subtitle">OUR SERVICES</p>
          <h2 className="section-title" style={{color:'#ac2a29'}}>Comprehensive NetSuite & SuiteCommerce Solutions</h2>
          <p className="mb-4" style={{color:'#333'}}>Tailored services to help you maximize the value of your investment in NetSuite and SuiteCommerce platforms.</p>
        </div>

        <div className="grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{padding:'2rem', borderRadius:'10px', backgroundColor:'white', boxShadow:'0 5px 15px rgba(0,0,0,0.05)', transition:'transform 0.3s ease'}}>
              <h3 style={{color:'#ac2a29', marginBottom:'1rem'}}>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="text-center mb-8">
          <p className="section-subtitle">WHY CHOOSE US</p>
          <h2 className="section-title">Why DevsCrew Inc.?</h2>
        </div>

        <div className="grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
          <div className="feature-card" style={{textAlign:'center', padding:'2rem'}}>
            <div style={{fontSize:'3rem', color:'#ac2a29', marginBottom:'1rem'}}>🏆</div>
            <h3>NetSuite Certified Experts</h3>
            <p>Our team holds multiple NetSuite certifications and extensive implementation experience.</p>
          </div>

          <div className="feature-card" style={{textAlign:'center', padding:'2rem'}}>
            <div style={{fontSize:'3rem', color:'#ac2a29', marginBottom:'1rem'}}>🚀</div>
            <h3>Proven Results</h3>
            <p>Successful implementations across various industries with measurable business impact.</p>
          </div>

          <div className="feature-card" style={{textAlign:'center', padding:'2rem'}}>
            <div style={{fontSize:'3rem', color:'#ac2a29', marginBottom:'1rem'}}>💡</div>
            <h3>Custom Solutions</h3>
            <p>Personalized approaches that align with your specific business requirements and goals.</p>
          </div>

          <div className="feature-card" style={{textAlign:'center', padding:'2rem'}}>
            <div style={{fontSize:'3rem', color:'#ac2a29', marginBottom:'1rem'}}>🔄</div>
            <h3>Ongoing Support</h3>
            <p>Comprehensive support and maintenance to ensure long-term success of your platforms.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section" style={{backgroundColor:'#2A4A7B', color:'white', textAlign:'center', padding:'5rem 2rem'}}>
        <h2 className="section-title" style={{color:'white'}}>Ready to Transform Your Business?</h2>
        <p className="mb-4" style={{fontSize:'1.25rem', maxWidth:'700px', margin:'0 auto', color:'white'}}>Let us help you maximize the value of your NetSuite and SuiteCommerce investments.</p>
        <div className="cta-button">
          <Link to="/contact" className="btn btn-primary" style={{backgroundColor:'#ac2a29', color:'white', fontWeight:'bold'}}>Schedule a Consultation</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;