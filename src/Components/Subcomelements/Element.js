import React from "react";
import bannerData from '../Json/selectCity.json'
import  './Element.css'

const webImage=bannerData[0].banner5.webImg;
const mobImage=bannerData[0].banner5.mobImg;

function Element() {
  return (
    <div className="boxes d-flex flex-row justify-content-around align-item-centre ">
      <div className="element1">
        <img
          src={webImage}
          alt="dance image" width="100%" height="384px"
          className="webImageBox"
        />
          <img
          src={mobImage}
          alt="dance image" 
          className="mobimagebox"
        />
      </div>
      <div className="element2 mt-5">
        {/* <h2>Why People Choose Us</h2>
        <ul className="mt-5">
            <li><h4>Affordable Rates</h4></li>
            <li><h4>On Time Serive</h4></li>
            <li><h4>Verified Professionals</h4></li>
            <li><h4>Excellent Service</h4></li>
        </ul> */}
      </div>
    </div>
  );
}

export default Element;
