import React from "react";
import "./Elements2.css";
import bannerData from '../Json/selectCity.json'


const Image1=bannerData[0].banner4.imgs[0];
const Image2=bannerData[0].banner4.imgs[1];
const Image3=bannerData[0].banner4.imgs[2];
const Image4=bannerData[0].banner4.imgs[3];

function Elements2() {
  return (
    <div className="ele ">
      <div className="col1 mt-5 ">
      <div className="text ">
      {bannerData[0].banner4.title}
      </div>
      <div className="text1">
      <p >
     {bannerData[0].banner4.description}

     </p>
      </div>

     </div>
     
     <div className="col2 mt-5 ">
      <div className="imagebox1">
      <img src={Image1} alt="" />
      <img src={Image2} alt="" />

      </div>
      <div className="imagebox2">
      <img src={Image3} alt="" />
      <img src={Image4} alt="" />

      </div>



     </div>

     {console.log("image1",Image1)}
     {console.log("image2",Image2)}
     {console.log("image3",Image3)}
     {console.log("image4",Image4)}
        




    
    </div> 
  );
}

export default Elements2;
