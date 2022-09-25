import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <div className='all'>
    <footer>
    <img src='footer-logo.png' alt='foot-icon' className='wer'/>
    <div className='footer-text'>
    <div class="col">
    <p className='foot-head'>Quick Links</p>
      <Router>
      <Link to='/contact' className='foot-link'>Contact Us</Link>
      <Link to='/about' className='foot-link'>About Us</Link>
      <Link to='/testimonial' className='foot-link'>Testimonial</Link>
      <Link to='/gallery' className='foot-link'>Gallery</Link>
      <Link to='/sitemap' className='foot-link'>Site Map</Link>
      </Router>
    </div>
    <div class="col">
      <p className='foot-head'>Flats in Mumbai</p>
      <p>1 BHK Andheri West</p>
      <p>2 BHK Andheri West</p>
      <p>3 BHK Andheri West</p>
      <p>1 BHK Goregaon East</p>
      <p>2 BHK Goregaon East</p>
    </div>
    <div class="col">
      <p className='foot-head'>Projects in Mumbai</p>
      <p>Ongoing</p>
      <p>Upcoming</p>
      <p>Completed</p>
      <p>Hetali Blessings</p>
      <p>Hetali Anuchaya</p>
    </div>
    </div>
  </footer>
  <div className='seperat'>
      <div className='left'>
        
      </div>
      <div className='middle'>
      <img src='logo1.png' alt='logoi' style={{backgroundColor:"#004A74"}}/>
      </div>
      <div className='right'>
      </div>
      </div>
  <p className='copyright'>Copyright {year} Hetali Enterprise - All Rights reserved</p>

    </div>
  )
}

export default Footer;
