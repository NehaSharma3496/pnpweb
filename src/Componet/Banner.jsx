import React, { useEffect, useState } from 'react';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import Loading from './Loading'; // Import the Loading component
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after desired time
      // Enable overflow when loading is complete
      document.body.style.overflow = 'auto';
    }, 4000); // Adjust the time according to your welcome animation duration

    // Cleanup on unmount
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto'; // Ensure overflow is re-enabled on unmount
    };
  }, []);

  // Disable overflow when loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className='banner-section border-bottom'>
          <div className="container">
            <div className="row mb-100">
              <section className="col-lg-12">
                <div className="caption">
                  <h3>We provide our<br/> creative</h3>
                  <div className="row align-items-center mt-20">
                    <div className="col-lg-12  md-mb30">
                      <AnimatedOnScroll animationIn="fadeInDown">
                        <h1><span className="typing-demo">
                        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Digital Service',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Amazing Work',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
    />
    </span></h1>
                      </AnimatedOnScroll>
                    </div>
                  </div>
                  <div className="row align-items-center mt-20">
                    <div className="col-lg-12  md-mb30 d-flex align-items-center">
                      <AnimatedOnScroll animationIn="fadeInLeft">
                        <button className="btn main-colorbg me-2">Learn More</button>
                      </AnimatedOnScroll>
                      <AnimatedOnScroll animationIn="fadeInLeft">
                        <a href="#SecondSection" className="btn arrow-btn"><i className="text-white fs-3 fa-solid fa-arrow-down-long"></i></a>
                      </AnimatedOnScroll>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Banner;
