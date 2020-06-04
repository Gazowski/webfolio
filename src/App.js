import React from 'react';
import Title from './Title/Title'
import Tile from './Tile/Tile'
import ProfilContent from './Profil_Content/Profil_Content'
import WebsiteLink from './Website_Link/Website_Link'
import CubeButton from './Cube_Button/Cube_Button'
import BlockContent from './Block_Content/Block_Content'
import { Link, animateScroll as scroll } from "react-scroll"
import ProjetFrame from './ProjetFrame/ProjetFrame'
import Gallery from './Gallery/Gallery'

import './App.css';

/**
 * A FAIRE : 
 *    - mettre tous les sites statiques en HTTPS !
 *    - rotation menu auto sur mobile
 *    - ajouter flèche de navigation
 */

class App extends React.Component {
  constructor(props){
    super(props)
    this.initCSS()
    this.state = {
      iframeClass : 'projetIframe--none',
      linkToDisplay : '',
      projectTitle : '',
      projectDescription : '',
    }
  }

  initCSS(){
    // correction apporté pour échappé la barre de menu sur les mobiles
    // vu sur https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  handleClick = (e,props) => {
    console.log(props)
    e.preventDefault()
    this.setState({
      iframeClass : 'projetIframe--display', 
      linkToDisplay : props.link,
      projectTitle : props.title,
      projectDescription : props.description,
     })
  }
    
    handleCloseBtn = (e) =>{
      e.preventDefault()
      this.setState({ iframeClass : 'projetIframe--none '})
    }
  
  render(){
    /**
     * TITRE
     */
    const TITLE = {
      title : 'GAëLC.',
      subtitle: 'Développeur WEB'
    }

    /**
     * PROFIL
     */

    const PROFIL_CONTENT = {
      class : 'tile profil',
      id : 'profil',
      button_title : 'Profil',
      title : 'Mon Profil',
      // text : ,
    }

    /**
     * MY SITES
     */

    const MY_SITES_CONTENT = {
      class : 'tile my_sites',
      id : 'siteWeb',
      button_title : 'Projets',
      title : 'Mes Projets',
      children : [
        <WebsiteLink key="01" 
          link='https://quizanime.gaelsurleweb.ca'
          action={this.handleClick} 
          title='Quiz animé'
          description='technologies utilisées : JS (Vanilla) , POO , module mjs , SASS'/>,
        <WebsiteLink key="02" 
          link='http://animation.gaelsurleweb.ca.s3-website.us-east-2.amazonaws.com'
          action={this.handleClick} 
          title='Animation'
          description=''/>,
        <WebsiteLink key="03" 
          link='http://le21.gaelsurleweb.ca.s3-website.us-east-2.amazonaws.com'
          action={this.handleClick} 
          title='Le 21'
          description=''/>,
        <ProjetFrame 
          key="iframe" 
          iframeClass={`projetIframe ${this.state.iframeClass}`}
          link={this.state.linkToDisplay}
          title={this.state.projectTitle}
          description={this.state.projectDescription}
          closeBtnAction={this.handleCloseBtn}/>
      ],
    }

    /**
     * MY WORKS
     */

    const MY_WORKS_CONTENT = {
      class : 'tile my_works',
      id : 'illustrations',
      button_title : 'Illustrations',
      title : 'Mes Illustrations',
      children : <Gallery />,
    }
    return (
      <div className='main-wrapper'>
        <div className='header-wrapper'>
          <Title {...TITLE}/>
          <nav className='menu-wrapper'>
            <CubeButton {...PROFIL_CONTENT} />
            <CubeButton {...MY_SITES_CONTENT} />
            <CubeButton {...MY_WORKS_CONTENT} />
          </nav>
        </div>
        <div className='mainContent'>
          <BlockContent {...PROFIL_CONTENT} />
          <BlockContent {...MY_SITES_CONTENT} />
          <BlockContent {...MY_WORKS_CONTENT} />

        </div>

        {/* <Tile {...PROFIL_SETTING} {...PROFIL_CONTENT} />
        <Tile {...MY_SITES_SETTING} {...MY_SITES_CONTENT} />
        <Tile {...MY_WORKS_SETTING} {...MY_WORKS_CONTENT} /> */}
      </div>
    );
  }
}

export default App;
