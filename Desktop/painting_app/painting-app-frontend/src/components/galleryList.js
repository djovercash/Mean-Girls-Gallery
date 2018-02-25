import React from 'react'
import GalleryItem from './galleryItem'
import GalleryItemNoDate from './galleryItemNoDate'

const switchFunction = (image, changeFav) => {
  switch(typeof image.date) {
    case ('object'):
      return ([
        <GalleryItemNoDate image={image} key={image.id} changeFav={changeFav}/>
      ]);
    case ('number'):
      return ([
        <GalleryItem image={image} key={image.id} changeFav={changeFav}/>
      ]);
    case ('string'):
      return ([
        <GalleryItem image={image} key={image.id} changeFav={changeFav}/>
      ]);
    default:
      return ([
        <GalleryItem image={image} key={image.id} changeFav={changeFav}/>
      ]);
    }
  }


const GalleryList = (props) => {
  const images = props.images
  const changeFav = props.changeFav
  const filteredImages = images.filter(image => image.title.toUpperCase().includes(props.currentFilter.toUpperCase()))
  const filteredMuseumImages = filteredImages.filter(image => image.museum.name.toUpperCase().includes(props.currentMuseum.toUpperCase()))
  return (
    <div >
      <div id="galleryList">
      {(() => {
             switch (props.currentMuseum) {
                 case (''):
                     return filteredImages.map(image => {
                       return switchFunction(image, changeFav)
                     });
                 default :
                     return filteredMuseumImages.map(image => {
                       return switchFunction(image, changeFav)
                     })
             }
         })()}
      </div>
    </div>
  )
}

export default GalleryList
