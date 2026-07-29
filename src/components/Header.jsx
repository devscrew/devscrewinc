import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{path:'/',label:'Home'},{path:'/about',label:'About Us'},{path:'/services',label:'Services'},{path:'/contact',label:'Contact'}];

  return (
    <header className="header" style={{position:'fixed',top:0,left:0,right:0,zIndex:999,height:'64px',display:'flex',alignItems:'center',padding:'0 2rem',backgroundColor:'white',boxShadow:'0 2px 10px rgba(0,0,0,0.1)'}}>
      <div style={{maxWidth:'1280px',width:'100%',margin:'auto',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{display:'flex',alignItems:'center',gap:'1rem'}}>
          {/* Logo/Icon placeholder - you can replace with actual icon */}
          <div style={{width:'40px',height:'40px',display:'flex',alignItems:'center',justifyContent:'center',color:'white',fontWeight:'bold',fontSize:'1.2rem'}}><img src="/img/logo.png"/></div>
          <Link to="/" style={{fontWeight:'700',fontSize:'1.25rem',color:'#ac2a29',textDecoration:'none'}}>DevsCrew Inc.</Link>
        </div>

        <nav style={{display:'flex',alignItems:'center'}}>
          <div style={{display:'flex',alignItems:'center',gap:'1.5rem'}}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{fontWeight:'500',color:'#333',textDecoration:'none',padding:'0.5rem 0.75rem',borderRadius:'4px',transition:'all 0.3s ease'}}
                onMouseEnter={(e) => {
                  e.target.style.color = '#ac2a29';
                  e.target.style.backgroundColor = '#ffebee';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#333';
                  e.target.style.backgroundColor = 'transparent';
                }}
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
