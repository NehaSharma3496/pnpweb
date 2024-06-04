import React, { useRef, useEffect, useState } from 'react';
import CountUp from 'react-countup';

const Counter = () => {
  const counterRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5 // Adjust this value as needed
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <section ref={counterRef} className={`counter-section ${isVisible ? 'visible' : ''}`}>
      <div className='container'>
        <div className='col-md-11 mx-auto numbers-counter'>
        <div className='row'>
          <div className='col-md-4'>
          <div className="stat-item">
              <div className="stat-number">
                {isVisible && <CountUp start={0} end={11} duration={5} />}<span>+</span>
              </div>
              <div className="stat-title">
                <span>Years of experience </span>with <br/>Algo Service
              </div>
            </div>
          </div>
          <div className='col-md-4'>
          <div className="stat-item">
              <div className="stat-number">
                {isVisible && <CountUp start={0} end={100} duration={5} />}<span>+</span>
              </div>
              <div className="stat-title">
                <span>Major projects </span>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
          <div className="stat-item">
              <div className="stat-number">
                {isVisible && <CountUp start={0} end={11} duration={5} />}<span>+</span>
              </div>
              <div className="stat-title">
                <span>Years of experience </span>in the<br/> IT industry
              </div>
            </div>
          </div>
        
        </div>
        </div>
      
      </div>
      
    </section>
  );
};

export default Counter;
