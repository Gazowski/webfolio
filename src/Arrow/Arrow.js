import React from 'react'
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import './Arrow.css'

/**
 * composant :
 * lien vers la section passé en paramètre 
 * peut pointer vers le haut vers le bas
 * @section : section cible où se rendre
 * @sens : sens de la flèche 'up' or 'down 
 * @color : class de couleur
 * 
 */

 function Arrow(props){
     return(
         <Link className={`btn btnArrow--${props.sens} btnArrow--${props.color}`}
            to={props.section}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>
                <FontAwesomeIcon icon={props.sens === 'up' ? faCaretUp : faCaretDown}/>
        </Link>
     )
 }

export default Arrow