import React from 'react'
import "./PictureArray.css"

const PictureArray = (props) => {
  return (
    <div>
      <img src={props.picture} className='project-image'/>
    </div>
  )
}

export default PictureArray
