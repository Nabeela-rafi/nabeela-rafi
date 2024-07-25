import React, { useState } from 'react'
import './services.css';
const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className="services section" id="services">
        <h2 class="section__title">Services</h2>
        <span class="section__subtitle">What I offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Web <br /> Designer</h3>
                </div>

                <span className="services__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                  <div class="services__modal-content">
                    <i onClick={() =>toggleTab(0)} class="uil uil-times services__modal-close"></i>
                    <h3 class="services__modal-title">Web Designer</h3>
                    <p class="services__modal-description">Services in many technical solutions and provide quality services to the clients and companies.</p>
                    <ul class="services__modal-services grid">

                      <li class="services__modal-service">
                        <i class="uil uil-check-circle services__modal-icon"></i>
                        <p class="services__modal-info">I develope the user interface.</p>
                      </li>

                      <li class="services__modal-service">
                        <i class="uil uil-check-circle services__modal-icon"></i>
                        <p class="services__modal-info">Web page designing.</p>
                      </li>

                      <li class="services__modal-service">
                        <i class="uil uil-check-circle services__modal-icon"></i>
                        <p class="services__modal-info">I create prototypes.</p>
                      </li>

                      <li class="services__modal-service">
                        <i class="uil uil-check-circle services__modal-icon"></i>
                        <p class="services__modal-info">I create logos for my web designing.</p>
                      </li>

                      <li class="services__modal-service">
                        <i class="uil uil-check-circle services__modal-icon"></i>
                        <p class="services__modal-info">I create UX element interaction.</p>
                      </li>

                    </ul>
                  </div>
                </div>

            </div>

            <div className="services__content">
              <div>
                  <i className="uil uil-arrow services__icon"></i>
                  <h3 className="services__title">UI/UX <br /> Designer</h3>
              </div>

              <span onClick={() =>toggleTab(2)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

              <div class={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                <div class="services__modal-content">
                  <i onClick={() =>toggleTab(0)} class="uil uil-times services__modal-close"></i>
                  <h3 class="services__modal-title">UI/UX Designer</h3>
                  <p class="services__modal-description">Services in many technical solutions and provide quality services to the clients and companies.</p>
                  <ul class="services__modal-services grid">

                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p class="services__modal-info">I develope the user interface.</p>
                    </li>

                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p class="services__modal-info">Web page development.</p>
                    </li>

                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p class="services__modal-info">I create UX element interaction.</p>
                    </li>

                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p class="services__modal-info">I create prototyping.</p>
                    </li>


                  </ul>
                </div>
              </div>

            </div>

            <div className="services__content">
              <div>
                  <i className="uil uil-edit services__icon"></i>
                  <h3 className="services__title">Full Stack <br /> Developer</h3>
              </div>

              <span onClick={() =>toggleTab(3)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

              <div class={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                <div class="services__modal-content">
                  <i onClick={() =>toggleTab(0)} class="uil uil-times services__modal-close"></i>
                  <h3 class="services__modal-title">Full Stack Developer</h3>
                  <p class="services__modal-description">Services in many technical solutions and provide quality services to the clients and companies.</p>
                  <ul class="services__modal-services grid">

                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p class="services__modal-info">I develope the user interface.</p>
                    </li>

                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p class="services__modal-info">Frontend Web development.</p>
                    </li>

                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p class="services__modal-info">Backend development.</p>
                    </li>

                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p class="services__modal-info">database management and administration.</p>
                    </li>

                    <li class="services__modal-service">
                      <i class="uil uil-check-circle services__modal-icon"></i>
                      <p class="services__modal-info">I create Documentation.</p>
                    </li>

                  </ul>
                </div>
              </div>

            </div>
        </div>
    </section>
  )
}

export default Services;
