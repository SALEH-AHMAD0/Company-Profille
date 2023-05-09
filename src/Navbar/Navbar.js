import React from 'react';
import "./Navbar.css";
const Navbar = () => {
    return (
     
           <div className='Total-nav'>
            <ul className='nav'>
           <a className='nav' href="default.asp"> <span style={{color:"white"}}>HOME</span></a>
           <a className='nav' href="news.asp"> <span style={{color:"white"}}>VIDIO</span></a>
           <a className='nav' href="contact.asp">  <span style={{color:"white"}}>CNN BLOG</span></a>
           <a className='nav' href="about.asp"><span style={{color:"white"}}>LIVE BRODCAST</span></a>
           <a className='nav' href="contact.asp"><span style={{color:"white"}}>BIBLE LESSON</span></a>
           <a className='nav' href="about.asp"><span style={{color:"white"}}>ABOUT US</span></a>
           <button className='button'>JOIN OUR NEWS FILTER</button>
           </ul>
        </div>
    
    );
};

export default Navbar;