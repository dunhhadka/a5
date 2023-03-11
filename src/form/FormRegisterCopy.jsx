import React from "react";
import "./FormRegister.css";
import ButtonRegister from "./ButtonRegister";
export default function FormRegisterCopy() {
  const myProp = "GỬI THÔNG TIN";
  return (
      <form className="formRegister1">
        <div className="form_header">
          <h2 className="Title1">
            THÔNG TIN LIÊN HỆ <br />
          </h2>
          <h2 className="Title1">Điền Đầy Đủ Thông Tin Của Bạn!</h2>
        </div>
        <div className="form_note">
          <h3>
            <span className="color_yellow">ĐĂNG KÝ MIỄN PHÍ</span> NGAY ĐỂ ĐƯỢC
            TƯ VẤN
          </h3>
        </div>
        <div className="input_form">
          <input placeholder="Họ và tên :" />
          <input placeholder="Số điện thoại :" />
          <h3>(Điền đầy đủ thông tin để được tư vấn sớm)</h3>
          <select className="forminput" placeholder="123">
            <option value="" disabled selected class="placeholder_select">
              Lí do mà bạn đang gặp phải
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <h3 className="ladi_headline">
            Điền thông tin xong <br />
            ấn <span>"Gửi Thông Tin"</span> để được Tư Vấn
          </h3>
          <ButtonRegister myProp={myProp} />
        </div>
      </form>
  );
}
