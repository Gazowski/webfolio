import React from 'react'

import './Block_Content.css'

function BlockContent(data){
    return(
        <div id={data.id} className='blockContent'>
            <h1>{data.title}</h1>
            <div>{data.text}</div>
            <div>{data.children}</div>
        </div>
    )
}

export default BlockContent