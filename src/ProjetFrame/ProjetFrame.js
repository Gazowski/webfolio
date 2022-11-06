import Iframe from 'react-iframe'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './ProjetFrame.css'

class ProjetFrame extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            infoClass : 'fade-in',
            iframeAnimation : 'fade-in',
        }
    }

    render(){
        return(
        <div className={`${this.props.iframeClass} ${this.state.iframeAnimation}`}>
            <Iframe className="iframe" src={this.props.link}/>
            <div className="projetIframe-cmd">
                <button
                    className='btn btn--dark'
                    onClick={()=>{this.setState({ infoClass:'fade-in' })}}>Info</button>
                <a className='btn btn--dark'
                    href={this.props.link} 
                    target='_blank' 
                    rel="noopener noreferrer">voir le site</a>
                <button className="btn-close" 
                    onClick={(e)=>{
                            this.setState({iframeAnimation : 'fade-out'})
                            this.setState({ infoClass : 'fade-in' })
                            this.props.closeBtnAction(e)
                            setTimeout(()=>{
                                this.setState({ iframeAnimation : '' })},500)
                        }}><FontAwesomeIcon icon={faTimes} /></button>
            </div>
            <div className={`projetIframe-info ${this.state.infoClass}`}>
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
                    className={`btn btn-dark ${this.props.maintenance ? 'btn--inactived' : ''}`}
                    onClick={() => {
                        this.setState({infoClass : ' fade-out'})
                        setTimeout((e)=>{
                            this.setState({ infoClass : 'projetIframe-info--displayNone fade-in' })},500) }}
                    >Aperçu</button>
            </div>
        </div>

        )
    }
}

export default ProjetFrame