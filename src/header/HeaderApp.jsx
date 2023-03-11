import React from "react";
import "./HeaderStyle.css";
import P1 from "../images/imageheader.jpg";
import L1 from "../images/logo.jpg";
import Z1 from "../images/zalo.png";
import FormRegister from "../form/FormRegister";
import ButtonRegister from "../form/ButtonRegister";
import ButtonHeader from "./ButtonHeader";
export default function HeaderApp() {
  return (
    <div>
      <div className="header_box">
        {/* <img src={L1} className="logo"/> */}
        {/* <ButtonHeader/> */}
      </div>
      <div className="body">
        <div className="title">
          <div className="text3">
            ÔNG MỤ MÁT TAY GIÚP HÀNG 1000 <br /> CẶP VỢ CHỒNG ĐÓN CON YÊU
          </div>
        </div>
        <div className="iamgeheader">
          <div className="address_form">
            <div>
              <img src={P1} alt="" srcset="" className="iamge_header" />
              <h4>
                Hỗ trợ canh ngày rụng trứng - có thai dễ dàng chỉ với 30 ngày
              </h4>
              <h2>
                BÍ QUYẾT CÓ THAI CHO CẶP VỢ CHỒNG CHỈ TRONG 30 NGÀY <br />
              </h2>
              <div className="btn_address">
                <ButtonRegister myProp={"ĐĂNG KÍ CANH TRỨNG"} />
              </div>
              <div className="note_register">
                <h4 className="phone">Bác Sĩ Đông Y hỗ trợ 1:1 qua <span className="zalo">Zalo 0836023098 </span><br/> hoặc gửi thông tin</h4>
              </div>
            </div>
            <FormRegister />
          </div>
        </div>
      </div>
    </div>
  );
}
