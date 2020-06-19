import React from 'react'
import ProjetFrame from '../ProjetFrame/ProjetFrame'

import './Website_Link.css'

class WebsiteLink extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            iframeClass : 'projetIframe--none',
            linkToDisplay : '',
            projectTitle : '',
            projectDescriptions : [],
            projectTags : [],
          }
    }

    handleClick = (e,siteInfo) => {
        console.log(siteInfo)
        e.preventDefault()
        this.setState({
          iframeClass : 'projetIframe--display', 
          linkToDisplay : siteInfo.link,
          projectTitle : siteInfo.title,
          projectDescriptions : siteInfo.description,
          projectTags : siteInfo.tags,
         })
      }
        
    handleCloseBtn = (e) =>{
    e.preventDefault()
    this.setState({ iframeClass : 'projetIframe--none '})
    }
    
    render(){
            return(
                <div>
                    {this.props.allSites.map((site) => (
                        <div className='webSiteLink'
                            key={site.key}>
                            <button 
                                className='btn btn--fullWidth'
                                onClick={(e) => {this.handleClick(e,site)}}>{site.title}</button>
                        </div>
                    ))}
                    <ProjetFrame 
                        key="iframe" 
                        iframeClass={`projetIframe ${this.state.iframeClass}`}
                        link={this.state.linkToDisplay}
                        title={this.state.projectTitle}
                        descriptions={this.state.projectDescriptions}
                        tags={this.state.projectTags}
                        closeBtnAction={(e) => {this.handleCloseBtn(e)}}/>
                </div>
                
        )
    }
}

export default WebsiteLink