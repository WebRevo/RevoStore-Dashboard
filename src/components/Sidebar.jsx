import React, {useState} from 'react'

import { SidebarData } from '../Data/Data';
import {UilSignOutAlt} from '@iconscout/react-unicons';
import './Sidebar.css';
import Logo from '../imgs/logo.png';


const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  // const [expanded, setExpanded] = useState(true);
   return (
    <div className='Sidebar'>
      <div className='logo'>
        <img src={Logo} alt='log'/>
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      {/* Menu */}

      <div className='menu'>
      {SidebarData.map((item,index)=>{
        return(
          <div className={selected===index?'menuItem active':'menuItem'}
             key={index}
             onClick={()=>setSelected(index)}
             >
             <item.icon/>
                 <span>
                  {item.heading}
                 </span>                
          </div>
        )
      })}
      <div className='menuItem'>
        <UilSignOutAlt/>
      </div>
      </div>
    </div>
  )
}

export default Sidebar