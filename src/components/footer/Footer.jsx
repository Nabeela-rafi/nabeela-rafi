import React from 'react'
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h3 className="footer__title">Nabeela</h3>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#qualification" className="footer__link">Qualification</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://api.whatsapp.com/send?phone=923417501284&text=Hello, more information!" className="footer__social-link" target="_blank">
                    <i className="uil uil-whatsapp"></i>
                </a>

                <a href="https://www.linkedin.com/in/nabeela-rafi" className="footer__social-link" target="_blank">
                    <i className="uil uil-linkedin"></i>
                </a>

                <a href="https://github.com/Nabeela-rafi" className="footer__social-link" target="_blank">
                    <i className="uil uil-github-alt"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Nabeelarafi. All rights reserved</span>

        </div>
    </footer>
  )
}

export default Footer