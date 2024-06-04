import React,{useState} from 'react'
import { AnimatedOnScroll } from "react-animated-css-onscroll";


const Portfolio = () => {
    const [activeTab, setActiveTab] = useState(0); // State to manage active tab index

    const handleTabHover = (index) => {
      setActiveTab(index); // Set active tab index on hover
    };
    const Tab1Title = () => (
      <div className="tab-title d-block d-sm-flex align-items-end">
              <h4>
                <span className="me-2 fz-16">01.</span>
                <a href="/project-details">Dhan</a>
              </h4>
              <h6 className="sub-title p-color ms-4">/ UI-UX Design + Development</h6>
            </div>
    );
  
    const Tab2Title = () => (
      <div className="tab-title d-block d-sm-flex align-items-end">
              <h4>
                <span className="me-2 fz-16">02.</span>
                <a href="/project-details">Stallion Asstes</a>
              </h4>
              <h6 className="sub-title p-color ms-4">/ UI-UX Design + Development</h6>
            </div>
    );
    const Tab3Title = () => (
      <div className="tab-title d-block d-sm-flex align-items-end">
              <h4>
                <span className="me-2 fz-16">03.</span>
                <a href="/project-details">E-sign Aaddhar</a>
              </h4>
              <h6 className="sub-title p-color ms-4">/ React Js + Node</h6>
            </div>
    );
    const Tab4Title = () => (
      <div className="tab-title d-block d-sm-flex align-items-end">
              <h4>
                <span className="me-2 fz-16">04.</span>
                <a href="/project-details">Market HUb</a>
              </h4>
              <h6 className="sub-title p-color ms-4">/UI-UX Design + Development</h6>
            </div>
    );
    const Tab5Title = () => (
      <div className="tab-title d-block d-sm-flex align-items-end">
              <h4>
                <span className="me-2 fz-16">05.</span>
                <a href="/project-details">Connect-box</a>
              </h4>
              <h6 className="sub-title p-color ms-4">/React Js + Node</h6>
            </div>
    );
    const Tab1Content = () => (
        <div>
          {/* Your custom content for Tab 1 */}
          <AnimatedOnScroll animationIn="fadeInLeft">
          <img src="./assets/img/portfolio/dhan.png" alt="Image 1" />
          </AnimatedOnScroll>
          {/* <p>Additional content...</p> */}
        </div>
      );
      
      const Tab2Content = () => (
        <div>
          {/* Your custom content for Tab 2 */}
          <AnimatedOnScroll animationIn="fadeInLeft">
          <img src="./assets/img/portfolio/stallion.png" alt="Image 1" />
          </AnimatedOnScroll>
        </div>
      );
      
      const Tab3Content = () => (
        <div>
           <div>
           <AnimatedOnScroll animationIn="fadeInLeft">
          {/* Your custom content for Tab 2 */}
          <img src="./assets/img/portfolio/Esign.png" alt="Image 1" />
          </AnimatedOnScroll>
        </div>
        </div>
      );
      const Tab4Content = () => (
        <div>
           <div>
           <AnimatedOnScroll animationIn="fadeInLeft">
          {/* Your custom content for Tab 2 */}
          <img src="./assets/img/portfolio/MarketHub.png" alt="Image 1" />
          </AnimatedOnScroll>
        </div>
        </div>
      );
      const Tab5Content = () => (
        <div>
           <div>
           <AnimatedOnScroll animationIn="fadeInLeft">
          {/* Your custom content for Tab 2 */}
          <img src="./assets/img/portfolio/Connect-box.png" alt="Image 1" />
          </AnimatedOnScroll>
        </div>
        </div>
      );
      const tabs = [
        { id: 0, title: <Tab1Title />, content: <Tab1Content /> },
        { id: 1, title: <Tab2Title />, content: <Tab2Content /> },
        { id: 2, title: <Tab3Title />, content: <Tab3Content /> },
        { id: 3, title: <Tab4Title />, content: <Tab4Content /> },
        { id: 4, title: <Tab5Title />, content: <Tab5Content /> },
      ];

  return (
    <section className="portfolio pt-80">
      <div className="container caption">
        <div className="row ">
          <div className="col-md-12">
            <div className="sec-head ">
              <span className="sub-title">Our Portfolio</span>
              <span className="thin"></span>
            </div>
          
            <AnimatedOnScroll animationIn="fadeInUp">
              <h2 className="secondary-heading mb-5">
              Selected <span> Works.</span>
              </h2>
            </AnimatedOnScroll>
          </div>
        </div>
        <>
       <div className='row hover-tabs'>
       <div className='col-lg-6'> <div className="tab-content">
        <p>{tabs[activeTab].content}</p> {/* Render content based on active tab index */}
      </div></div>
        <div className='col-lg-6'>
        <AnimatedOnScroll animationIn="fadeInUp">
          <div className="tab-menu">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={activeTab === tab.id ? 'tab active' : 'tab'}
            onMouseEnter={() => handleTabHover(tab.id)} // Handle hover event
          >
            {tab.title}
          </div>
        ))}
      </div>
      </AnimatedOnScroll>
      </div>
        
       </div>
      
  
</>

      </div>

  
  
  

    </section>
  )
}

export default Portfolio