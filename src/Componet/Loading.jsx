import React from 'react'
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const Loading = () => {
  return (
<div className="loader">
  <div className="load-text">
    <div className="loaded-text">
    <AnimatedOnScroll animationIn="fadeInDown">Welcome to P&P Infotech.
    </AnimatedOnScroll>
    <AnimatedOnScroll animationIn="fadeInUp">
    <h4>Let's Create Something Amazing</h4>
    </AnimatedOnScroll></div>
    {/* <br />
    <div className="loading-text">Let's Create Something Amazing</div> */}
  </div>
</div>

  )
}

export default Loading