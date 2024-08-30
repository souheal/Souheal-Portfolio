import React from 'react'
import './MyWork.css'
import photo from '../../Assests/theme_pattern.svg'
import mywork_data from '../../Assests/mywork_data'
import arrow_icon from '../../Assests/arrow_icon.svg'
const MyWork = () => {
  return (
    <div id='mywork' className='mywork'>
    <div className='mywork-title'>
    <h1> My latest Work</h1>
    <img  src={photo} alt='Photo' />
    </div>
    <div className='mywork-container'>
        {mywork_data.map((work,index)=>{
           return <img key={index} src={work.w_img} />
        })}
    </div>
    <div className='mywork-showmore'>
        <p>Show More</p>
        <img src={arrow_icon} alt='photo'/>
    </div>
</div>
  )
}

export default MyWork