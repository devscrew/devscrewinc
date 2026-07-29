import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    { title: 'Custom Software Development', description: 'Tailored solutions built specifically for your business needs.' },
    { title: 'Mobile App Development', description: 'Native iOS, Android and cross-platform mobile applications.' },
    { title: 'Web Solutions', description: 'Modern responsive websites using React Vue Angular or other frameworks.' }
  ];

  return (
    <div className="container">
      <section style={{paddingTop:'10rem'}}>
        <h2 style={{color:'#0d9488',fontWeight:600,textTransform:'uppercase',letterSpacing:'3px'}}>We Build Digital Products</h2>
        <p className="lead">We help businesses transform their ideas into powerful digital solutions.</p>
        <div className="cta-button">
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to="/services" className="btn btn-secondary">Learn More →</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;