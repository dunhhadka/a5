import React from 'react'
import "./Content.css"
import Item from './Item'
import Item2 from './Item2'
import ButtonRegister from '../form/ButtonRegister'
export default function Content() {
     const array=[
          "linear-gradient(to right,green,rgb(108, 212, 108))",
          "linear-gradient(to right,green,rgb(108, 212, 108))",
          "linear-gradient(to right,green,rgb(108, 212, 108))",
          "linear-gradient(to right,green,rgb(108, 212, 108))",
               "linear-gradient(to right,green,rgb(108, 212, 108))",

]
const arr1=[
     "green",
     "yellow",
     "red",
     "yellow",
     "green"
]
  return (
    <div className='content_box'>
          <h3 className='first_header'>
               GIÚP BẠN GIẢI QUYẾT CÁC VẤN ĐỀ VỀ SINH CON
          </h3>
          <div className='box_content'>
               <h3 className='title_content'>
                    BẠN GẶP VẤN ĐẾ TRONG SINH CON <span style={{color:"white"}}>Mà không biết giải quyết như thế nào ?</span>
               </h3>
               <div className='manybox'>
                    <Item title={"Rối loạn kinh"} color={array[0]} color1={arr1[0]}/>
                    <Item title={"Mất kinh"} color={array[1]} color1={arr1[1]}/>
                    <Item title={"Trứng yếu - Trứng lép"} color={array[2]} color1={arr1[2]}/>
                    <Item title={"Đa nang - u buồng trứng"} color={array[3]} color1={arr1[3]}/>
                 <Item title={"Viêm phụ khoa"} color={array[4]} color1={arr1[4]}/>
               </div>
               <ButtonRegister myProp={"ĐĂNG KÍ NGAY"}/>
          </div>
    </div>
  )
}
