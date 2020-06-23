import Iframe from 'react-iframe'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './ProjetFrame.css'

class ProjetFrame extends React.Component{
    
    toggleInfo(){
        let info = document.querySelector('.projetIframe-info')
        info.classList.toggle('projetIframe-info--displayNone')
    }
  
    render(){
        let info = document.querySelector('.projetIframe-info')
        if(info && info.classList.contains('projetIframe-info--displayNone'))
            info.classList.remove('projetIframe-info--displayNone')
        return(
        <div className={this.props.iframeClass}>
            <Iframe className="iframe" src={this.props.link}/>
            <div className="projetIframe-cmd">
                <button
                    className='btn btn--dark'
                    onClick={this.toggleInfo}>Info</button>
                <a className='btn btn--dark'
                    href={this.props.link} 
                    target='_blank' 
                    rel="noopener noreferrer">voir le site</a>
                <button className="btn-close" 
                    onClick={(e)=>{
                        this.props.closeBtnAction(e)
                        this.toggleInfo()
                        }}><FontAwesomeIcon icon={faTimes} /></button>
            </div>
            <div className='projetIframe-info'>
                <h3>{this.props.title}</h3>
                {this.props.descriptions.map((description) => (
                    <p key={description}>{description}</p>
                ))}
                <div>
                    {this.props.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
                <button
                    className='btn btn-dark'
                    onClick={() => {this.toggleInfo()}}>Aperçu</button>
            </div>
        </div>

        )
    }
}

export default ProjetFrame