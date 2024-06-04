import React, { useEffect, useState,useRef } from 'react';
import styled from 'styled-components';
import HamburgerMenu from './HamburgerMenu'

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = navbarRef.current;
      if (navbar) {
        const sticky = navbar.offsetTop;
        if (window.pageYOffset > 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header  ref={navbarRef} className={isSticky ? "sticky pt-4" : "pt-4"} >
    <div className='container'>
      <nav  className=" navbar navbar-expand-lg" >
      <button className='btn main-colorbg w-100 mob-btn'>
Let's contact
</button>
  <div className="container-fluid px-0 margin-mob">
    <a className="navbar-brand" href="#">
     <img src='./assets/img/pnp-logo.png' />
    </a>

    <div className="nav-item d-flex align-items-center">
    <button className='btn main-colorbg h-25 me-4 desktop-btn'>
Let's contact
</button>

      <HamburgerMenu/>

        </div>
   {/* <div className="collapse navbar-collapse justify-content-evenly" id="navbarSupportedContent">
       <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Our Works
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">      
         Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">      
          Buy Own Domain

          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">      
         
Career

          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">      
         
Hire Developer
          </a>
        </li>
       
        
      </ul> 
      
    
    </div>*/}
  </div>
</nav>

    </div>
    </header>
  )
}

export default Header
