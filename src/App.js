import React from 'react';
import Title from './Title/Title'
import CubeButton from './Cube_Button/Cube_Button'
import BlockContent from './Block_Content/Block_Content'
import Arrow from './Arrow/Arrow'
import { TITLE,ALL_CONTENTS } from './ContentsFile/ContentsFile'


import './App.css';

/**
 * A FAIRE : 
 *    - ajouter flèche de navigation
 *    - mettre lien courriel et linkedin sous le titre
 *    - modifier le favicon
 *    - mettre le lien vers le cv
 */

class App extends React.Component {
  constructor(props){
    super(props)
    this.initCSS()
  }

  initCSS(){
    // correction apporté pour échappé la barre de menu sur les mobiles
    // vu sur https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  /**
   * addContentNavigation: 
   * ajoute des flêches de navigation vers les sections suivantes et précédantes
   * @param {object} allContent : tableau avec toutes les sections de contenu et leur détail
   */

  addContentNavigation(allContent){
    console.log(allContent)
    let i=0;
    for(let block of allContent){
      let previousSectionId, nextSectionId, arrowColor
      arrowColor = block.class === '--light' ? 'light' : 'dark'
      if(block !== allContent[0]){
        previousSectionId = allContent[i-1].id
      } else {
        previousSectionId = 'top' 
      }
      block.arrowToPrevious = <Arrow sens='up' 
                                section={previousSectionId} 
                                color={arrowColor}/>
      if(block !== allContent[allContent.length - 1]){
        nextSectionId = allContent[i+1].id
        block.arrowToNext = <Arrow sens='down' 
                              section={nextSectionId} 
                              color={arrowColor}/>
      }
      /* incrément du compteur */
      i++
    }
  }
  
  render(){
    this.addContentNavigation(ALL_CONTENTS)    
    return (
      <div id='top' className='main-wrapper'>
        <div className='header-wrapper'>
          <Title {...TITLE}/>
          <nav className='menu-wrapper'>
            {ALL_CONTENTS.map((content) => (
              <CubeButton key={content.id}  {...content} />
            ))}
          </nav>
        </div>
        <div className='mainContent'>
          {ALL_CONTENTS.map((content) => (
            <BlockContent key={content.id}  {...content} />
          ))}
        </div>
      </div>
    );

  }
}

export default App;
