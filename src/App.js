import React from 'react';
import Title from './Title/Title'
import Menu from './Menu/Menu'
import Presentation from './Presentation/Presentation'
import Folio from './Folio/Folio'
import Footer from './Footer/Footer'
import Box from '@material-ui/core/Box';
import Image from './img/pathway-leading-to-the-hills-3646207.jpg'

import './App.css';

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
      <Title />
      <Menu />
      <Presentation />
      <Folio />
      <Footer />
    </Box>  
    </Box>
  );
}

export default App;
