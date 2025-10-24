import React from 'react'

const Services = (props) => {
  return (
    <div className='service'>
        <h3>{props.title}</h3>
        <p>{props.detail}</p>
    </div>
  )
}

export default Services