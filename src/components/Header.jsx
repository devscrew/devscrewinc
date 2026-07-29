import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{path:'/',label:'Home'},{path:'/about',label:'About Us'},{path:'/services',label:'Services'},{path:'/contact',label:'Contact'}];

  return (
    <header style={{position:'fixed',top:0,zIndex:999,height:'64px',background:'#fff',boxShadow:'0 2px 10px rgba(0,0,0,0.1)'}}>
      <div style={{maxWidth:'1280px',margin:'auto',padding:'5px 20px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Link to="/" style={{fontWeight:'700',fontSize:'1.5rem',color:'#1a5fb4'}}>DevsCrew Inc.</Link>
        <nav style={{display:'flex',alignItems:'center'}}>
          <div style={{display:'none',marginRight:'2rem'}}>
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} style={{margin:'0 1rem',fontWeight:'500'}}>{item.label}</Link>
            ))}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{display:'none',background:'none',border:'none',cursor:'pointer',fontSize:'1.5rem'}}
          >
            ☰
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
