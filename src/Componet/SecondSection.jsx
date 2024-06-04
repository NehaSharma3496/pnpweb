import React,{useState, useEffect} from 'react';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import Counter from './Counter';


const SecondSection = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
      const handleScroll = () => {
          const newScroll = window.scrollY;
          setScroll(newScroll);
      };

      window.addEventListener('scroll', handleScroll);

      // Clean up the event listener on unmount
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
      <div className='SecondSection' id='SecondSection'>
          <div className="container">
              <div className='text-center caption'>
                  <AnimatedOnScroll animationIn="fadeInLeft">
                      <h3 className="secondary-heading mb-5">Why<span> Should We</span></h3>
                  </AnimatedOnScroll>
                  <p className="para-text px-lg-5">
                      Our Organization Has Well Versed Technological Setups Which Are Upgraded On A Regular Basis. Our Workforce Has A Thorough Knowledge Of Web Developing, Designing, IT Services And Support.
                  </p>
              </div>
              <div className={scroll > 0 && scroll < 800 ? 'image-holder scale-img' : 'image-holder'}>
                      <div className="view">
                          <div className="plane main">
                              <div className="circle" />
                              <div className="circle" />
                              <div className="circle" />
                              <div className="circle" />
                              <div className="circle" />
                              <div className="circle" />
                          </div>
                      </div>
               
              </div>
              <Counter/>
          </div>
      </div>
  );
};

export default SecondSection;