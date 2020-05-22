import React from 'react'
import { Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import './Tile.css'

function Tile(tile){
    return(
        <Grid
            className='cubeWrapper'
            container
            item
            direction="column"
            justify="center"
            alignItems="center"
            xs={12}
            spacing={2}>
            <div className='cubeContainer'>
            <Paper
                elevation={tile.elevation} 
                square>
                <Box 
                    className = {tile.class}  
                    p={tile.padding}>
                    <h3>{tile.title}</h3>
                    <div>{tile.children}</div>
                </Box>
            </Paper>
            <Paper
                className='hiddenFace'
                elevation={tile.elevation} 
                square>
                <Box 
                    className = {tile.class}  
                    p={tile.padding}>
                    <h3>mon profil</h3>
                    <div>des info,des info</div>
                </Box>
            </Paper>
            </div>
        </Grid>
    )
}

export default Tile;