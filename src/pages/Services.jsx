const Services = () => {
  return (
    <div className="container">
      <section className="section" style={{paddingTop:'8rem'}}>
        <div className="text-center mb-8">
          <p className="section-subtitle">OUR SERVICES</p>
          <h1 className="section-title">NetSuite & SuiteCommerce Solutions</h1>
          <p>We provide comprehensive services to help you maximize the value of your NetSuite and SuiteCommerce investments.</p>
        </div>

        <div className="grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom:'4rem'}}>
          <div style={{padding:'2rem', borderRadius:'10px', backgroundColor:'#f8fafc', border:'1px solid #e5e7eb'}}>
            <h3 style={{color:'#1a5fb4', marginBottom:'1rem'}}>NetSuite Implementation</h3>
            <p>Complete end-to-end implementation of NetSuite ERP solutions tailored to your business needs. We ensure seamless integration with existing systems and provide comprehensive training for your team.</p>
          </div>

          <div style={{padding:'2rem', borderRadius:'10px', backgroundColor:'#f8fafc', border:'1px solid #e5e7eb'}}>
            <h3 style={{color:'#1a5fb4', marginBottom:'1rem'}}>SuiteCommerce Customization</h3>
            <p>Customize and enhance SuiteCommerce storefronts to create unique shopping experiences that drive conversions and customer engagement. We build responsive, user-friendly interfaces that align with your brand identity.</p>
          </div>

          <div style={{padding:'2rem', borderRadius:'10px', backgroundColor:'#f8fafc', border:'1px solid #e5e7eb'}}>
            <h3 style={{color:'#1a5fb4', marginBottom:'1rem'}}>Consultation & Strategy</h3>
            <p>Strategic consulting services to help you maximize the value of your NetSuite investment and align technology with business goals. We assess your current systems and recommend optimization strategies.</p>
          </div>

          <div style={{padding:'2rem', borderRadius:'10px', backgroundColor:'#f8fafc', border:'1px solid #e5e7eb'}}>
            <h3 style={{color:'#1a5fb4', marginBottom:'1rem'}}>Integration Services</h3>
            <p>Seamless integration between NetSuite, SuiteCommerce, and third-party applications to create a unified digital ecosystem. We ensure data flows smoothly across all platforms.</p>
          </div>

          <div style={{padding:'2rem', borderRadius:'10px', backgroundColor:'#f8fafc', border:'1px solid #e5e7eb'}}>
            <h3 style={{color:'#1a5fb4', marginBottom:'1rem'}}>Ongoing Support & Maintenance</h3>
            <p>Comprehensive support and maintenance services to ensure long-term success of your NetSuite and SuiteCommerce platforms. We provide regular updates, performance monitoring, and technical assistance.</p>
          </div>

          <div style={{padding:'2rem', borderRadius:'10px', backgroundColor:'#f8fafc', border:'1px solid #e5e7eb'}}>
            <h3 style={{color:'#1a5fb4', marginBottom:'1rem'}}>Training & Knowledge Transfer</h3>
            <p>Comprehensive training programs for your team to ensure they can effectively utilize NetSuite and SuiteCommerce platforms. We provide both technical and business training sessions.</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="section-title">Why Choose Our Services?</h2>
          <div className="grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop:'2rem'}}>
            <div style={{textAlign:'center', padding:'1.5rem'}}>
              <p style={{fontSize:'3rem', color:'#1a5fb4'}}>⏱️</p>
              <h3>Timely Delivery</h3>
              <p>We deliver projects on schedule without compromising quality.</p>
            </div>

            <div style={{textAlign:'center', padding:'1.5rem'}}>
              <p style={{fontSize:'3rem', color:'#1a5fb4'}}>🎯</p>
              <h3>Custom Solutions</h3>
              <p>Every project is tailored to your specific business requirements.</p>
            </div>

            <div style={{textAlign:'center', padding:'1.5rem'}}>
              <p style={{fontSize:'3rem', color:'#1a5fb4'}}>💡</p>
              <h3>Expert Team</h3>
              <p>Our certified NetSuite and SuiteCommerce experts bring industry experience.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
