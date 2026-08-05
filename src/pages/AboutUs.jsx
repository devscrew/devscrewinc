import './AboutUs.scss';

const AboutUs = () => {
  return (
    <div className="container">
      {/* Hero Section with Image */}
      <section className="hero-section">
        <div className="grid hero-grid">
          <div className="hero-content-wrapper">
            <h1 className="section-title">About DevsCrew Inc.</h1>
            <p className="hero-description mb-4">DevsCrew Inc. is a specialized consulting firm dedicated to helping businesses leverage the power of NetSuite ERP and SuiteCommerce platforms.</p>
            <p className="mb-4">With deep expertise in NetSuite implementation, customization, and integration services, we help organizations streamline operations, enhance customer experiences, and drive business growth through technology.</p>
            <p>Our team of certified NetSuite professionals brings years of experience across various industries to ensure your platform delivers maximum value.</p>
          </div>
          <div className="hero-image-wrapper">
            <img src="/img/home_hero_image.png" alt="NetSuite Consulting Team" />
          </div>
        </div>
      </section>

      <section className="section about-section">
        <div className="text-center mb-8">
          <h2 className="section-title">Our Expertise</h2>
          <p>Specializing in NetSuite ERP and SuiteCommerce solutions across multiple industries.</p>
        </div>

        <div className="grid expertise-grid">
          <div className="expertise-card">
            <h3>NetSuite Implementation</h3>
            <p>End-to-end implementation of NetSuite ERP solutions tailored to your business needs.</p>
          </div>

          <div className="expertise-card">
            <h3>SuiteCommerce Customization</h3>
            <p>Customized e-commerce storefronts that drive customer engagement and conversions.</p>
          </div>

          <div className="expertise-card">
            <h3>Integration Services</h3>
            <p>Seamless integration between NetSuite, SuiteCommerce, and third-party applications.</p>
          </div>

          <div className="expertise-card">
            <h3>Consultation & Strategy</h3>
            <p>Strategic consulting to maximize your NetSuite investment and align with business goals.</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="mb-4">We combine technical expertise with business acumen to deliver solutions that drive real results.</p>

          <div className="grid reasons-grid">
            <div className="reason-card">
              <p className="reason-icon">🏆</p>
              <h3>Industry Recognition</h3>
              <p>Certified NetSuite partners with proven track record</p>
            </div>

            <div className="reason-card">
              <p className="reason-icon">📈</p>
              <h3>Measurable Results</h3>
              <p>Delivered solutions that drive business impact</p>
            </div>

            <div className="reason-card">
              <p className="reason-icon">🤝</p>
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
