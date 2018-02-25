import React from 'react'
import GalleryList from './galleryList'
import GalleryNavBar from './galleryNavBar'
// import Data from '../api/data.js'

const URL = 'http://localhost:3000/api/v1/paintings'


class GalleryContainer extends React.Component {
  state = {
    gallery_images: [],
    title_filter: '',
    museum_filter: '',
    favorites: false
  }

  componentDidMount() {
    this.fetchImages()
    .then(data => {
      this.setState({
        gallery_images: [...data]
      })
    })
  }

  fetchImages() {
    return fetch(URL).then(res => res.json())
  }

  updateImage(id, status) {
    return fetch(`${URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        liked: status
      })
    })
    .then(res => res.json())
  }


  showFavs = (event) => {
    this.fetchImages()
    .then(data => {
      let favImages = data.filter(image => {return image.liked === true})
      this.setState({
        gallery_images: [...favImages],
        favorites: true
      })
    })
  }

  showAll = (event) => {
    this.fetchImages()
    .then(data => {
      this.setState({
        gallery_images: [...data],
        favorites: false
      })
    })
  }

  changeFav = (event) => {
    let id = parseInt((event.target.id), 10)
    let painting = this.state.gallery_images.filter(image => image.id === id)
    let paintingStatus = !painting[0].liked
    this.updateImage(id, paintingStatus)
    .then(data => {
      this.showFavs()
    })
  }

  sortByYear = (event) => {
    let images = this.state.gallery_images
    let nullDates = []
    let unNullDates = []
    for (let i = 0; i < images.length; i++) {
      if (images[i].date === null) {
        nullDates.push(images[i])
      } else if (typeof images[i].date === 'number') {
        unNullDates.push(images[i])
      } else {
        if (images[i].date.substr(-3, 1) === "-") {
          images[i].date = parseInt(images[i].date.substr(-7, 4), 10)
          unNullDates.push(images[i])
        } else {
          images[i].date = parseInt(images[i].date.substr(images[i].date.length - 4), 10)
          unNullDates.push(images[i])
        }
      }
    }
    unNullDates.sort(function(a, b) {
      return a.date - b.date
    })
    this.setState({
      gallery_images: [...unNullDates, ...nullDates]
    })
  }

  sortByTitle = (event) => {
    let images = [...this.state.gallery_images]
    images.sort(function(a, b) {
      let nameA = a.title.toUpperCase();
      let nameB = b.title.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    this.setState({
      gallery_images: [...images]
    })
  }

  setFilter = (event) => {
    this.setState({
      title_filter: event.target.value
    })
  }

  setMuseum = (event) => {
    this.setState({
      museum_filter: event.target.value
    })
  }

  render() {
    return (
      <div>
        <GalleryNavBar onTitle={this.setFilter} onMuseum={this.setMuseum} fav={this.state.favorites} showAll={this.showAll} showFavs={this.showFavs} sortYear={this.sortByYear} sortTitle={this.sortByTitle} />
        <GalleryList images={this.state.gallery_images} currentFilter={this.state.title_filter} currentMuseum={this.state.museum_filter} changeFav={this.changeFav}/>
      </div>
    )
  }
}

export default GalleryContainer;
