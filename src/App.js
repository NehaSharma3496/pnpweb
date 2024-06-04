import React, { useEffect, useState } from 'react';
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Componet/Layout/Header";
import Banner from "./Componet/Banner";
import About from './Componet/About';
import Counter from './Componet/Counter';
import Service from './Componet/Service';
import OurTeam from './Componet/OurTeam';
import SecondSection from './Componet/SecondSection';
import Loading from './Componet/Loading';
import Portfolio from './Componet/Portfolio';
import Footer from './Componet/Layout/Footer';
import Technoloies from './Componet/Technoloies';
import VideoSec from './Componet/VideoSec';
import Contact from './Componet/Contact';
import Testimonial from './Componet/Testimonial';
// import HamburgerMenu from './Componet/Layout/HamburgerMenu';

function App() {
  const [loadingBarStyle, setLoadingBarStyle] = useState({ left: '-100%' });
  const [loadingBoxStyle, setLoadingBoxStyle] = useState({ opacity: '0' });
  const [splashScreenStyle, setSplashScreenStyle] = useState({ top: '0' });
  const [loadingCircleStyle, setLoadingCircleStyle] = useState({ opacity: '1' });
  const [bodyClass, setBodyClass] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setLoadingBarStyle({ left: '0' });
    }, 1500);

    setTimeout(() => {
      setLoadingBoxStyle({ opacity: '1' });
    }, 500);

    setTimeout(() => {
      setSplashScreenStyle({ opacity: '0',transition:'0.5s linear' });
    }, 4500);

    setTimeout(() => {
      setLoadingCircleStyle({ opacity: '0' });
    }, 4500);

    setTimeout(() => {
      setBodyClass('visibleSplash');
    }, 5000);
  }, []);

  return (
    <div>
       {/* <div className="splashBody">
        <div className="splashScreen" style={splashScreenStyle}>
          <div className="loadingContainer">
            <div className="loadingBox" style={loadingBoxStyle}>
              <img
                src="/assets/gifs/Globbing-Globe.gif"
                className="splashLogo"
              />
              <div className="loadingBarContainer">
                <div className="loadingbar" style={loadingBarStyle}></div>
              </div>
              <div className="loadingCircle" style={loadingCircleStyle}>
                <h1 className="text-white">Welcome to P&P Infotech</h1>
                <div className="circleLoader"></div>
              </div>
            </div>
          </div>
        </div>
        
      </div> */}
      {/* <div className="blob"> </div>  */}
      {/* <Loading/> */}
      <Header/>
      <Banner/>
      <SecondSection/>
  
    <Portfolio/>
    {/* <Counter/> */}
    <Service/>
    <About/>
    <OurTeam/>
   <Testimonial/>
    <Contact/>
    <Technoloies/>
    <VideoSec/>
   
<Footer/>
    </div>
  );
}

export default App;
