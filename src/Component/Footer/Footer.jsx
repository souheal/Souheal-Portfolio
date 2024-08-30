import React from 'react'
import './Footer.css'
import footer_icon from '../../Assests/si.png'
import user_icon from '../../Assests/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-top'>
        <div className='footer-top-left'>
            <img src={footer_icon}/>
            <p>I  am a Frontend developer from Damascus, With 3 Years of experiance in multiple companies,Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor aliquam accusamus nostrum, voluptas esse minus libero officiis adipisci omnis nobis amet autem! Temporibus omnis harum consequatur rerum veniam laborum!</p>
        </div>
        <div className='footer-top-right'>
            <div className='footer-email-input'>
                <img src={user_icon} />
                <input type='email' placeholder='Enter your email' />
            </div>
            <div className='footer-subscribe'>Subscribe</div>
        </div>
    </div>
    <hr />
    <div className='footer-bottom'>
        <p className='footer-bottom-left'>@ 2024 Souheal Mheash.All rights</p>
        <div className='footer-bottom-right'>
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p> Connect with me</p>
        </div>
    </div>
    </div>
  )
}

export default Footer