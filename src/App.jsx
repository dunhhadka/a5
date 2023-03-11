import "./App.css";
import FeedBack from "./component/FeedBack";
import IntroduceProduct from "./component/IntroduceProduct";
import UseProduct from "./component/UseProduct";
import Content from "./content/Content";
import Footer from "./footer1/Footer";
import FormRegister from "./form/FormRegister";
import FormRegisterCopy from "./form/FormRegisterCopy";
import HeaderApp from "./header/HeaderApp";
import ContentSlide from "./slide/ContentSlide";
import Slide from "./slide/Slide";
import Animation from "./svg/AnimationTest";
import Index from "./svg/Index";
import VideoContainer from "./video/VideoContainer";
function App() {
  return (
    <div className="App">
      <div className="form_and_header">
        <HeaderApp />
      </div>
      <Animation/>
      <div className="box_svg">
        <Index/>
        <Index/>
        <Index/>
      </div>
      <FormRegisterCopy/>
      <Content />
      <div className="line" />
      <div className="container_slide">
        <div className="silde_box">
          <Slide />
          <div className="content">
            <ContentSlide />
          </div>
        </div>
      </div>
      <div className="video_container">
        <VideoContainer />
      </div>
      
      <FormRegisterCopy/>
      <div className="textOne">
        <h3 className="textOne1">LÝ DO BẠN NÊN CHỌN SỬ DỤNG THUỐC</h3>
        <h2 className="textOne2">SẢN PHẨM TỪ ABCDGEE</h2>
        <div className="lineOne"></div>
      </div>
      <IntroduceProduct/>
      <IntroduceProduct/>
      <IntroduceProduct/>
      <IntroduceProduct/>
      <div className="FeedBackContent">
        <h3 className="content1">PHẢN HỒI CỦA KHÁCH HÀNG</h3>
        <h4 className="content2">VỀ SẢN PHẨM THUỐC ĐIỀU KINH CA CÔNG</h4>
        <div className="lineOne"></div>
      </div>
      <FeedBack/>
      <FeedBack/>
      <FeedBack/>
      <UseProduct/>
      <Footer/>
    </div>
  );
}

export default App;
