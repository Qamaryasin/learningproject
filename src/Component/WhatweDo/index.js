import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import './index.css'
function WeDo() {
    return (
        <>
            <div className="container">
                <h1 className="whatwedo">What We Do
                    <span className="dot"></span> </h1>
                <p className="pol">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="container-fluid" className="card-container-second">
                <div class="row container-fluid">
                    <div class="col-lg-3 col-sm-6 aos-init aos-animate" >
                        <div class="single-banner-boxes " >
                            <div class="icons_secondcard">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                                </svg>
                            </div>
                            <h3 className="head">Research</h3>
                            <p className="pagragraph">Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <a href="#" className="a_tag">Market Resarch</a><br />
                            <a href="#" className="a_tag">Market Resarch</a>
                            <div class="read-more-container">
                                <FaArrowRight class="arrow-icon " />
                                <p className="read_more">Read More</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 aos-init aos-animate" >
                        <div class="single-banner-boxes " >
                            <div class="icons_secondcard">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polyline points="16 18 22 12 16 6"></polyline>
                                    <polyline points="8 6 2 12 8 18"></polyline>
                                </svg>
                            </div>
                            <h3 className="head">Analytics</h3>
                            <p className="pagragraph">Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <a href="#" className="a_tag">Market Resarch</a><br />
                            <a href="#" className="a_tag">Market Resarch</a>
                            <div class="read-more-container">
                                <FaArrowRight class="arrow-icon " />
                                <p className="read_more">Read More</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 aos-init aos-animate">
                        <div class="single-banner-boxes " >
                            <div class="icons_secondcard">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="9" cy="7" r="4"></circle>
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                </svg>
                            </div>
                            <h3 className="head">Technology</h3>
                            <p className="pagragraph">Lorem ipsum dolor sit consectetur, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            <a href="#" className="a_tag">Market Resarch</a><br />
                            <a href="#" className="a_tag">Market Resarch</a>
                            <div class="read-more-container">
                                <FaArrowRight class="arrow-icon " />
                                <p className="read_more">Read More</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WeDo