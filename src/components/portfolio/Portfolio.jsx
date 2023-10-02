/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./portfolio.css"
import Work1 from "../../assets/work1.jpeg"
import Work2 from "../../assets/work2.jpeg"
import Work3 from "../../assets/work3.jpeg"

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
        <h2 data-aos="fade-up"
            data-aos-duration="3000" 
            className="section__title">Portfolio</h2>
        <span data-aos="fade-up"
              data-aos-duration="3000" 
              className="section__subtitle">My recent works</span>

              <div className="portfolio__container container grid">
                <div className="portfolio__content">
                    
                    <div data-aos="fade-right"
                       data-aos-duration="2100"className='work__card1'>
                      <img src={Work1} alt='' className='work__img' />
                      <h3 className='work__title'>FoodMart</h3>
                      <a href="https://kishoresweety.github.io/Grocery-shop-FrontEnd/" className="work__button">
                      Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
                      </a>
                    </div>
                      
                    <div  className='work__card2'></div>
                      <img data-aos="fade-bottom"
                    data-aos-duration="2300" src={Work2} alt='' className='work__img' />
                      <h3 className='work__title'>Tindog</h3>
                      <a href="https://kishoresweety.github.io/tindog/" className="work__button">
                      Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
                      </a>
                    </div>
                    <div data-aos="fade-left"
                    data-aos-duration="2500" className='work__card3'>
                      <img src={Work3} alt='' className='work__img' />
                      <h3 className='work__title'>Foodie</h3>
                      <a href="https://kishoresweety.github.io/Foodie/" className="work__button">
                      Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
                      </a>
                    </div>
              </div>
    </section>
  )
}

export default Portfolio