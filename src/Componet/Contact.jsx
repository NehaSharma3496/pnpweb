import React from 'react'
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const Contact = () => {
  return (
    <section className='contact-section'>
        <div className='container'>
        <div className="row ">
          <div className="col-md-12">
            <div className="sec-head ">
              <span className="sub-title">Let‘s Chat</span>
              <span className="thin"></span>
            </div>
          
            <AnimatedOnScroll animationIn="fadeInUp">
              <h2 className="secondary-heading mb-5">
              Send a <span> Message</span>
              </h2>
            </AnimatedOnScroll>
          </div>
        </div>
        <div className='row contact align-items-center'>
        <div className="col-lg-4 valign">
  <div className=" info-box full-width md-mb80">
  
    <div className="morinfo  pb-30 border-bottom">
      <h6 className="contact-heading">Address</h6>
      <p>P&P Infotech, 137, Ahilya Nagar Ext. Gopur Square.
Indore (Madhya Pradesh)</p>
    </div>
    <div className="morinfo mt-30 pb-30 border-bottom">
      <h6 className="mb-15 contact-heading">Email</h6>
      <p className='email'>
        <a href="mailto:info@pnpuniverse.com">info@pnpuniverse.com</a></p>
    </div>
    <div className="morinfo mt-30 pb-30 border-bottom">
      <h6 className="mb-15 contact-heading">Phone</h6>
      <p className='phone'>
      <a href="tel:+91 7049037000">+91 7049037000</a></p>
    </div>
    <div className="social-icon mt-50">
      <a href="#0">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="#0">
        <i className="fab fa-dribbble" />
      </a>
      <a href="#0">
        <i className="fab fa-behance" />
      </a>
      <a href="#0">
        <i className="fab fa-instagram" />
      </a>
    </div>
  </div>
</div>

      <div className="col-lg-7 offset-lg-1 valign">
  <div className="full-width">
  
    <form
      id="contact-form"
      className="form2"
      action="contact.php"
      method="post"
    >
      <div className="messages" />
      <div className="controls row">
        <div className="col-lg-6">
          <div className="form-group mb-30">
            <input
              id="form_name"
              type="text"
              placeholder="Name"
              required=""
              name="name"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group mb-30">
            <input
              id="form_email"
              type="email"
              placeholder="Email"
              required=""
              name="email"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group mb-30">
            <input
              id="form_subject"
              type="text"
              placeholder="Subject"
              name="subject"
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <textarea
              id="form_message"
              name="message"
              placeholder="Message"
              rows={4}
              required=""
              defaultValue={""}
            />
          </div>
          <div className="mt-30">
            <button
              type="submit"
              className="btn main-colorbg "
            >
              <span className="text">Let‘s Talk</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>

      </div>
        </div>
    </section>
  )
}

export default Contact