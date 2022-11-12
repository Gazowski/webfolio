import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn , faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCodepen } from '@fortawesome/free-brands-svg-icons'
//import ContactForm from "../ContactForm/ContactForm"

import './Title.css'

class Title extends React.Component{
    openContactForm(){
        let form = document.querySelector('.contactForm')
        form.classList.toggle('displayNone')
    }
    render(){
        return(
            <div id='title' className='title'>
                <h1>{this.props.title}</h1>
                <div className="subtitle">
                    {this.props.subtitle.map((line,index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
                <div>
                    <a href="mailto:gael_comeau@hotmail.com?subject=J'ai%20vu%20ton%20Webfolio&body=Bonjour%20Ga%C3%ABl%2C%0D%0A%0D%0A"
                        className="btn btn--iconLight" 
                        /*onClick={this.openContactForm}*/>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </a>
                    <a className="btn btn--iconLight" 
                        href='https://www.linkedin.com/in/gael-comeau-surlinked' 
                        target='_blank'
                        rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedinIn}/>
                    </a>
                    <a className="btn btn--iconLight" 
                        href='https://codepen.io/gazowski/' 
                        target='_blank'
                        rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faCodepen}/>
                    </a>
                    <a className="btn btn--iconLight" 
                        href='https://github.com/Gazowski' 
                        target='_blank'
                        rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </div>
                {/* <ContactForm class="contactForm overlay displayNone"/>       */}
            </div>
        )
    }
}

export default Title;