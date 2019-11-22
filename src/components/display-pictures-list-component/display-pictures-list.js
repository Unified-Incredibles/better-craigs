import React, { Component } from 'react';
import './display-pictures-list.css';

export default class DisplayPicturesList extends Component {
    displayData = () => {
        return this.props.pictureList.map((picture,ind) => {
            return (
                <div key={ind} className="picture-content">
                    <h3>{picture.Title}</h3>
                    <div >
                    <div className="image-display">
                    <div className="carousal-self-item">
                      <img  src={picture.Images[0]} alt="First slide" />
                    </div>
                     <div className="horizontal-images">
                     {this.displayImages(picture.Images)}
                      </div>
                    </div>
                
</div>
                </div>
            )
        })
    }
    displayImages = (imageList) => {
        console.log("images")
        return imageList.map((image,index) =>{
            console.log("images"+image)
            if(index !== 0){
            
                return (
                <div>
                   <div key={index} >
                     <img  src={image} alt="First slide" />
                   </div>
                </div>
                 )
            }
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
