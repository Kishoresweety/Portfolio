import React from 'react'

const Info = () => {
  return (
    <div  className="about__info grid">

      <div data-aos="fade-left"
          data-aos-duration="2100" 
          className="about__box">
        <i className="bx bx-award about__icon"></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">&lt;1 years working</span>
        </div>

        <div data-aos="fade-up"
             data-aos-duration="2300" 
             className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">5 + Projects</span>
        </div>

        <div data-aos="fade-right"
             data-aos-duration="2500" 
             className="about__box">
        <i className="bx bx-support about__icon"></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  )
}

export default Info