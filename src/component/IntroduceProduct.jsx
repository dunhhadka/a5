import React from "react";
import P1 from "../images/content_imge.jpeg"
import "./IntroduceProduct.css";
export default function IntroduceProduct() {
  return (
    <div className="IntroContainer">
      <div className="IntroBoxImage">
        <img className="IntroImage" src={P1}/>
      </div>
      <h3 className="TitleIntro">Giảm đau, chống viêm tự nhiên</h3>
      <div className="IntroContent">
        <h4 className="IntroText">
          Thành phần ABC có chứa các hoạt chất có tác dụng giảm đau, chống viêm
          nhanh chóng mà không để lại tác dụng phụ như các thuốc tân dược khác.
          Nhờ tác dụng chống viêm tự nhiên. Còn có hiệu quả với hen là bệnh viêm
          mạn tính ở đường hô hấp
        </h4>
      </div>
    </div>
  );
}
