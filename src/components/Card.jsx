import React from 'react'

const Card = ({id,title, date,desc, image}) => {
  return (
        <div className="cards">
            <div className = "title">
                <h1>{title}</h1>
            </div>
            <div className = "date">
                <h3>{date}</h3>
            </div>
            <img src={image} alt="foto" width="250px"/>
            <div className = "card-over">
                <p>{desc}</p>
            </div>
        </div>
  )
}

export default Card