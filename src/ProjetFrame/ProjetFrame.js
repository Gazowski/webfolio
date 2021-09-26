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
            isInMaintenance: this.props.maintenance ? 'btn--inactived' : '',
        }
    }

    render(){
        let button = '';
        let iframeVideo = '';
        let iframeSite = '';
        let iframeCommand = '';
        if(!this.props.video) {
            button =  <button
                className={`btn btn-dark ${this.props.maintenance ? 'btn--inactived' : ''}`}
                onClick={() => {
                    this.setState({infoClass : ' fade-out'})
                    setTimeout((e)=>{
                        this.setState({ infoClass : 'projetIframe-info--displayNone fade-in' })},500) }}
                >{this.props.maintenance ? 'Site en maintenance':'Aperçu'}</button>;
            iframeSite = <Iframe className="iframe" src={this.props.link}/>;
            iframeCommand = 
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
                </div>;
        } else {
            iframeVideo = 
                <Iframe 
                    className="iframe iframe--video"
                    frameborder="0" 
                    width="100%" 
                    height="100%"  
                    src={this.props.link}/>;
            iframeCommand =                     
                <button className="btn-close" 
                    onClick={(e)=>{
                            this.setState({iframeAnimation : 'fade-out'})
                            this.setState({ infoClass : 'fade-in' })
                            this.props.closeBtnAction(e)
                            setTimeout(()=>{
                                this.setState({ iframeAnimation : '' })},500)
                        }}><FontAwesomeIcon icon={faTimes} />
                </button>
        }
        return(
        <div className={`${this.props.iframeClass} ${this.state.iframeAnimation}`}>
            { iframeSite }
            { iframeCommand }
            <div className={`projetIframe-info ${this.state.infoClass}`}>
                <div className="projetIframe-info__wrapper">
                    <div className="projetIframe-info__text-wrapper">
                        <h3>{this.props.title}</h3>
                        {this.props.descriptions.map((description) => (
                            <p key={description}>{description}</p>
                        ))}
                        <div>
                            {this.props.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="video__wrapper">
                        { iframeVideo }
                    </div>
                </div>
                { button }
            </div>
        </div>

        )
    }
}

export default ProjetFrame