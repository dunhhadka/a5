import React from "react";
import "./UseProduct.css";
import P1 from "../images/P1.png"
export default function UseProduct() {
  return (
    <div className="UseProductContainer">
      <img className="iamge_product"  src={P1}/>
      <h3 className="UseText">Đối tượng sử dụng</h3>
      <h4 className="UsePaga">
        Những người viêm xương khớp mãn tính ,thoái hóa khớp , bệnh nhân đau
        nhức xương khớp , tê bì tay chân , đau mỏi vai gáy. Người bị bệnh ,
        NGười cao tuổi . Những người làm việc nặng , luyện tập các môn thể thao
        nguy hiểm
      </h4>
      <img className="iamge_product" src={P1}/>
      <h3 className="UseText">Hướng dẫn cách sử dụng</h3>
      <h4 className="UsePaga">
        Người trưởng thành: uống từ 1 đến 3 viên/ngày sau bữa ăn <br />
        Lưu ý: Không dùng cho trẻ em, phụ nữ có thai và cho con bú , đang phẩu
        thuật hoặc tai nạn nghiêm trọng mà không có sự hướng dẫn của thầu thuốc
        . Xin ý kiên của thầy thuốc nếu triệu chứng không được cải thiện
      </h4>
    </div>
  );
}
