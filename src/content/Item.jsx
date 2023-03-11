import React from "react";
import "./Content.css";
import P2 from "../images/content1.jpg";
import C1 from "../images/check.png"
export default function Item(props) {
  return (
    <div className="item_box" >
      <div className="content_item">
          <img src={C1} className="iconcheck"/>
          <div className="line_dung"/>
          {props.title}
      </div>
    </div>
  );
}
