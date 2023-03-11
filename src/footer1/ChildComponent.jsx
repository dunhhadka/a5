import React from 'react'
import "./Footer.css"
export default function ChildComponent(props) {
  return (
    <div className='Footer_address'>
     <img className='icon_footer' src={props.image}/>
     <div className='box_namefooter'>
          <h4 className='name_footer'>{props.title}</h4>
     </div>
    </div>
  )
}
