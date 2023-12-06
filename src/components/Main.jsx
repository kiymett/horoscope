import React from 'react'
import Card from "./Card"
import './Main.scss'

const Main = ({data}) => {
    console.log(data)
  return (
    <div className='card-container'>
        {
            data.map((data)=>(
                <Card key={data.id} {...data} />
            ))
        }
    </div>
  )
  

}

export default Main