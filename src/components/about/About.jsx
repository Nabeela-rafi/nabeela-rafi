import React from 'react'
import './about.css';
import AboutImg from '../../assets/about.webp';
import Info from './Info';
const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>
        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
            <div className='about__data'>
                <Info />
                <p className="about__description">
                    A full stack developer having experience with different frameworks such as laravel, React and django. Have worked on various projects in the team and individually as well.
                </p>
                <a href="#" download="" className="button button--flex">Download CV<i className="uil uil-file-download" style={{color:"var(--container-color)"}}></i></a>
            </div>
        </div>
    </section>
  )
}

export default About;