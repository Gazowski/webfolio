import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ContactForm from "../ContactForm/ContactForm"

import './Title.css'

class Title extends React.Component{
    openContactForm(){
        let form = document.querySelector('.contactForm')
        form.classList.toggle('displayNone')
    }
    render(){
        return(
            <div className='title'>
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
                <div>
                    <button className="btn btn--iconLight" 
                        onClick={this.openContactForm}>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </button>
                </div>
                <ContactForm class="contactForm overlay displayNone"/>      
            </div>
        )
    }
}

export default Title;