import React from 'react';
import Title from './Title/Title'
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
 *    - ajouter flèche de navigation
 *    - ajouter bouton pour les illustrations (comme projet)
 *    - remplacer les btn close
 */

class App extends React.Component {
  constructor(props){
    super(props)
    this.initCSS()
    this.state = {
      iframeClass : 'projetIframe--none',
      linkToDisplay : '',
      projectTitle : '',
      projectDescriptions : [],
      projectTags : [],
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
      projectDescriptions : props.descriptions,
      projectTags : props.tags,
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
      class : '--dark',
      id : 'profil',
      button_title : 'Profil',
      title : 'Mon Profil',
      // text : ,
    }

    /**
     * MON PARCOURS
     */

    const PARCOURS_CONTENT = {
      class:'--light',
      id:'parcours',
      button_title:'Parcours',
      title:'Mon Parcours',
      children:'détails de mes parcours',
    }

    /**
     * MY SITES
     */

    const MY_SITES_CONTENT = {
      class : '--dark',
      id : 'siteWeb',
      button_title : 'Projets',
      title : 'Mes Projets',
      children : [
        <WebsiteLink key="03" 
          link='https://siteec2.gaelsurleweb.ca/ajdm'
          action={this.handleClick} 
          title='Gestion de stage'
          descriptions={["Premier projet étudiant individuel."," Première expérience avec PHP couplé avec Javascript.","Gestion de base données MYSQL en MVC."]}
          tags={['PHP','MySQL','Javascript','SASS','MVC']}/>,
        <WebsiteLink key="01" 
          link='https://quizanime.gaelsurleweb.ca'
          action={this.handleClick} 
          title='Quiz animé'
          descriptions={['Travail étudiant.','Programmation Javascript orienté objet avec animation CSS.']}
          tags={['Javascript','Animation CSS','SASS','POO']}/>,
        <WebsiteLink key="02" 
          link='https://siteec2.gaelsurleweb.ca/boutique-vaisselle'
          action={this.handleClick} 
          title='Boutique en ligne'
          descriptions={["Travail étudiant.","Programmation Javascript avec appel Ajax.","Gestion d'une base de données avec PHP / MYSQL.","Utilisation de GRID et SASS pour le style."]}
          tags={['POO','Javascript','AJAX','SASS']}/>,
        <ProjetFrame 
          key="iframe" 
          iframeClass={`projetIframe ${this.state.iframeClass}`}
          link={this.state.linkToDisplay}
          title={this.state.projectTitle}
          descriptions={this.state.projectDescriptions}
          tags={this.state.projectTags}
          closeBtnAction={this.handleCloseBtn}/>
      ],
    }

    /**
     * MY WORKS
     */

    const MY_WORKS_CONTENT = {
      class : '--light',
      id : 'illustrations',
      button_title : 'Illustrations',
      title : 'Mes Illustrations',
      children : <Gallery galleries={[
        {
          title : 'Pour une application',
          images : [
            {
              id: 1,
              link: './img/carousel/pesage/page_pesage.png',
              alt: 'page de travail de l\'appli',
            },
            {
              id: 2,
              link: './img/carousel/pesage/page_menu.png',
              alt: 'page menu de l\'appli',
            }
          ]
        },
        {
          title : 'Pour une compagnie',
          cieName : 'Manuquip inc.',
          link:'https://manuquipinc.com/fr/',
          images : [
            {
              id: 1,
              link: './img/carousel/manuquip/manuquip_service_rouge.jpg',
              alt : 'pub manuquip service',
            },
            {
              id: 2,
              link: './img/carousel/manuquip/manuquip_service_bleu.jpg',
              alt : 'pub manuquip service',
            },
            {
              id: 3,
              link: './img/carousel/manuquip/manuquip_cle_main.jpg',
              alt : 'pub manuquip',
            },
          ]
        },
        {
          title : 'Pour un club sportif', 
          images :[
          { 
            id: 1, 
            link: './img/carousel/snl/camion_cote1.png',
            alt: 'illustration camion coté droit',
          },
          { 
            id: 2, 
            link: './img/carousel/snl/affiche_jeux.jpg',
            alt: 'Affiche pour les Matchs de la Nautique',
          },
          {
            id:3,
            link: './img/carousel/snl/combine-1.jpg',
            alt: 'affiche pour l\'épreuve du combiné',
          },
          {
            id:4,
            link: './img/carousel/snl/affiche_finale.jpg',
            alt: 'affiche pour la finale de joute',
          }]
        },

      ] }/>,
    }


    return (
      <div className='main-wrapper'>
        <div className='header-wrapper'>
          <Title {...TITLE}/>
          <nav className='menu-wrapper'>
            <CubeButton {...PROFIL_CONTENT} />
            <CubeButton {...PARCOURS_CONTENT} />
            <CubeButton {...MY_SITES_CONTENT} />
            <CubeButton {...MY_WORKS_CONTENT} />
          </nav>
        </div>
        <div className='mainContent'>
          <BlockContent {...PROFIL_CONTENT} />
          <BlockContent {...PARCOURS_CONTENT} />
          <BlockContent {...MY_SITES_CONTENT} />
          <BlockContent {...MY_WORKS_CONTENT} />
        </div>
      </div>
    );
  }
}

export default App;
