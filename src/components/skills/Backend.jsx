import React from 'react'

const Backend = () => {
  return (
    <div data-aos="fade-left"
         data-aos-delay="900"
         data-aos-easing="ease-in-sine"
         className="skills__content">
    <h3 className="skills__title">Backend developer</h3>

    <div className="skills__box">
      <div className="skills__group">
        <div className="skills__data">
          <i className="bx bxl-nodejs"></i>
          <div>
            <h3 className="skills__name">Node Js</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>

        <div className="skills__data">
          <i className="bx bx-badge-check"></i>

          <div>
            <h3 className="skills__name">Express Js</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>

        <div className="skills__data">
          <i className="bx bxs-data"></i>

          <div>
            <h3 className="skills__name">MySQL</h3>
            <span className="skills__level">Intermediate</span>
            
          </div>
        </div>
      </div>

      <div className="skills__group">
        <div className="skills__data">
          <i className="bx bxl-firebase"></i>

          <div>
            <h3 className="skills__name">Firebase</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>

        <div className="skills__data">
          <i className="bx bxl-mongodb"></i>

          <div>
            <h3 className="skills__name">MongoDB</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>

        <div className="skills__data">
          <i className="bx bxl-python"></i>

          <div>
            <h3 className="skills__name">Python</h3>
            <span className="skills__level">Intermediate</span>
            
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Backend