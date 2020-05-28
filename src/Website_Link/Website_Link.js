import React from 'react'

import './Website_Link.css'

function WebsiteLink(prop){
    return(
        <div className='webSiteLink'>
            <a href={prop.link} target='_blank' rel="noopener">{prop.text}</a>
        </div>
    )
}

export default WebsiteLink