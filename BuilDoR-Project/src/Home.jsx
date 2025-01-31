import { useEffect, useState } from 'react'
import './Home.css' 
import  logo from './assets/Logos/LOGO.png'

function Home (){

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




  return (
    <>
     <div className="landing-page">
      
      <nav className={isOpen ? "nav-active" : ""} id='navbar'>

        <div className='logo' >
          <img src={logo} alt="LoGo" />
          <p className={`logo-text ${isOpen ? "active" : ""}`}>Buildora Construction</p>
        </div>

        <ul className={isOpen ? "open" : ""}>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Clients</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Blog</a></li>

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
     <main>
      <h4 className='kumasi'>Kumasi, ghana</h4>
      <p className='multi'>Mutlipurpose lecture halls, KNUST</p>
      <button  className= {`custom-button ${isOpen ? "no-display" : ""}`}>
        <span className='line left'></span>
        explore 
        <span className='line  right'></span>
        </button>
     </main>

     </div>


     <div></div>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui, odio dignissimos, ea sint unde necessitatibus blanditiis veniam molestiae itaque inventore aut, velit dicta explicabo. Laboriosam quas vitae ut hic.
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui, odio dignissimos, ea sint unde necessitatibus blanditiis veniam molestiae itaque inventore aut, velit dicta explicabo. Laboriosam quas vitae ut hic.
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui, odio dignissimos, ea sint unde necessitatibus blanditiis veniam molestiae itaque inventore aut, velit dicta explicabo. Laboriosam quas vitae ut hic.
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui, odio dignissimos, ea sint unde necessitatibus blanditiis veniam molestiae itaque inventore aut, velit dicta explicabo. Laboriosam quas vitae ut hic.
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui, odio dignissimos, ea sint unde necessitatibus blanditiis veniam molestiae itaque inventore aut, velit dicta explicabo. Laboriosam quas vitae ut hic.



    </>
  )



}

export default Home