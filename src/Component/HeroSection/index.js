import React from 'react';
import './index.css';
import Cardd from "../HeroCard";
function Mainimage() {
  return (
    <>
     <div className="App">
      <div className="image-container">
        <img src='./assest/image/main-banner.jpg' className="responsive-image" alt="Banner Image" style={{position:'relative'}} />
      </div>

      <div className="text-overlay">
        <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-once="true" className="aos">
          Leading Big Data<br /> Analytics Company
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing <br />
          elit, sed do eiusmod tempor incididunt ut labore et<br />
          dolore magna aliqua. Quis ipsum suspendisse<br />
          ultrices gravida.
        </p>
        <a className="btn btn-primary aos-init aos-animate" data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-once="true" href="/contact/">
          Get Started
        </a>
      </div>

      {/* <div  style={{ marginTop: '20px', position:'absolute', background:'white'}}>
        <Cardd />
      
      </div> */}
              {/* <div > */}
          <Cardd className="card-container"/>
        {/* </div> */}

    </div>
    
    </>
  );
}

export default Mainimage;



// import React from "react";
// import Image from 'react-bootstrap/Image';
// import Cardd from "../HeroCard";
// function Mainimage(){
//     return(
//     <>
    
//     <div className="container-fluid">
//                 <Image className='main_banner' src="./assest/image/main-banner.jpg" fluid style={{position:'relative'}}/>
//                 <div className="text-overlay" >

//                     <h1 data-aos="fade-up" data-aos-delay="100" data-aos-duration="500" data-aos-once="true" class="aos-init aos-animate">Leading Big Data<br /> Analytics Company</h1>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit, sed do eiusmod tempor incididunt ut labore et<br /> dolore magna aliqua. Quis ipsum suspendisse<br /> ultrices gravida.</p>
//                     <a class="btn btn-primary aos-init aos-animate" data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-once="true" href="/contact/">Get Started</a>
                
//                 </div>
//               <Cardd className='three-card'/>
//             </div>
//     </>
//     )
// }
// export default Mainimage