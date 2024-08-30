import React, { useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'; ////////////////////// وبعدها هي
import './navbar.css'
import logo from "../Assests/si.png"
import underlined from '../Assests/nav_underline.svg'
import menu_open from '../Assests/menu_open.svg'
import menu_close from '../Assests/menu_close.svg'
const Navbar = () => {

const [menu,setmenu]=useState("About Me");

const menuRef=useRef();
const openmenu = () => {
  menuRef.current.style.right ="0";
}

const closemenu = () => {
  menuRef.current.style.right ="-350px";
}

  return (
    <div className='Navbar'>
      
      <img src={logo}/>
      <img onClick={openmenu} src={menu_open} className='nav-mob-open' style={{height:"30px",width:"35px"}}/>
      <ul ref={menuRef} className='nav-menu'>
      <img onClick={closemenu} src={menu_close} className='nav-mob-close' style={{height:"20px",width:"10px"}} />
      
      {/* //////////////////// لازم ننزل هي npm install react-anchor-link-smooth-scroll ////////////////////// */}
      
      <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setmenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={underlined} style={{width:"45px",height:"20px",zIndex:"-1"}}/>:<></>}</li>
      <li><AnchorLink className='anchor-link' href='#about'><p onClick={()=>setmenu("About Me")}>About Me</p></AnchorLink>{menu==="About Me"?<img src={underlined} style={{width:"55px",height:"20px",zIndex:"-1"}} />:<></>}</li>
      <li><AnchorLink className='anchor-link' href='#services'><p onClick={()=>setmenu("Services")}>Services</p></AnchorLink>{menu==="Services"?<img src={underlined} style={{width:"55px",height:"20px",zIndex:"-1"}} />:<></>}</li>
      <li><AnchorLink className='anchor-link' href='#mywork'><p onClick={()=>setmenu("Portfolio")}>Portfolio</p></AnchorLink>{menu==="Portfolio"?<img src={underlined} style={{width:"55px",height:"20px",zIndex:"-1"}} />:<></>}</li>
      <li><AnchorLink className='anchor-link' href='#contact'><p onClick={()=>setmenu("Contact Me")}>Contact Me</p></AnchorLink>{menu==="Contact Me"?<img src={underlined} style={{width:"65px",height:"20px",zIndex:"-1"}} />:<></>}</li>
      </ul>
      <div className='nav-connect'><AnchorLink className='anchor-link' href='#contact'><button>Connect with me</button></AnchorLink></div>
    </div>
  )
}

export default Navbar