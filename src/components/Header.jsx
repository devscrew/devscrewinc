import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
// Importing JS config
import menuConfig from '../config/menuConfig.js';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});

  // Function to handle dropdown toggle
  const toggleDropdown = (path) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  // Function to render nested menu items recursively
  const renderMenuItems = (items, level = 0) => {
    return items.map((item) => (
      <div key={item.path} className="nav-item">
        {item.submenu ? (
          <div className="dropdown-container">
            <button
              className="nav-link dropdown-toggle"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown(item.path);
              }}
            >
              {item.label}
            </button>
            <div className={`dropdown-menu ${openDropdowns[item.path] ? 'open' : ''}`}>
              {renderMenuItems(item.submenu, level + 1)}
            </div>
          </div>
        ) : (
          <Link
            key={item.path}
            to={item.path}
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        )}
      </div>
    ));
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <div className="logo-icon">
            <img src="/img/logo.png" alt="DevsCrew Inc. Logo" />
          </div>
          <Link to="/" className="logo-text">DevsCrew Inc.</Link>
        </div>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        </button>

        <nav className={`header-nav ${isOpen ? 'open' : ''}`}>
          <div className="nav-links">
            {renderMenuItems(menuConfig.menu)}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
