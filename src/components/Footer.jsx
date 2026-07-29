const Footer = () => {
  return (
    <footer className="footer section" style={{padding:'3rem 0',marginTop:'3rem',backgroundColor:'#2A4A7B',color:'white'}}>
      <div className="container" style={{display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center'}}>
        <h3 style={{marginBottom:'1rem',color:'white'}}>DevsCrew Inc.</h3>
        <p style={{maxWidth:'600px',marginBottom:'2rem',color:'white'}}>Expert NetSuite and SuiteCommerce implementation, customization, and integration services.</p>
        <div style={{display:'flex',gap:'1rem',marginBottom:'2rem'}}>
          <a href="/contact" style={{color:'#f0f8ff',fontWeight:'500'}}>Contact Us</a>
          <a href="/services" style={{color:'#f0f8ff',fontWeight:'500'}}>Services</a>
          <a href="/about" style={{color:'#f0f8ff',fontWeight:'500'}}>About</a>
        </div>
        <p style={{fontSize:'0.875rem',opacity:'0.7',color:'white'}}>© {new Date().getFullYear()} DevsCrew Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
