import React from 'react'
import { Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';

function Tile(tileSetting,tileContent){
    return(
        <Paper elevation={tileSetting.elevation} square>
            <Box m={tileSetting.magin} p={tileSetting.padding}>
                <h3>{tileContent.title}</h3>
                <p>{tileContent.content}</p>
            </Box>
        </Paper>
    )
}

export default Tile;