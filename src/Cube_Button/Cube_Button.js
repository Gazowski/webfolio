import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

import './Cube_Button.css'

function CubeButton(data){
    return(
        <div className='cubeButton'>
            <div className='cubeButton--front'>{data.button_title}</div>
            <div className='cubeButton--bottom'>
                <Link                       
                    to={data.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    {data.button_title}
                </Link>
            </div>
        </div>
    )
}

export default CubeButton