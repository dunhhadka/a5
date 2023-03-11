import React from 'react'
import "./FeedBack.css"
import V1 from "../images/video.mp4"
export default function FeedBack() {
  return (
    <div className='feedBackContainer'>
      <video src={V1} className='videoFeedBack' controls/>
    </div>
  )
}
