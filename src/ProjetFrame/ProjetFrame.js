import Iframe from 'react-iframe'
import React from 'react'

import './ProjetFrame.css'

class ProjetFrame extends React.Component{
    // handleClick = (e) =>{
    //     let frameContainer = document.querySelector('.projetIframe')
    //     e.preventDefault()
    //     frameContainer.classList.replace('projetIframe--display','projetIframe--none')
    // }

    // displayFrame(){
    //     console.log(this.props.link)
    //     let frameContainer = document.querySelector('.projetIframe')
    //     if (frameContainer.classList.contains('projetIframe--none'))
    //         frameContainer.classList.remove('projetIframe--none')
    //     return 'projetIframe--display'
    // }
    
    render(){
        console.log(this.props)
        return(
        <div className={this.props.iframeClass}>
            <Iframe className="iframe" src={this.props.link}/>
            <div className="projetIframe-description">
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
                <button 
                    className='projetIframe-closeButton'
                    onClick={(e)=>{this.props.closeBtnAction(e)}}>x</button>
            </div>
        </div>
        )
    }
}

export default ProjetFrame