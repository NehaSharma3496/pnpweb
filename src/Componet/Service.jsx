import React from 'react'
import { AnimatedOnScroll } from "react-animated-css-onscroll";
// import ParticleAnimation from '../Componet/Extracomponent/ParticleAnimation';

const Service = () => {
  return (
    <section className='service-sec services-clas pb-80 pt-80'>
     <div className='container caption'>
      <div className='service-1'>
        <div className='row '>
            <div className='col-md-12'>
              <div className='sec-head '>
                <span className='sub-title'>Our Service</span>
                <span className="thin"></span>
                </div>
                

               
            {/* <ParticleAnimation  />  */}
      
                <AnimatedOnScroll  animationIn="fadeInUp"  >
                <div className='d-md-flex justify-content-between align-items-center mb-5 d-md-block'>

                <h2 className='secondary-heading '>Our Core<span> Service</span></h2>
                <div><button class="btn main-colorbg me-2">View All <i className="fa-solid fa-arrow-right ps-2"></i></button></div>
                </div>
               </AnimatedOnScroll>
               
                </div>
                </div>
                
                <div className="row row-gap">
  <div className="col-lg-4 col-md-4">

    <div className="item sub-bg md-mb30">
    <AnimatedOnScroll delay={4000} animationIn="fadeIn"  animateOut='fadeOut'>
      <div className="icon-img-60 opacity-5 mb-40">
        <img src="/assets/img/service-icon/3.png" alt="" />
      </div>
      <h5>UI/UX Design</h5>
      <div className="text mt-40">
        <div className="mb-10">
          <span className="tag">UI/UX</span>
          <span className="tag">Development</span>
        </div>
        <p className='para-text'>
        We have faith in conveying designs that can increase current standards of your imaginations. 
        </p>
      </div>
      <a href="/page-services-details" className="mt-40">
      <i className="fa-solid fa-arrow-right"></i>
      </a>
      </AnimatedOnScroll>
    </div>
   
  </div>
  <div className="col-lg-4 col-md-4">
  <div className="item sub-bg md-mb30">
  <AnimatedOnScroll delay={4000} animationIn="fadeIn"  animateOut='fadeOut'>
 
      <div className="icon-img-60 opacity-5 mb-40">
        <img src="/assets/img/service-icon/4.png" alt="" />
      </div>
      <h5>Web Development</h5>
      <div className="text mt-40">
        <div className="mb-10">
          <span className="tag">Web</span>
          <span className="tag">Development</span>
        </div>
        <p className='para-text'>
       We are master in organizing and creating websites that are dynamic. WordPress Development is one of the core aspects of our web development.


        </p>
      </div>
      <a href="/page-services-details" className="mt-40">
      <i className="fa-solid fa-arrow-right"></i>
      </a>
      </AnimatedOnScroll>
    </div>
   
  </div>
  <div className="col-lg-4 col-md-4">

  <div className="item sub-bg">
  <AnimatedOnScroll delay={4000} animationIn="fadeIn"  animateOut='fadeOut'>
   
      <div className="icon-img-60 opacity-5 mb-40">
        <img src="/assets/img/service-icon/5.png" alt="" />
      </div>
      <h5>SEO / Marketing</h5>
      <div className="text mt-40">
        <div className="mb-10">
          <span className="tag">SEO</span>
          <span className="tag">Marketing</span>
        </div>
        <p className='para-text'>
          We always ensure that it combines a clean and beautiful visual design.
        </p>
      </div>
      <a href="/page-services-details" className="mt-40">
      <i className="fa-solid fa-arrow-right"></i>
      </a>
    
    </AnimatedOnScroll>
    </div>
  </div>
</div>

</div>
<div className="ontop services-inline2  mt-80">
 
  <div className="item">
  <AnimatedOnScroll delay={4000} animationIn="fadeInUp"  animateOut='fadeOut'>
    <div className="row md-marg align-items-center">
      <div className="col-lg-4">
        <div>
         
          <div>
          
            <h2>
            Apps and  <span className="fw-200">Mobility</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="text md-mb80">
          <p className='para-text'>
            We help our client suceed by creating identities, digital
            experiences, and printmaterials that communicate clearly
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="img fit-img">
        <img src="/assets/img/service/ser1.jpg" alt="" />
          <a href="/page-services-details">
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
    </AnimatedOnScroll>
  </div>
  <div className="item">
  <AnimatedOnScroll delay={4000} animationIn="fadeInUp"  animateOut='fadeOut'>

    <div className="row md-marg align-items-center">
      <div className="col-lg-4">
        <div>
        
          <div>
           
            <h2>
            Bulk <span className="fw-200">SMS</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="text md-mb80">
        <p className='para-text'>
            We help our client suceed by creating identities, digital
            experiences, and printmaterials that communicate clearly
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="img fit-img">
        <img src="/assets/img/service/ser2.jpg" alt="" />
          <a href="/page-services-details">
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
    </AnimatedOnScroll>
  </div>
  <div className="item pb-0">
  <AnimatedOnScroll delay={4000} animationIn="fadeInUp"  animateOut='fadeOut'>

    <div className="row md-marg align-items-center">
      <div className="col-lg-4">
        <div>
         
          <div>
           
            <h2>
            IVR & <span className="fw-200">Toll Free</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="text md-mb80">
        <p className='para-text'>
            We help our client suceed by creating identities, digital
            experiences, and printmaterials that communicate clearly
          </p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="img fit-img">
        <img src="/assets/img/service/ser3.jpg" alt="" />
          <a href="/page-services-details">
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
    </AnimatedOnScroll>
  </div>
</div>

            
        
     </div>
    </section>
   
  )
}

export default Service
