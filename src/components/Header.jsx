import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

// Importing JS config
import menuConfig from '../config/menuConfig.js';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openLevels, setOpenLevels] = useState({
    level1: null,
    level2: null,
    level3: null
  });
  const [currentPath, setCurrentPath] = useState('');
  const location = useLocation();

  // Close all menus when navigating
  useEffect(() => {
    setCurrentPath(location.pathname);
    setIsOpen(false);
    setOpenLevels({
      level1: null,
      level2: null,
      level3: null
    });
  }, [location.pathname]);

  // Close all menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const header = document.querySelector('.header');
      if (header && !header.contains(event.target)) {
        setIsOpen(false);
        setOpenLevels({
          level1: null,
          level2: null,
          level3: null
        });
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle menu hover for desktop - only for top-level items with children
  const handleMouseEnter = (path, level) => {
    // For desktop, we want to close any previously opened menus at this level and below
    setOpenLevels(prev => {
      let newLevels = { ...prev };

      if (level === 1) {
        // When hovering over top-level item, close everything below it
        newLevels.level1 = path;
        newLevels.level2 = null;
        newLevels.level3 = null;
      } else if (level === 2) {
        // When hovering over second-level item, close third-level items but keep parent open
        if (prev.level1 !== null) { // Only proceed if parent is open
          newLevels.level2 = path;
          newLevels.level3 = null;
        }
      } else if (level === 3) {
        // When hovering over third-level item, keep parent menu items open
        if (prev.level1 !== null && prev.level2 !== null) { // Only proceed if parents are open
          newLevels.level3 = path;
        }
      }

      return newLevels;
    });
  };

  // Handle menu hover leave for desktop - close submenu when mouse leaves dropdown
  const handleMouseLeave = (path, level) => {
    // For desktop, we want to close the submenu when leaving it
    setOpenLevels(prev => {
      let newLevels = { ...prev };

      // Only close if we're leaving a dropdown that's currently open
      if (level === 1 && prev.level1 === path) {
        newLevels.level1 = null;
        newLevels.level2 = null;
        newLevels.level3 = null;
      } else if (level === 2 && prev.level2 === path) {
        newLevels.level2 = null;
        newLevels.level3 = null;
      } else if (level === 3 && prev.level3 === path) {
        newLevels.level3 = null;
      }

      return newLevels;
    });
  };

  // Mobile toggle functionality
  const toggleMenu = (path) => {
    setOpenLevels(prev => {
      if (prev.level1 === path) {
        // Close this menu and all its descendants
        return {
          level1: null,
          level2: null,
          level3: null
        };
      } else {
        // Open this menu and close others
        return {
          level1: path,
          level2: null,
          level3: null
        };
      }
    });
  };

  // Function to check if a path is currently open at a specific level
  const isPathOpen = (path, level) => {
    if (level === 1) return openLevels.level1 === path;
    if (level === 2) return openLevels.level2 === path;
    if (level === 3) return openLevels.level3 === path;
    return false;
  };

  // Function to render nested menu items recursively
  const renderMenuItems = (items, level = 0) => {
    return items.map((item) => (
      <div key={item.path} className="nav-item">
        {item.submenu ? (
          <div
            className="dropdown-container"
            onMouseLeave={() => handleMouseLeave(item.path, level + 1)}
          >
            {/* For top-level items with children, use hover for desktop */}
            <button
              className={`nav-link dropdown-toggle ${isPathOpen(item.path, level + 1) ? 'active' : ''}`}
              onMouseEnter={(e) => {
                // Only apply hover behavior on desktop (min-width: 769px)
                const isDesktop = window.innerWidth >= 769;
                if (isDesktop) {
                  handleMouseEnter(item.path, level + 1);
                }
              }}
              onClick={(e) => {
                // Mobile click behavior
                const isDesktop = window.innerWidth >= 769;
                if (!isDesktop) {
                  e.preventDefault();
                  toggleMenu(item.path);
                }
              }}
              aria-expanded={isPathOpen(item.path, level + 1)}
              aria-controls={`dropdown-menu-${item.path}`}
            >
              {item.label}
            </button>
            <div
              id={`dropdown-menu-${item.path}`}
              className={`dropdown-menu ${isPathOpen(item.path, level + 1) ? 'open' : ''}`}
            >
              {renderMenuItems(item.submenu, level + 1)}
            </div>
          </div>
        ) : (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${currentPath === item.path ? 'active' : ''}`}
            onClick={() => {
              setIsOpen(false);
              setOpenLevels({
                level1: null,
                level2: null,
                level3: null
              });
            }}
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
          aria-expanded={isOpen}
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