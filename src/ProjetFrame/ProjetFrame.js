import Iframe from 'react-iframe'
import React from 'react'

import './ProjetFrame.css'

class ProjetFrame extends React.Component{
  
    render(){
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