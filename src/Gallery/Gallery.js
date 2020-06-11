import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import './Gallery.css'

class Gallery extends React.Component{
    constructor(props){
        super(props)
        this.state = { gallery : '', }
    }

    displayGallery(gallerytoDisplay){
        this.setState({ gallery : gallerytoDisplay })
    }

    emptyCarousel(){
        this.setState({ gallery : '' })
    }

    render(){
        console.log(this.props)
        return(
            <div>
                {this.props.galleries.map((gallery) => (
                    <button key={gallery.title}
                        className="btn btn--fullWidth"
                        onClick={() => {this.displayGallery(gallery)}}>{gallery.title}</button>
                ))}
                {this.state.gallery 
                    ? <div className='carouselWrapper'>
                        <Carousel 
                            autoPlay
                            infiniteLoop
                            stopOnHover
                            showStatus={false}
                            showThumbs={false}
                            interval='4000'
                            transitionTime='1000'>
                            {this.state.gallery.images.map((image) => (
                                <img src={image.link} 
                                    key={image.id} 
                                    alt={image.alt}/>
                            ))}
                        </Carousel>
                        {this.state.gallery.link
                            ? <a href={this.state.gallery.link} 
                                target='_blank'
                                rel="noopener noreferrer">visiter le site de {this.state.gallery.cieName}</a>
                            : ''}
                        <button className="carousel-btnClose"
                            onClick={() => {this.emptyCarousel()}}>X</button>
                    </div>

                    : ''
                }
            </div>
        )
    }
}

export default Gallery