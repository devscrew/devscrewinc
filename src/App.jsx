import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import NetSuite from './pages/NetSuite';
import SuiteCommerce from './pages/SuiteCommerce';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import FirstBlogPost from './pages/blog/FirstBlogPost';
import SecondBlogPost from './pages/blog/SecondBlogPost';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/netsuite" element={<NetSuite />} />
            <Route path="/suitecommerce" element={<SuiteCommerce />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/first-blog-post" element={<FirstBlogPost />} />
            <Route path="/blog/second-blog-post" element={<SecondBlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
