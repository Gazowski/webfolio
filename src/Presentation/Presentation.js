import React from 'react'
import { Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import profilPic from '../img/adorable-dog.jpg'

const styles = {
    profilPic:{
      height: '140px',
      backgroundImage:`url(${profilPic})`,
      backgroundSize:'cover',
      backgroundPosition:'bottom'

  
    }
}

function Presentation(){
    return(
        <Paper elevation={3} square>
            <Box m={2} p={2}>
                <h3>Développeur WEB</h3>
            </Box>
        <div
          style = {styles.profilPic}
        />
        </Paper>
    )
}

export default Presentation;