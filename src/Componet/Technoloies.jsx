import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Technoloies = () => {

  const options = {
    items: 6,
    autoplay: true,
    slideTransition: 'linear',
   autoplay:true,
   autoplayTimeout: 800,
   autoplaySpeed: 6000,
    margin:20,
    loop: true,
    nav:false,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:6
      }
  }
};
  
  return (
    <section className='technologies-sec'>
         <div className="container caption">
        <div className="row ">
          <div className="col-md-12">
            <div className="sec-head ">
              <span className="sub-title">Technologies</span>
              <span className="thin"></span>
            </div>
          
            <AnimatedOnScroll animationIn="fadeInUp">
              <h2 className="secondary-heading mb-5">
                Technologies<span> We Use</span>
              </h2>
            </AnimatedOnScroll>
          </div>
        </div>
        <OwlCarousel autoplay={true} className='owl-theme my-4' loop margin={10}  {...options}>
    <div class='item'>
    <img src="./assets/img/technology/HTML.png"
                     
                    />
    </div>
    <div class='item'>
        <img src="./assets/img/technology/Laravel.png"
                    />
    </div>
    <div class='item'>
    <img src="./assets/img/technology/Python.png"
                     
                    />
    </div>
    <div class='item'>
    <img src="./assets/img/technology/React.png"
                     
                    />
    </div>
    <div class='item'>
    <img src="./assets/img/technology/Shopify.png"
                     
                    />
    </div>
    <div class='item'>
    <img src="./assets/img/technology/WordPress.png"
                     
                    />
    </div>
    <div class='item'>
    <img src="./assets/img/technology/PHP.png"
                     
                    />
    </div>
    <div class='item'>
    <img src="./assets/img/technology/Node-JS.png"
                     
                    />
    </div>
   
    
   
  
</OwlCarousel>
</div>
    </section>
  )
}

export default Technoloies