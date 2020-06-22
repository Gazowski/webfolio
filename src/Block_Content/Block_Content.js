import React from 'react'

import './Block_Content.css'

function BlockContent(data){
    return(
        <div  id={data.id} className={`blockContent blockContent${data.class} ${data.id}`}>
            {data.arrowToPrevious ? data.arrowToPrevious : ''}
            <h2>{data.title}</h2>
            <div>{data.children}</div>
            {data.arrowToNext ? data.arrowToNext : ''}
        </div>
    )
}

export default BlockContent