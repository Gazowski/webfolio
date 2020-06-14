import React from 'react'
import './Title.css'

class Title extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div className='title'>
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
                <div></div>
            </div>      
        )
    }
}

export default Title;