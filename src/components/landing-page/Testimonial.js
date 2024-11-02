import React from 'react'

const Testimonial = (props) => {
    const {name,img,feedback} = props
  return (
    <div class='testimonial flex flex-col' >
        <q>{feedback}</q>
        <div className="flex">
            {
                img ? <img src={img} alt="avatar" /> : '' 
            }
            <h1>{name}</h1>
        </div>
    </div>
  )
}

export default Testimonial
