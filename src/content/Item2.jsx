import React from "react";
import "./Content.css";
import P2 from "../images/content1.jpg";

export default function Item2() {
  return (
    <div className="box_item">
      <div className="box_text">
        <h3>Vợ - Chồng Mất Kết Nối</h3>
        <h4>
          Cuộc sống hôn nhân đang trên bờ vực tan vỡ , hai vợ chồng khó giao
          tiếp
        </h4>
      </div>
      <img src={P2} />
    </div>
  );
}
