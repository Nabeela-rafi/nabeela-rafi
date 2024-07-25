import React from 'react'

const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">Nabeela Rafi</h1>
        <h3 className="home__subtitle">Full Stack Web Developer</h3>
        <p className="home__description">I am a full stack web developer from Pakistan.</p>
        <a href="#contact" className="button button--flex">
            Say Hello<i className="uil uil-message" style={{color:"var(--container-color)"}}></i>
        </a>
    </div>
  )
}

export default Data