import React, { Component } from 'react';
import './display-pictures-list.css';

export default class DisplayPicturesList extends Component {
    displayData = () => {
        return this.props.pictureList.map((picture,ind) => {
            return (
                <div key={ind} className="picture-content">
                    <h3>{picture.Title}</h3>
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                     <div class="carousel-inner">
                     {this.displayImages(picture.Images)}
                      </div>
                      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                   <span class="sr-only">Previous</span>
             </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
             <span class="sr-only">Next</span>
       </a>
</div>
                </div>
            )
        })
    }
    displayImages = (imageList) => {
        console.log("images")
        return imageList.map((image,index) =>{
            console.log("images"+image)
            return (
                <div key={index} className="carousal-self-item">
                <img className="d-block w-100" src={image} alt="First slide" />
                </div>
            )
        })
    }
    render() {
        return (
            <div className="display-pictures-list-content">
                {this.displayData()}
            </div>
        )
    }
}
