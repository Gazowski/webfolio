import React from 'react'
import { Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import './Tile.css'

function Tile(tile){
    return(
        <Paper
            elevation={tile.elevation} 
            square>
            <Box 
                className = {tile.class}  
                m={tile.margin} 
                p={tile.padding}>
                <h3>{tile.title}</h3>
                <div>{tile.children}</div>
            </Box>
        </Paper>
    )
}

export default Tile;