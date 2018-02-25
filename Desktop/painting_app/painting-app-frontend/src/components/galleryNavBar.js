import React from 'react'
import GalleryFilter from './galleryFilter'

const GalleryNavBar = (props) => {
  return (
    <div id="navBar">
      <div id="navBarItems">
        <div>
          <h4>Welcome to the Gallery, B*tches</h4>
        </div>
        <div id="navBarFilter">
          <div className="navBarItem">
            <GalleryFilter onTitle={props.onTitle} onMuseum={props.onMuseum}/>
          </div>
          <div className="navBarItem">
            <button onClick={props.sortYear}>Sort By Year</button>
            <button onClick={props.sortTitle}>Sort By Title</button>
            <button id={props.fav === true ? "navActive" : "navPassive"} onClick={props.showFavs}>Your Favs</button>
            <button id={props.fav === false ? "navActive" : "navPassive"} onClick={props.showAll}>Show all</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default GalleryNavBar
