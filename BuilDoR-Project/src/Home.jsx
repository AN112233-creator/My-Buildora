

import './Home.css' 
import  logo from './assets/Logos/LOGO.png'

function Home (){




  return (
    <>
     <div className="landing-page">
      
      <nav>

        <div className='logo'>
          <img src={logo} alt="LoGo" />
          <p className='logo-text'>Buildora Construction</p>
        </div>

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Clients</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Blog</a></li>

        </ul>

        <div className="icons">
        
              <div className='menu-icon'>

                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                </div> 

                <div className="links">
                  is
                </div>
        </div>

      

      </nav>
     <main>
      <h4 className='kumasi'>Kumasi, ghana</h4>
      <p className='multi'>Mutlipurpose lecture halls, KNUST</p>
      <button className='custom-button'>
        <span className='line left'></span>
        explore 
        <span className='line  right'></span>
        </button>
     </main>

     </div>



    </>
  )



}

export default Home