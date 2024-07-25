import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://api.whatsapp.com/send?phone=923417501284&text=Hello, more information!" className="home__social-icon" target="_blank">
            <i className="uil uil-whatsapp"></i>
        </a>

        <a href="https://www.linkedin.com/in/nabeela-rafi" className="home__social-icon" target="_blank">
            <i className="uil uil-linkedin"></i>
        </a>

        <a href="https://github.com/Nabeela-rafi" className="home__social-icon" target="_blank">
            <i className="uil uil-github-alt"></i>
        </a>
    </div>
  )
}

export default Social;