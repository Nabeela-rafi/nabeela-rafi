import React from 'react'

const ScrollDown = () => {
  return (
    <div className="home__scroll">
        <a href="#about" className="home__scroll-button button--flex wheel" style={{border:"1px solid var(--title-color)", outline : "1px solid var(--title-color)", padding:"3px", borderRadius:".5rem"}}>
            <i className="uil uil-arrow-down" style={{color:"var(--title-color)"}}></i>
            <span className="home__scroll-name">
                Scroll down
            </span>
        </a>
    </div>
  )
}

export default ScrollDown