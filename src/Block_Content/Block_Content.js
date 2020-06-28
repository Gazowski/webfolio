import React from 'react'

import './Block_Content.css'

function BlockContent(data){
    return(
        <section  id={data.id} className={`blockContent blockContent${data.class} ${data.id}`}>
            {data.arrowToPrevious ? data.arrowToPrevious : ''}
            {data.title}
            <div>{data.children}</div>
            {data.arrowToNext ? data.arrowToNext : ''}
        </section>
    )
}

export default BlockContent