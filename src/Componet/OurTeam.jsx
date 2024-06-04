import React, { useState } from "react";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
// import TextParticles from './Extracomponent/TextParticles';

const OurTeam = () => {


  return (
    <section className="Ourteam pt-80 pb-80">
      <div className="container caption">
        <div className="row ">
          <div className="col-md-12">
            <div className="sec-head ">
              <span className="sub-title">Our Team</span>
              <span className="thin"></span>
            </div>
          
            <AnimatedOnScroll animationIn="fadeInUp">
              <h2 className="secondary-heading mb-5">
                Our <span> Leadership Team.</span>
              </h2>
            </AnimatedOnScroll>
          </div>
        </div>
        <div className="row column-reverse">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-6">
              <div className="team-img">
                  <div className=" effect-image-1">
                    <img
                      src="./assets/img/Team/punit-sir.jpg"
                      className="w-100"
                    />
                    <div className="simple-text">
                      <p className="leader_Name">Punit Wadhwani</p>
                      <p className="leader_position">Chief Executive Officer</p>
                    </div>
                    <div className="overlay-sim-text-2 overlay-xs-1"></div>
                  </div>
                </div>
              
                <div className="team-img">
                  <div className=" effect-image-1">
                    <img
                      src="./assets/img/Team/nikita-mam.png"
                      className="w-100"
                    />
                    <div className="simple-text">
                      <p className="leader_Name">Nikita Bhagat</p>
                      <p className="leader_position">Managing Director</p>
                    </div>
                    <div className="overlay-sim-text-2 overlay-xs-1"></div>
                  </div>
                </div>
                <div className="team-img">
                  <div className=" effect-image-1">
                    <img
                      src="./assets/img/Team/pankaj-sir.jpg"
                      className="w-100"
                    />
                    <div className="simple-text">
                      <p className="leader_Name">Pankaj Patidar</p>
                      <p className="leader_position">Sr. PHP Developer</p>
                    </div>
                    <div className="overlay-sim-text-2 overlay-xs-1"></div>
                  </div>
                </div>
                <div className="team-img">
                  <div className=" effect-image-1">
                    <img
                      src="./assets/img/Team/neelesh-sir.jpg"
                      className="w-100"
                    />
                    <div className="simple-text">
                      <p className="leader_Name">Neelesh Baghel</p>
                      <p className="leader_position">Sr. Web Designer</p>
                    </div>
                    <div className="overlay-sim-text-2 overlay-xs-1"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
              <div className="team-img  mt-190">
                  <div className=" effect-image-1">
                    <img
                      src="./assets/img/Team/amit-sir.png"
                      className="w-100"
                    />
                    <div className="simple-text">
                      <p className="leader_Name">Amit Chouhan</p>
                      <p className="leader_position">Chief Operating Officer</p>
                    </div>
                    <div className="overlay-sim-text-2 overlay-xs-1"></div>
                  </div>
                </div>
                <div className="team-img ">
               
                  <div className=" effect-image-1">
                    <img
                      src="./assets/img/Team/sachin-sir.jfif"
                      className="w-100"
                    />
                    <div className="simple-text">
                      <p className="leader_Name">Sachin Kumawat</p>
                      <p className="leader_position">Chief Technical Officer</p>
                    </div>
                    <div className="overlay-sim-text-2 overlay-xs-1"></div>
                  </div>
                </div>
                <div className="team-img ">
                  <div className=" effect-image-1">
                    <img
                      src="./assets/img/Team/piyush-sir.JPEG"
                      className="w-100"
                    />
                    <div className="simple-text">
                      <p className="leader_Name">Piyush Narware</p>
                      <p className="leader_position">Sr. Wordpress Developer</p>
                    </div>
                    <div className="overlay-sim-text-2 overlay-xs-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5  left-side">
            <div className="out-team-content">

              <h3 class="para-heading">Meet Our Legends.</h3>
              <p className="para-text">
                Meet the driving force behind PNP Infotech success—our
                leadership team. A collective blend of expertise, innovation,
                and passion for technology guides us towards excellence. Explore
                the minds steering our journey.
              </p>
              <button class="btn main-colorbg me-2">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
