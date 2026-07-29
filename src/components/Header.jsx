import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [{path:'/',label:'Home'},{path:'/about',label:'About Us'},{path:'/services',label:'Services'},{path:'/contact',label:'Contact'}];

  return (
    <header style={{position:'fixed',top:0,zIndex:999,height:'64px',background:'#fff'}}>
      <div style={{maxWidth:'1280px',margin:'auto',padding:'5px 20px',display:'flex',alignItems:'center',justifyContent:'space-between'}}></div>
    </header>
  );
};

export default Header;
