import React from 'react';
import Title from './Title/Title'
import Tile from './Tile/Tile'
import Box from '@material-ui/core/Box';
import Image from './img/lighted-up-alleyway-1294671.jpg'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './App.css';

/**
 * TITRE
 */
const TITLE = {
  title : 'Gaël C.',
}

/**
 * PROFIL
 */
const PROFIL_SETTING = {
  elevation : 2,
  margin : 2,
  padding : 2,
}

const PROFIL_CONTENT = {
  title : 'Développeur Web',
  content : 'blablablablbbla...'
}

/**
 * MY SITES
 */

 const MY_SITES_SETTING = {
  elevation : 2,
  margin : 2,
  padding : 2,
 }

 const MY_SITES_CONTENT = {
   title : 'Mes sites Internets',
   content : 'blablablablabla',
 }

/**
 * MY WORKS
 */

 const MY_WORKS_SETTING = {
  elevation : 2,
  margin : 2,
  padding : 2,
 }

 const MY_WORKS_CONTENT = {
   title : 'Mes Illustrations',
   content : 'blablablablabla',
 }

/**
 * STYLES
 */

const theme = createMuiTheme({
  palette : {
    primary : {
      main : 'hsla(71%, 29%, 67%, 1)',
    }
  },
})

const STYLES = {
  boxImage:{
    height: '100vh',
    backgroundImage:`url(${Image})`,
    background: `linear-gradient(180deg, rgba(58,3,66,.95) 1%, rgba(162,6,184,0) 67%),url(${Image})`,
    backgroundSize:'contain',
    //background: 'rgb(58,3,66)',

  }
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <Box  style={STYLES.boxImage} p={2}>      
      <Title {...TITLE} {...STYLES}/>
      <Tile {...PROFIL_SETTING} {...PROFIL_CONTENT} />
      <Tile {...MY_SITES_SETTING} {...MY_SITES_CONTENT} />
      <Tile {...MY_WORKS_SETTING} {...MY_WORKS_CONTENT} />
    </Box>
    </MuiThemeProvider>
  );
}

export default App;
