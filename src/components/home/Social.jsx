import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a data-aos="fade-down" data-aos-duration="1000" href="https://www.instagram.com/kishore_gopz/" className="home__social-icon" target='blank'>
            <i className="uil uil-instagram"></i>
        </a>

        <a data-aos="fade-up" data-aos-duration="1150" href="https://github.com/Kishoresweety?tab=repositories" className="home__social-icon" target='blank'>
            <i className="uil uil-github-alt"></i>
        </a>

        <a data-aos="fade-left" data-aos-duration="1300" href="https://www.linkedin.com/in/kishore2000" className="home__social-icon" target='blank'>
        <i className="uil uil-linkedin"></i>
        </a>

    </div>
  )
}

export default Social