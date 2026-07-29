const Footer = () => {
  return (
    <footer style={{background:'#333',color:'white',padding:'3rem 0',marginTop:'3rem'}}>
      <div className="container" style={{display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center'}}>
        <h3 style={{marginBottom:'1rem'}}>DevScrew Inc.</h3>
        <p style={{maxWidth:'600px',marginBottom:'2rem'}}>Expert NetSuite and SuiteCommerce implementation, customization, and integration services.</p>
        <div style={{display:'flex',gap:'1rem',marginBottom:'2rem'}}>
          <a href="/contact" style={{color:'white',fontWeight:'500'}}>Contact Us</a>
          <a href="/services" style={{color:'white',fontWeight:'500'}}>Services</a>
          <a href="/about" style={{color:'white',fontWeight:'500'}}>About</a>
        </div>
        <p style={{fontSize:'0.875rem',opacity:'0.7'}}>© {new Date().getFullYear()} DevsCrew Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
