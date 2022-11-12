import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import './Gallery.css'

class Gallery extends React.Component{
    constructor(props){
        super(props)
        this.state = { 
            gallery : '', 
            galleryAnimation : '' ,
        }
    }

    render(){
        return(
            <div>
                {this.props.galleries.map((gallery) => (
                    <button key={gallery.title}
                        className="btn btn--fullWidth"
                        onClick={() => {this.setState({ 
                            gallery : gallery,
                            galleryAnimation : 'fade-in',
                         })}}>{gallery.title}</button>
                ))}
                {this.state.gallery 
                    ? <div className={`carouselWrapper ${this.state.galleryAnimation}`}>
                        <Carousel
                            infiniteLoop 
                            stopOnHover={false}
                            showStatus={false}
                            showThumbs={false}
                            centerMode
                            centerSlidePercentage={60}
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
                        <button className="btn-close" 
                            onClick={() => {
                                this.setState({ galleryAnimation : 'fade-out'})
                                setTimeout(()=>{this.setState({ gallery : '' })},500)}}><FontAwesomeIcon icon={faTimes} /></button>
                    </div>

                    : ''
                }
            </div>
        )
    }
}

export default Gallery