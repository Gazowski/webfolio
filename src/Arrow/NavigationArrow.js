import React from 'react'
import Arrow from './Arrow'

function NavigationArrows(){
    let allBlocks = document.querySelectorAll('.blockContent')
    console.log(allBlocks)
    // for(let block in allBlocks){
    //   console.log(block)
    //   let previousSectionId, nextSectionId, arrowColor
    //   arrowColor = block.classList.contains('blockContent--dark') ? '--light' : '--dark'
    //   if(block !== allBlocks[0]){
    //     previousSectionId = block.previousElementSibling.id
    //     console.log(previousSectionId)
    //     return(
    //       <Arrow sens='up' section={previousSectionId} color={arrowColor}/>
    //     )
    //   }
    // }

    return null
}

export default NavigationArrows