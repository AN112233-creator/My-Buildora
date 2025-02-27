import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
 import './Project.css'
import  logo from './assets/Logos/LOGO.png'

import  facebook from './assets/Logos/facebook-logo.png'
import  twitter from './assets/Logos/x-logo.png'
import  instagram from './assets/Logos/instagram-logo.png'
 import  google from './assets/Logos/google-plus.png' 


function Blog (){

  
  const year = new Date().getFullYear()
  
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)


  }

  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => {
    setIsHover(true);  
  };
  const handleMouseLeave = () => {
    setIsHover(false);  
  };


  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 0) {
        navbar.classList.add('black-nav-client');
      }  else {
        navbar.classList.remove('black-nav-client');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
  
  <>

 <nav className={`nav ${isOpen ? "nav-active-client" : ""}`} id='navbar'>
     
               <a href="about.jsx" className='logo-link'>
             <div className='logo' >
               <img src={logo} alt="LoGo" />
               <p className={`logo-text ${isOpen ? "active" : ""}`}>Buildora Construction</p>
             </div>
             </a>
             <ul className={`unordered-list ${isOpen ? "open" : ""}`}>
               <li ><Link to = "/" className='nav-items'>Home</Link></li>
               <li> <Link to = "/about"  className= 'nav-items'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>About Us</Link></li>
                <div  className= {`team ${isHover ? "OurTeam" : ""}`} onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>Our Team</div>
               <li > <Link to = "/projects" className='nav-items'>Projects</Link></li>
               <li ><Link to = "/services" className='nav-items'>Services</Link></li>
               <li ><Link to = "/clients" className=' nav-items'>Clients</Link></li>
               <li ><Link to = "/contacts" className='nav-items'>Contact us</Link></li>
               <li><Link to = "/blogs" className='active-client nav-items'>Blog</Link></li>
             </ul>
     
             <div className="icons">
             
                   <div className= {`menu-icon-client ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                     <div className="bar1"></div>
                     <div className="bar2"></div>
                     <div className="bar3"></div>
                     </div> 
     
                     <div className={`links-client ${isOpen ? "active" : ""}`}>
                       is
                     </div>
             </div>
           
           </nav>
  
    <div className="container">  
{/*   <div className="background-text">
            <span>P</span>
            <span>E</span>
            <span>O</span>
            <span>P</span>
            <span>L</span>
            <span>E</span>
        </div> */}  
            <svg class="background-text">
            <text  x="50%" y="50%" text-anchor="middle">BLOG</text>
        </svg> 
        <p className='Ambitious'>NEWSLETTER</p>
        <h2 className='work-with'>Here we share our ideas.</h2>
       {/*  <p className="subheading">AMBITIOUS CLIENTS</p>
        <h2 className="main-text">We have worked with great people.</h2> */}
    </div>  


  </>
  
)
}

export default Blog;