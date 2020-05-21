import React from 'react';
import Title from './Title/Title'
import Tile from './Tile/Tile'
import ProfilContent from './Profil_Content/Profil_Content'
import Box from '@material-ui/core/Box';

import './App.css';

/**
 * TITRE
 */
const TITLE = {
  title : 'Gaël_C',
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
  class : 'tile profil',
  title : 'Artisan du Web',
  children : <ProfilContent />,
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
   class : 'tile my_sites',
   title : 'Mes sites Internets',
   children : 'blablablablabla',
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
   class : 'tile my_works',
   title : 'Mes Illustrations',
   children : 'blablablablabla',
 }

function App() {
  return (
    <Box p={2}>      
      <Title {...TITLE}/>
      <Tile {...PROFIL_SETTING} {...PROFIL_CONTENT} />
      <Tile {...MY_SITES_SETTING} {...MY_SITES_CONTENT} />
      <Tile {...MY_WORKS_SETTING} {...MY_WORKS_CONTENT} />
    </Box>
  );
}

export default App;
