import React from 'react'
import './Title.css'

function Title(title){
    return(
        <div className='title'>
            <h1>{title.title}</h1>
            <p>{title.subtitle}</p>
        </div>      
    )
}

export default Title;