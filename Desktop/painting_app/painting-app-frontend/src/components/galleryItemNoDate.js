import React from 'react'
import {FlexyFlipCard} from 'flexy-flipcards';

class GalleryItemNoDate extends React.Component {
  render() {
    return (
      <div className="galleryItem">
        <FlexyFlipCard frontBackgroundColor='rgb(0, 0, 0)' backBackgroundColor='rgb(0,0,0)'>
          <div>
            <div className="galleryImage" ref='flipper'>
              <img src={this.props.image.image} alt={this.props.image.title} />
            </div>
            <div className="frontGalleryImage" >
              <h4>{this.props.image.title}</h4>
            </div>
          </div>
          <div className="backGalleryImage">
            <h4>By: {this.props.image.artist.name}</h4>
            <h4>Year Created: Unknown</h4>
            <h4>Artist Details:</h4>
            <div className="artistDetails">
              <h5>Birth: {!this.props.image.artist.birthday ? "Unknown" : this.props.image.artist.birthday}</h5>
              <h5>Death: {!this.props.image.artist.deathday ? "Unknown" : this.props.image.artist.deathday}</h5>
              <h5>Hometown: {!this.props.image.artist.hometown ? "Unknown" : this.props.image.artist.hometown}</h5>
            </div>
            <h4>Currently Located:</h4>
            <h4>{!this.props.image.museum.name? "Lost" : this.props.image.museum.name}</h4>
            <button id={this.props.image.id} onClick={this.props.changeFav}>{!this.props.image.liked ? "Add to Favs" : "Remove from Favs"}</button>
            <button ref='flipper'>See Less</button>
          </div>
        </FlexyFlipCard>
      </div>
    )
  }
}
export default GalleryItemNoDate
