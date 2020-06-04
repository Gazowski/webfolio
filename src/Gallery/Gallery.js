import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './Gallery.css'

class Gallery extends React.Component{
    render(){
        console.log(this.props)
        return(
            <Carousel 
                autoPlay
                infiniteLoop
                stopOnHover
                interval='4000'>
                {this.props.images.map((image) => (
                    <img src={image.link} 
                        key={image.id} 
                        alt={image.alt}/>
                ))}

            </Carousel>
        )
    }
}

export default Gallery