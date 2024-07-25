import React from 'react'
import Work1 from '../../assets/back.jpg';

const WorksItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt="" className='work__img' />
        {/* <video width="640" height="360" controls>
                <source src={item.video} type="video/mp4" />
            </video> */}
        <h3 className="work__tile">{item.title}</h3>
        <a href="" className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
    </div>
  )
}

export default WorksItems