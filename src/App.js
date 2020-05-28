import React from 'react';
import Title from './Title/Title'
import Tile from './Tile/Tile'
import ProfilContent from './Profil_Content/Profil_Content'
import WebsiteLink from './Website_Link/Website_Link'
import CubeButton from './Cube_Button/Cube_Button'
import BlockContent from './Block_Content/Block_Content'
import { Link, animateScroll as scroll } from "react-scroll";

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

const PROFIL_CONTENT = {
  class : 'tile profil',
  id : 'profil',
  button_title : 'Profil',
  title : 'Artisan du Web',
  text : 'blablasbalsavals',
}

/**
 * MY SITES
 */

 const MY_SITES_CONTENT = {
   class : 'tile my_sites',
   id : 'siteWeb',
   button_title : 'Sites Web',
   title : 'Mes sites Internets',
   children : <WebsiteLink />,
 }

/**
 * MY WORKS
 */

 const MY_WORKS_CONTENT = {
   class : 'tile my_works',
   id : 'illustrations',
   button_title : 'Illustrations',
   title : 'Mes Illustrations',
   children : 'blablablablabla',
 }

function App() {
  return (
    <div>
      <Title {...TITLE}/>
      <div className='main-wrapper'>
        <nav className='menu-wrapper'>
          <CubeButton {...PROFIL_CONTENT} />
          <CubeButton {...MY_SITES_CONTENT} />
          <CubeButton {...MY_WORKS_CONTENT} />
        </nav>
        <div className='mainContent'>
          <BlockContent {...PROFIL_CONTENT} />
          <BlockContent {...MY_SITES_CONTENT} />
          <BlockContent {...MY_WORKS_CONTENT} />

        </div>

        {/* <Tile {...PROFIL_SETTING} {...PROFIL_CONTENT} />
        <Tile {...MY_SITES_SETTING} {...MY_SITES_CONTENT} />
        <Tile {...MY_WORKS_SETTING} {...MY_WORKS_CONTENT} /> */}
      </div>
    </div>
  );
}

export default App;
