import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="clean-footer crev">
    <div className="container  pt-50 ontop">
      <div className="row justify-content-between">
        <div className="col-lg-4">
          <div className="logo icon-img-100 md-mb80">
            <img src="/assets/img/pnp-logo.png" alt="" className='w-75'/>
          </div>
          <div>
            <ul className='rest mt-30'>
              <li className="mb-15">  <a href="mailto:info@pnpuniverse.com"> info@pnpuniverse.com</a></li>
              <li className="mb-15">  <a href="mailto:ihr@pnpuniverse.com">hr@pnpuniverse.com</a></li>
              <li className="mb-15"> <a href="tel:+91 7049037000">+91 7049037000</a></li>
            </ul>
      
      
       
          </div>
        
        </div>
        <div className="col-lg-2">
        <div className="column md-mb50">
            <h6 className="sub-title mb-30">Services</h6>
            <ul className="rest fz-14 opacity-7">
              <li className="mb-15">
                <a href="/page-about">About</a>
              </li>
              <li className="mb-15">
                <a href="/page-services">Services</a>
              </li>
              <li className="mb-15">
                <a href="/blog-grid-sidebar">Blog</a>
              </li>
              <li>
                <a href="/page-contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2">
          <div className="column md-mb50">
            <h6 className="sub-title mb-30">Useful Links</h6>
            <ul className="rest fz-14 opacity-7">
              <li className="mb-15">
                <a href="/page-about">About</a>
              </li>
              <li className="mb-15">
                <a href="/page-services">Services</a>
              </li>
              <li className="mb-15">
                <a href="/blog-grid-sidebar">Blog</a>
              </li>
              <li>
                <a href="/page-contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="column subscribe-minimal">
            <h6 className="sub-title mb-30">Address</h6>
            <div>
          P&P Infotech, 137, Ahilya Nagar Ext. Gopur Square.
          Indore (Madhya Pradesh)
          </div>
            <div className="social-icon mt-50">
      <a href="https://www.facebook.com/pnpuniverse/" target="_blank">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="https://x.com/i/flow/login?redirect_after_login=%2FPnP_Universe" target="_blank">
        <i className="fab fa-twitter" />
      </a>
      <a href="https://www.linkedin.com/organization-guest/company/p&p-universe" target="_blank">
        <i className="fab fa-linkedin" />
      </a>
      <a href="https://www.instagram.com/pnp_infotech/" target="_blank">
        <i className="fab fa-instagram" />
      </a>
    </div>
        
          </div>
        </div>
      </div>
      <div className="pt-30 pb-30 mt-50 bord-thin-top">
        <div className="text-center">
          <p className="fz-14 mb-0">
          pnpuniverse © {year} copyright all right reserved 
         
          </p>
        </div>
      </div>
    </div>
   
  </footer>
  

  )
}

export default Footer