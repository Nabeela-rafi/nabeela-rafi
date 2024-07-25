import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_qb45zaa', 'template_h5xk00w', form.current, {
            publicKey: '67Mh294gSJsSViUDR',
          })
          .then(
            e.target.reset()
          );
      };
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">

            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>
                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>
                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">nabeela1492000@gmail.com</span>
                        <a href="mailto:nabeela1492000@gmail.com" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className='bx bxl-whatsapp contact__card-icon'></i>
                        <h3 className="contact__card-title">Whatsapp</h3>
                        <span className="contact__card-data">+92 341 7501284</span>
                        <a href="https://api.whatsapp.com/send?phone=923417501284&text=Hello, more information!" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className='bx bxl-linkedin contact__card-icon'></i>
                        <h3 className="contact__card-title">LinkedIn</h3>
                        <span className="contact__card-data">LinkedIn profile link</span>
                        <a href="https://www.linkedin.com/in/nabeela-rafi" className="contact__button">Write me <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>


                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Write me your project</h3>
                <form className="contact__form" ref={form} onSubmit={sendEmail}>
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="text" name='name' className='contact__form-input' placeholder='Insert your name' />
                    </div>
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Mail</label>
                        <input type="email" name='email' className='contact__form-input' placeholder='Insert your email' />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Project</label>
                        <textarea name="project" cols='30' rows='6' className='contact__form-input' placeholder='Write your project requirements'></textarea>
                    </div>
                    <button className='button button--flex'>Send Message <i className='bx bx-send' ></i></button>
                </form>
            </div>

        </div>
    </section>
  )
}

export default Contact
