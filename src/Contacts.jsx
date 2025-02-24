
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

 import './contacts.css'
import  logo from './assets/Logos/LOGO.png'

import  facebook from './assets/Logos/facebook-logo.png'
import  twitter from './assets/Logos/x-logo.png'
import  instagram from './assets/Logos/instagram-logo.png'
 import  google from './assets/Logos/google-plus.png' 


function Contact (){

  
    
    const year = new Date().getFullYear()
   
  
            const [isOpen, setIsOpen] = useState(false)
  
            const toggleMenu = () => {
              setIsOpen(!isOpen)
  
  
            }
  
            useEffect(() => {
              const handleScroll = () => {
                const navbar = document.getElementById('navbar');
                if (window.scrollY > 0) {
                  navbar.classList.add('black-nav');
                }  else {
                  navbar.classList.remove('black-nav');
                }
              };
        
              window.addEventListener('scroll', handleScroll);
        
              return () => {
                window.removeEventListener('scroll', handleScroll);
              };
            }, []);
  
            const [isHover, setIsHover] = useState(false)
  
            const handleMouseEnter = () => {
              setIsHover(true);  
            };
            const handleMouseLeave = () => {
              setIsHover(false);  
            };
  
  



  return (
  
  
  <>

<div className="Contacts-Landing-page">
         <nav className={isOpen ? "nav-active" : ""} id='navbar'>
   
             <a href="Home" className='logo-link'>
           <div className='logo' >
             <img src={logo} alt="LoGo" />
             <p className={`logo-text ${isOpen ? "active" : ""}`}>Buildora Construction</p>
           </div>
           </a>
           <ul className={isOpen ? "open" : ""}>
             <li><Link to = "/" > Home</Link></li>
             <li> <Link to = "/about"  className= {`${isHover ? "" : ""}`} 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>About Us</Link></li>
              <div  className= {`team ${isHover ? "OurTeam" : ""}`} onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>Our Team</div>
             <li><Link to = "/projects">Projects</Link></li>
             <li><Link to = "/services">Services</Link></li>
             <li><Link to = "/clients">Clients</Link></li>
             <li><Link to = "/contacts" className='active'>Contact us</Link></li>
             <li><Link to = "/blogs">Blog</Link></li>
        
           </ul>
   
           <div className="icons">
           
                 <div className= {`menu-icon ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                   <div className="bar1"></div>
                   <div className="bar2"></div>
                   <div className="bar3"></div>
                   </div> 
   
                   <div className={`links ${isOpen ? "active" : ""}`}>
                     is
                   </div>
           </div>
   
         </nav>
        
       
         <main className='contact-main'>
         <h4 className='contact-us'>contact us</h4>
         <p className='relation'>Let's establish relations : )</p>
        </main>
        </div> 

  <h1>Contact Page</h1>
  <h2>Coming Soon!</h2>

  </>
  

)
}

export default Contact