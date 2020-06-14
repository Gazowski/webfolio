import React from 'react'
import './Title.css'

class Title extends React.Component{
    render(){
        return(
            <div className='title'>
                <h1>{this.title.title}</h1>
                <p>{this.title.subtitle}</p>
                <div></div>
            </div>      
        )
    }
}

export default Title;