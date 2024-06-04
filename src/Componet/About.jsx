import React from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import Counter from "./Counter";

const About = () => {
  return (
    <section className="about-sec caption">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="sec-head ">
              <span className="sub-title">About Us</span>
              <span className="thin"></span>
            </div>
            <AnimatedOnScroll animationIn="fadeInUp">
              <h2 className="secondary-heading mb-5">
                IT company <span>since 2011</span>
              </h2>
            </AnimatedOnScroll>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-5">
          <AnimatedOnScroll animationIn="fadeInLeft" >
            <div className="about-img">
            <img src="./assets/img/pnp-grp.png" className="w-100" />
            </div>
</AnimatedOnScroll>
          </div>
          <div className="col-md-7">
          <AnimatedOnScroll animationIn="fadeIn">
            <div className="about-main">
              <h3 className="para-heading">Why Should We</h3>

              <p className="para-text">
                We Are The Building Blocks Of Web Development. We Aim At
                Achieving Client Satisfaction Through Our Skills, Expertise And
                Exquisite Services. We Have A Competent Workforce Whose Sole Aim
                Is To Benefit The Organization. You Just Have To Plant The Seed
                And We Will Transform It Into A Gigantic Tree.We Understand Our
                Client’s Needs And Their Perspective. We Know How To Bring Their
                Imagination To Life. We Are Endowed With Adroit Physical As Well
                As Human Resources. 
              </p>
              <div className="row lg-marg mt-60">
                <div className="col-md-6">
                  <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                    <div>
                      <h3 className="fw-300 mb-10">100%</h3>
                      <h6 className="Conter-sub-title">Clients Satisfaction</h6>
                    </div>
                    <div className="ml-auto">
                      <div className="icon-img-40">
                        <img src="/assets/img/icons/arw0.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                    <div>
                      <h3 className="fw-300 mb-10">670</h3>
                      <h6 className="Conter-sub-title">Projects Completed</h6>
                    </div>
                    <div className="ml-auto">
                      <div className="icon-img-40">
                        <img src="/assets/img/icons/arw0.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </AnimatedOnScroll>
          </div>
        </div>
        {/* <div className='row pt-3'>
                  <div className='col-md-7'>
                    <div className='row'>
                    <div className='col-md-6'>
                  <div className='about-content-img' style={{backgroundImage: `url("./assets/img/mision.jpg")` }}>
                  <div className='position-relative'>
                    <h3>Our Goal</h3>
                    <hr/>
                    <p>We amalgam our knowledge of traditional marketing media with the new digital era thereby, creating a masterpiece. As computer science majors, we have the required ability to work with programming languages as well as design, conceptualization and final production. Our 6 years of experience in the realm further adds to our expertise in Project Management, Customer Relations and Human Resource.</p>
                  </div>
                  </div>
                  <div className='about-content-img about-content-img-second' style={{backgroundImage: `url("./assets/img/about-2.jpg")` }}>
                  <div className='position-relative'>
                    <h3>Our Goal</h3>
                    <hr/>
                    <p>We amalgam our knowledge of traditional marketing media with the new digital era thereby, creating a masterpiece. As computer science majors, we have the required ability to work with programming languages as well as design, conceptualization and final production. Our 6 years of experience in the realm further adds to our expertise in Project Management, Customer Relations and Human Resource.</p>
                  </div>
                  </div>
                </div>
                <div className='col-md-6'>
                <div className='about-content-img about-content-img-second' style={{backgroundImage: `url("./assets/img/vision.jpg")` }}>
                <div className='position-relative'>
                <h3>Our vision</h3>
                <hr/>
                <p className=''>We believe that sky is not the limit. We want to reach to such height which, if viewed from the earth, seems unfathomable. Once we embark on the voyage of growth, we do not intend to stop…ever.We are actively involved in all the major production and marketing steps of the company's project and also have synchronization with the latest technology, online opportunities and the current IT Trends.

                 </p>
                 </div>
                  </div>
                  <div className='about-content-img about-content-img-second' style={{backgroundImage: `url("./assets/img/about-3.jpg")` }}>
                <div className='position-relative'>
                <h3>Our vision</h3>
                <hr/>
                <p className=''>We believe that sky is not the limit. We want to reach to such height which, if viewed from the earth, seems unfathomable. Once we embark on the voyage of growth, we do not intend to stop…ever.We are actively involved in all the major production and marketing steps of the company's project and also have synchronization with the latest technology, online opportunities and the current IT Trends.

                 </p>
                 </div>
                  </div>
                </div>
                    </div>
                  </div>
                  <div className='col-md-5 left-side'>
                  <div className='about-main'>
                  <h3 className='para-heading'>Why Should We</h3>
                
                  <p className='para-text'>We Are The Building Blocks Of Web Development. We Aim At Achieving Client Satisfaction Through Our Skills, Expertise And Exquisite Services. We Have A Competent Workforce Whose Sole Aim Is To Benefit The Organization. You Just Have To Plant The Seed And We Will Transform It Into A Gigantic Tree.We Understand Our Client’s Needs And Their Perspective. We Know How To Bring Their Imagination To Life. We Are Endowed With Adroit Physical As Well As Human Resources. Our Organization Has Well Versed Technological Setups Which Are Upgraded On A Regular Basis. Our Workforce Has A Thorough Knowledge Of Web Developing, Designing, It Services And Support.</p>
                </div>
                  </div>
               
               </div>  */}
      </div>
    </section>
  );
};

export default About;
