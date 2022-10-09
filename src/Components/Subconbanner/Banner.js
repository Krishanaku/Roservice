import React, { useEffect, useState } from "react";

import "./Banner1.css";

import bannerData from '../Json/selectCity.json'

const bannerImage=bannerData[0].heroSection.webBanner;
const mobImage=bannerData[0].heroSection.mobBanner;

function Banner() {

  const [selectdata , Setselectdata]=useState()
  const [selecturl , Setselecturl]=useState()
  
  useEffect(()=>{
    Setselectdata(bannerData[0].heroSection.form.map((item)=>
      item.dropdownItem
    
      ))
      Setselecturl(bannerData[0].heroSection.form.map((item)=>
      item.landingUrl
    
      ))

  }, [])
  console.log(bannerData);
  return (
    <div className="Banner">
      {/* <div  style={{backgroundImage: `url(${mobImage})`}} className="Bannermob"> */}

      
      
      <div className="box">

      </div>
        <div className="box1">
          <h6>{bannerData[0].heroSection.title}</h6>
          <h2>{bannerData[0].heroSection.heading}</h2>
          <p>{bannerData[0].heroSection.description}</p>
        
         <div className="box4">
          <div className="form">
          <h6  >Where do you need a Service</h6>
            <select name="sub" id="sub" style={{width:"90%"}} >
               
               {
                
                 <>
                  <option  value="">Select Your City</option>
                  <option  value={selecturl}>{selectdata}</option>
                  
                  </>
                  // console.log("Krishna",selectdata)

               }
                


               {/* <option value="email">Ramnagar</option>
               <option value="pass"> Manipur</option>
               <option value="other">Delhi</option> */}

            </select>

          </div>
           
         
        </div>
      </div>
      </div>
      

      
    //  </div>
    
  );
}

export default Banner;
