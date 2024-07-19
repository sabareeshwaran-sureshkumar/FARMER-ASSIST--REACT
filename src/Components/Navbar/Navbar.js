import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';

const Navbar = () => {

  const [sticky,setSticky]=useState(false);
  useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY >50 ? setSticky(true): setSticky(false);
      })
  },[])
  
  return (
    <nav className ={ `container ${sticky? 'dark-nav': ''}`} >
      <div className='head'>
      <img src={logo} alt='' className='logo'/>
      <p>விவசாயி</p>
      </div>
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-260} duration={500}>About Us</Link></li>
        <li><Link to='features' smooth={true} offset={-150} duration={500}>Features</Link></li>
        <li><Link to='download' smooth={true} offset={-260} duration={500}><button className='btn'>Get App</button></Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
