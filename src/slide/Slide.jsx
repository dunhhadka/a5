import React from "react";
import P1 from "../images/item1.jpg";
import P2 from "../images/item2.jpg";
import P3 from "../images/item3.jpg";
import "./Slide.css";
export default function Slide() {
  return (
    <div className="slide_box_address">
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={P1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={P2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={P3} class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}
