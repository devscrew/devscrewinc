import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-grid">
          <div className="footer-column footer-about">
            <h3 className="footer-title">DevsCrew Inc.</h3>
            <p className="footer-description">
              Expert NetSuite and SuiteCommerce implementation, customization, and integration services.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <span className="social-icon">f</span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span className="social-icon">t</span>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span className="social-icon">in</span>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <span className="social-icon">i</span>
              </a>
            </div>
          </div>

          <div className="footer-column footer-links">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-list">
              <li><a href="/services/netsuite-implementation" className="footer-link">NetSuite Implementation</a></li>
              <li><a href="/services/suitecommerce-customization" className="footer-link">SuiteCommerce Customization</a></li>
              <li><a href="/services/integration-services" className="footer-link">Integration Services</a></li>
              <li><a href="/services/support-maintenance" className="footer-link">Support & Maintenance</a></li>
            </ul>
          </div>

          <div className="footer-column footer-links">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-list">
              <li><a href="/about" className="footer-link">About Us</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
              {/* <li><a href="/careers" className="footer-link">Careers</a></li> */}
              <li><a href="/blog" className="footer-link">Blog</a></li>
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <h4 className="footer-heading">Contact</h4>
            <address className="footer-address">
              <p className="contact-info">A2 Building</p>
              <p className="contact-info">Silicon Oasis, Dubai, UAE</p>
              <p className="contact-info">info@devscrew.com</p>
              <p className="contact-info">+971 (056) 426-1606</p>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© {new Date().getFullYear()} DevsCrew Inc. All rights reserved.</p>
          <div className="footer-legal">
            <a href="/privacy-policy" className="legal-link">Privacy Policy</a>
            <a href="/terms-of-service" className="legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
