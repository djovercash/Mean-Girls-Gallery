import React from 'react'

const GalleryFilter = (props) => {
  return (
    <div id="imgFilter">
      <div id="imgFilterTitle">
        <h5>Find dat B*tch:  </h5>
        <input placeholder="B*tch's Name" onChange={props.onTitle} />
      </div>
      <div id="imgFilterMuseum">
        <h5>Find B*tch's House:  </h5>
        <input placeholder="B*tch's House" onChange={props.onMuseum} />
      </div>
    </div>
  )
}

export default GalleryFilter
