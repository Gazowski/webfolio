import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './Gallery.css'

class Gallery extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                {this.props.galleries.map((gallery) => (
                    <div key={gallery.title}>
                        <h3 className='gallery-title'>{gallery.title}</h3>
                        <Carousel 
                            autoPlay
                            infiniteLoop
                            stopOnHover
                            showStatus={false}
                            showThumbs={false}
                            interval='4000'
                            transitionTime='1000'>
                            {gallery.images.map((image) => (
                                <img src={image.link} 
                                    key={image.id} 
                                    alt={image.alt}/>
                            ))}
                        </Carousel>
                    </div> 
                ))}
            </div>
        )
    }
}

export default Gallery