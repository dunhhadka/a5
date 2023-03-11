import React from 'react'
import "./Footer.css"
import P1 from "../images/address.png"
import P2 from "../images/hotline.png"
import P3 from "../images/email.png"

import ChildComponent from './ChildComponent'
export default function Footer() {
  return (
    <div className='FooterContainer'>
      <ChildComponent image={P1} title={"Address : Address number ,Street ,District ,City ,District"}/>
      <ChildComponent image={P2} title={"Hotline : 0836 023 098"}/>
      <ChildComponent  image={P3} title={"Email : thuocdieukinhgiatruyencacong@gmail.com"}/>
    </div>
  )
}
