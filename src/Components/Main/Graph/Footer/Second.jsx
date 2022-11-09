import React from 'react'
import './Second.css'
import { SecondData } from './SecondData';

function Second() {
  return (
    <div className='Second-chart'>
        <ul className='Second-Data'>
        {SecondData.map((val, key)=>{
        return(
            <li key={key}
            className="row"
            onClick={()=>window.location.pathname=val.link}>
                {" "}
                <div id='icon'>{val.icon}</div>
                <div id='title'>
                    {val.title}
                </div>
                <div id='text'>
                    {val.text}
                </div>
            </li>
        )
    })}
    </ul>
   
    </div>
  )
}

export default Second