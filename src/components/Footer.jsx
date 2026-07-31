import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <h3 className="footer-title">DevsCrew Inc.</h3>
        <p className="footer-description">Expert NetSuite and SuiteCommerce implementation, customization, and integration services.</p>
        <div className="footer-links">
          <a href="/contact" className="footer-link">Contact Us</a>
          <a href="/services" className="footer-link">Services</a>
          <a href="/about" className="footer-link">About</a>
        </div>
        <p className="footer-copyright">© {new Date().getFullYear()} DevsCrew Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
