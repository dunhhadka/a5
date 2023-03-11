import React from 'react'
import "./VideoContainer.css"
import V1 from "../images/Video1.mp4"
export default function VideoContainer() {
  return (
     <div className='video_container'>
          <div className='header_video'>
               <h3 className='first_text'><span className='textGT'>GIỚI THIỆU </span>sản phẩm viên uống</h3>
               <h3 className='second_text'>BỔ XƯƠNG KHỚP ABSCDDF</h3>
               
          </div>
          <div className='underlinde'/>
          <div className='container_video'>
               <div className='content_video_container'>
                    <h3>
                         Viên bổ xương khớp ABC có công thức 3 trong 1 bao 
                         gồm thành phần chính là bột dịch chiết xuất từ con ABC
                         sống phổ biến tại vùng bờ biền , được kếp hợp với sụn cá mập 
                         và dầu cá tự nhiên.
                    </h3>
                    <img/>
                    <img/>
               </div>
               <div className='box_video'>
               </div>
          </div>
     </div>
  )
}
