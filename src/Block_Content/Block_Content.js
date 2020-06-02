import React from 'react'

import './Block_Content.css'

function BlockContent(data){
    return(
        <div  id={data.id} className={`blockContent ${data.id}`}>
            <h2>{data.title}</h2>
            <div className='content'>{data.text}</div>
            <div>{data.children}</div>
        </div>
    )
}

export default BlockContent