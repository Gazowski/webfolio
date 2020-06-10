import React from 'react'

import './Website_Link.css'

class WebsiteLink extends React.Component{

    render(){
            return(
            <div className='webSiteLink'>
                <button 
                    className='btn btn--light'
                    onClick={(e) => {this.props.action(e,this.props)}}>{this.props.title}</button>
            </div>
        )
    }
}

export default WebsiteLink