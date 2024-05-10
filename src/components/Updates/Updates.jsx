import React from 'react'
import './Updates.css';
import { UpdatesData } from '../../Data/Data';
const Updates = () => {
  return (
    <div className='Updates'>
    {UpdatesData.map((update)=>{
      return (
        <div className='update'>
          <img src={update.img} alt='img1'/>
          <div className='note'>
          <div style={{marginBottom: '0.5'}}>
            <span>
              {update.name}
            </span>
            <span>
              {update.note}
            </span>
            </div>
          </div>
          <div>
            <span>{update.time}</span>
          </div>
        
        </div>
      )
    })}

    </div>
  )
}

export default Updates