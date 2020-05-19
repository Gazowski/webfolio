import React from 'react'
import { Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';

function Menu(){
    return(
        
        <Paper  elevation={3} square>
            <Box m={2} p={2}>Je suis le Menu</Box>
        </Paper>
    )
}

export default Menu;