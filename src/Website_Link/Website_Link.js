import React from 'react'

import './Website_Link.css'

function WebsiteLink(prop){
    return(
        <div className='webSiteLink'>
            <a href={prop.link}>{prop.text}</a>
        </div>
    )
}

export default WebsiteLink