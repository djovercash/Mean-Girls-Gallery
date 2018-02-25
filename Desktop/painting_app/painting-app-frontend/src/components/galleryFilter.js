import React from 'react'

const GalleryFilter = (props) => {
  return (
    <div id="imgFilter">
      <div id="imgFilterTitle">
        <h4>Search by Title:  </h4>
        <input placeholder="Title" onChange={props.onTitle} />
      </div>
      <div id="imgFilterMuseum">
        <h4>Search by Museum:  </h4>
        <input placeholder="Museum" onChange={props.onMuseum} />
      </div>
    </div>
  )
}

export default GalleryFilter
