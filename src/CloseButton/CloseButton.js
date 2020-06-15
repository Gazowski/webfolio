import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

class CloseButton extends React.Component{
    render(){
        return(
            <button className="btn-close" 
                onClick={this.props.action}><FontAwesomeIcon icon={faTimes} /></button>
        )
    }
}

export default CloseButton