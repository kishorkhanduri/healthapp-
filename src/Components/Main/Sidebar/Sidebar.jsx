import React from 'react'
import "./Sidebar.css";
import {SidebarData} from "./SidebarData";
import {Card} from "./Card"
import { Button } from '@mui/material';


function Sidebar() {
  return (
    <div className='Sidebar'>
      <Button className='r-btn'> Register Patients<span>+</span></Button>
        <ul className='SidebarList'>
        {SidebarData.map((val, key)=>{
        return(
            <li key={key}
            className="row"
            onClick={()=>window.location.pathname=val.link}>
                {" "}
                <div id='icon'>{val.icon}</div>
                <div id='title'>
                    {val.title}
                </div>
            </li>
        )
    })}
    </ul>
    <div>
      <Card/>
    </div>
    
    </div>
  )
}

export default Sidebar