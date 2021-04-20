import React from 'react'

const PictureArray = (props) => {
  return (
    <div>
      <img src={props.picture} alt="project" className='project-image'/>
    </div>
  )
}

export default PictureArray
