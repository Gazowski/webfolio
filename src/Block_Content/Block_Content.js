import React from 'react'
import Grid from '@material-ui/core/Grid';

import './Block_Content.css'

function BlockContent(data){
    return(
        <Grid 
            item
            className='blockContent'>
            <h1>{data.title}</h1>
            <div>{data.text}</div>
        </Grid>
    )
}

export default BlockContent