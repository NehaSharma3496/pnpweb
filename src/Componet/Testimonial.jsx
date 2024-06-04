import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {
  const options = {
    items: 1,
    autoplay: true,
    slideTransition: 'linear',
   autoplay:true,
    margin:20,
    loop: true,
    nav: true,
    dots:false,
    
};
  
  return (
    <section className="testimonial ">
    <div className="container caption pt-80 pb-80">
      <div className="row ">
        <div className="col-md-12">
          <div className="sec-head ">
            <span className="sub-title">Testimonial</span>
            <span className="thin"></span>
          </div>
        
          <AnimatedOnScroll animationIn="fadeInUp">
            <h2 className="secondary-heading mb-5">
            Our Customers<span> Feedback.</span>
            </h2>
          </AnimatedOnScroll>
        </div>
      </div>
      <div className="row">
      <div className="col-md-5  left-side">
          <div className="out-team-content ps-0">

            <h3 class="para-heading">We're proud to work with
a diverse range of companies.</h3>
            {/* <p className="para-text">
            We're proud to work with
           a diverse range of companies.
            </p> */}
          </div>
        </div>
        <div className="col-md-7">
        <OwlCarousel autoplay={true} className='owl-theme my-4' loop margin={10}  {...options}>
        <div class='item'>
    <div className="content">
  <div className="text">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256.721"
      height="208.227"
      viewBox="0 0 256.721 208.227"
      className="qout-svg"
    >
      <path
        data-name="Path"
        d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
        transform="translate(121.55 640.568)"
        fill="none"
        stroke="#fff"
        strokeWidth={1}
        opacity="0.322"
      />
    </svg>
    <p className="fz-30">
    P&amp;P Infotech is a very Fantastic TEAM! Always ready to complete work on time with the best design,functionality and ongoing comprehension of requests and auspicious communication. 
    </p>
  </div>
  <div className="info d-flex align-items-center pt-40 mt-40 bord-thin-top">
    <div>
      <div className="fit-img circle">
      <h5>Stallion Asset</h5>
        <img src="./assets/img/testimonial/stallion.png" alt="" />
      </div>
    </div>

  </div>
</div>

    </div>
    <div class='item'>
    <div className="content">
  <div className="text">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256.721"
      height="208.227"
      viewBox="0 0 256.721 208.227"
      className="qout-svg"
    >
      <path
        data-name="Path"
        d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
        transform="translate(121.55 640.568)"
        fill="none"
        stroke="#fff"
        strokeWidth={1}
        opacity="0.322"
      />
    </svg>
    <p className="fz-30">
    We have worked with them on a php project and we are happy with the outcomes, the communication was incredible and the quality level is high here. We will work with P&P Infotech over and over. 
    </p>
  </div>
  <div className="info d-flex align-items-center pt-40 mt-40 bord-thin-top">
    <div>
      <div className="fit-img circle">
      <h5>Wealth Buildup</h5>
        <img src="./assets/img/testimonial/logo-green.png" alt="" />
      </div>
    </div>
    <div className="ml-20">
     
      {/* <span className="sub-title main-color">Founder &amp; CEO</span> */}
    </div>
  </div>
</div>

    </div>
    <div class='item'>
    <div className="content">
  <div className="text">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256.721"
      height="208.227"
      viewBox="0 0 256.721 208.227"
      className="qout-svg"
    >
      <path
        data-name="Path"
        d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
        transform="translate(121.55 640.568)"
        fill="none"
        stroke="#fff"
        strokeWidth={1}
        opacity="0.322"
      />
    </svg>
    <p className="fz-30">
    The Team continually impressed me with their industry understanding and unique ways to deal with taking care of issues. I would suggest these experts with any task. The work was executed well overall. 
    </p>
  </div>
  <div className="info d-flex align-items-center pt-40 mt-40 bord-thin-top">
    <div>
      <div className="fit-img circle">
      <h5>First Advisert</h5>
        <img src="./assets/img/testimonial/first.png" alt="" />
      </div>
    </div>

  </div>
</div>

    </div>
   
    
   
  
</OwlCarousel>
   
        </div>
     
      </div>
    </div>
  </section>
  )
}

export default Testimonial