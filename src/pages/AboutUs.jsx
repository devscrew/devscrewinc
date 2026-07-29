const AboutUs = () => {
  return (
    <div className="container">
      <section className="section" style={{paddingTop:'8rem'}}>
        <div className="grid" style={{gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom:'4rem'}}>
          <div>
            <h1 className="section-title">About DevsCrew Inc.</h1>
            <p className="mb-4">DevsCrew Inc. is a specialized consulting firm dedicated to helping businesses leverage the power of NetSuite ERP and SuiteCommerce platforms.</p>
            <p className="mb-4">With deep expertise in NetSuite implementation, customization, and integration services, we help organizations streamline operations, enhance customer experiences, and drive business growth through technology.</p>
            <p>Our team of certified NetSuite professionals brings years of experience across various industries to ensure your platform delivers maximum value.</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                 alt="NetSuite Consulting Team"
                 style={{borderRadius:'10px', boxShadow:'0 10px 30px rgba(0,0,0,0.1)'}} />
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="section-title">Our Expertise</h2>
          <p>Specializing in NetSuite ERP and SuiteCommerce solutions across multiple industries.</p>
        </div>

        <div className="grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem'}}>
          <div style={{padding:'2rem', borderRadius:'10px', backgroundColor:'#f8fafc', textAlign:'center'}}>
            <h3>NetSuite Implementation</h3>
            <p>End-to-end implementation of NetSuite ERP solutions tailored to your business needs.</p>
          </div>

          <div style={{padding:'2rem', borderRadius:'10px', backgroundColor:'#f8fafc', textAlign:'center'}}>
            <h3>SuiteCommerce Customization</h3>
            <p>Customized e-commerce storefronts that drive customer engagement and conversions.</p>
          </div>

          <div style={{padding:'2rem', borderRadius:'10px', backgroundColor:'#f8fafc', textAlign:'center'}}>
            <h3>Integration Services</h3>
            <p>Seamless integration between NetSuite, SuiteCommerce, and third-party applications.</p>
          </div>

          <div style={{padding:'2rem', borderRadius:'10px', backgroundColor:'#f8fafc', textAlign:'center'}}>
            <h3>Consultation & Strategy</h3>
            <p>Strategic consulting to maximize your NetSuite investment and align with business goals.</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="mb-4">We combine technical expertise with business acumen to deliver solutions that drive real results.</p>

          <div className="grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop:'2rem'}}>
            <div style={{textAlign:'center'}}>
              <p style={{fontSize:'2rem', color:'#1a5fb4'}}>🏆</p>
              <h3>Industry Recognition</h3>
              <p>Certified NetSuite partners with proven track record</p>
            </div>

            <div style={{textAlign:'center'}}>
              <p style={{fontSize:'2rem', color:'#1a5fb4'}}>📈</p>
              <h3>Measurable Results</h3>
              <p>Delivered solutions that drive business impact</p>
            </div>

            <div style={{textAlign:'center'}}>
              <p style={{fontSize:'2rem', color:'#1a5fb4'}}>🤝</p>
              <h3>Client-Centric Approach</h3>
              <p>Personalized services tailored to your specific needs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
