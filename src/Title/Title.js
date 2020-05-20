import React from 'react'
import Box from '@material-ui/core/Box';

function Title(title){
    return(
        <Box p={2} >
            <h1 color="primary">{title.title}</h1>
        </Box>
    )
}

export default Title;