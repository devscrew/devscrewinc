import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{path:'/',label:'Home'},{path:'/about',label:'About Us'},{path:'/services',label:'Services'},{path:'/contact',label:'Contact'}];

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          {/* Logo/Icon placeholder - you can replace with actual icon */}
          <div className="logo-icon">
            <img src="/img/logo.png" alt="DevsCrew Inc. Logo" />
          </div>
          <Link to="/" className="logo-text">DevsCrew Inc.</Link>
        </div>

        <nav className="header-nav">
          <div className="nav-links">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
