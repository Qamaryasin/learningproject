import React from "react";
import './discover.css'
export const Discover=()=>{
    return (
        <div className="row main_div_discover">
          <div className="col-lg-6 col-md-12 ">
            <div className="analytics-shape1">
              <img 
                alt="image" 
                loading="lazy"  
                decoding="async" 
                data-nimg="1" 
                style={{ color: 'transparent' }} 
                src="assest/image/analytics-shape1.01a02156.png"
                // className="analytics_shape1_img"
              />
              <div className="discover-image">
                <img 
                  alt="image" 
                  loading="lazy" 
                  width="427" 
                  height="320" 
                  decoding="async" 
                  data-nimg="1" 
                  style={{ color: 'transparent' }} 
                  src="assest/image/discover-img1.7325c7c1.png"
                  className="discover-imag1"
                />
                <img 
                  alt="image" 
                  loading="lazy" 
                  width="360" 
                  height="300" 
                  decoding="async" 
                  data-nimg="1" 
                  style={{ color: 'transparent' }} 
                  src="assest/image/discover-img2.d56c1dd8.jpg"
                  className="discover-img2"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="discover-content">
              <h2>Engaging New Audiences through Smart Approach</h2>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.</p>
              <a className="btn" href="/bigdata-analytics/#">Discover More</a>
            </div>
          </div>
        </div>
      );

}



    // return(
    //     <>
    // <div className="row main_div_discover">
    // <div class="col-lg-6 col-md-12">
    // <div class="analytics-shape1">
    //     <img alt="image" loading="lazy" width="523" height="586" decoding="async" data-nimg="1" style={{color:'transparent'}} src="assest/image/analytics-shape1.01a02156.png"/>
    // </div>
    //     <div class="discover-image">
    //         <img alt="image" loading="lazy" width="427" height="320" decoding="async" data-nimg="1" style={{color:'transparent'}} src="assest/image/discover-img1.7325c7c1.png"/>
    //         <img alt="image" loading="lazy" width="360" height="300" decoding="async" data-nimg="1" style={{color:'transparent'}} src="assest/image/discover-img2.d56c1dd8.jpg"/>
    //         </div>
    //        </div>
    //     <div class="col-lg-6 col-md-12">
    //         <div class="discover-content"
    //         ><h2>Engaging New Audiences through Smart Approach</h2>
    //         <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&#x27;t look even slightly believable. If you are going to use a passage.</p>
    //         <a class="btn btn-primary" href="/bigdata-analytics/#">Discover More</a>
    //         </div>
    //         </div>
    //       </div>
         
    //               </>
    // )