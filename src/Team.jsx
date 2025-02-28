import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
 import './Project.css'
import  logo from './assets/Logos/LOGO.png'

import  facebook from './assets/Logos/facebook-logo.png'
import  twitter from './assets/Logos/x-logo.png'
import  instagram from './assets/Logos/instagram-logo.png'
 import  google from './assets/Logos/google-plus.png' 
 import  socials from './assets/Logos/social.png' 
 import  socialsAlign from './assets/Logos/social-align.png' 
 import  socialsWhite from './assets/Logos/social-mainw.png' 


function Team (){

  const [isVisible, setIsVisible] = useState(false)

  const toggleSocials = () => {
   setIsVisible(!isVisible)
   console.log('links are visible')
  }

  return  (
  
  <>
  
  <h1>oue team page</h1>
  <h2>coming soon</h2>
  
  </>)
}

export default  Team