import React from 'react'
import GalleryFilter from './galleryFilter'

const GalleryNavBar = (props) => {
  return (
    <div id="navBar">
      <div id="navBarItems">
        <div id="navBarTitle">
          <img src="./Regina_2.jpg" alt="Regina George"/>
          <h3>Welcome to the Gallery, B*tches</h3>
        </div>
        <div id="navBarFilter">
          <div className="navBarItem">
            <GalleryFilter onTitle={props.onTitle} onMuseum={props.onMuseum}/>
          </div>
          <div className="navBarItem">
            <div className="navBarButtons">
              <button onClick={props.sortYear}>B*tches' Birthdays</button>
              <button onClick={props.sortTitle}>It's ABC's, B*tch</button>
            </div>
            <div className="navBarButtons">
              <button id={props.fav === true ? "navActive" : "navPassive"} onClick={props.showFavs}>Home B*tches</button>
              <button id={props.fav === false ? "navActive" : "navPassive"} onClick={props.showAll}>All 'em B*tches</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default GalleryNavBar
