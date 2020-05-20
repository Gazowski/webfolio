import React from 'react';
import Title from './Title/Title'
import Box from '@material-ui/core/Box';
import Image from './img/pathway-leading-to-the-hills-3646207.jpg'

import './App.css';

/**
 * tuile titre
 */
const title =
  {title : 'Gaël C.',}

const styles = {
  boxImage:{
    height: '100vh',
    backgroundImage:`url(${Image})`,
    backgroundSize:'cover',

  }
}

function App() {
  return (
    <Box  style={styles.boxImage} >
      <Box m={2} >
      <Title {...title}/>
    </Box>  
    </Box>
  );
}

export default App;
