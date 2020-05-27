import React from 'react'
import Grid from '@material-ui/core/Grid';

import './Cube_Button.css'

function CubeButton(data){
    return(
        <Grid
            item 
            className='cubeButton'>
            <div className='cubeButton--front'>{data.text}</div>
            <div className='cubeButton--bottom'>{data.text}</div>
        </Grid>
    )
}

export default CubeButton