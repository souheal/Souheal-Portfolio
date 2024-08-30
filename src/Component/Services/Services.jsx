import React from 'react'
import './Services.css'
import Services_data from '../../Assests/Service_data'
import MyPhoto from "../../Assests/Arrow.png"
import MyPhoto2 from "../../Assests/theme_pattern.svg"

const Services = () => {
  return (
    <div id='services' className='services'>
    <div className='services-title'>
        <h1>My Services </h1>
        <img src={MyPhoto2} alt='' />
    </div>
    <div className='services-container'>
    {Services_data.map((service,index)=>{
        return <div key={index} className='services-format'>
        <h3>{service.S_no}</h3>
        <h2>{service.S_name}</h2>
        <p>{service.S_desc}</p>
        <div className='services-readmore'>
            <p>Read More</p>
            <img src={MyPhoto} alt='Photo' />
        </div>
        </div>

    })}
    </div>
    </div>
  )
}

export default Services