import React from 'react'
import Box from '@material-ui/core/Box'
import Profil_pic from '../img/artisan-web.jpg'

import './Profil_Content.css'

function ProfilContent(){
    return(
        <Box className='profilContent'>
            <div>
                <img src={Profil_pic} alt="artisan en tablier de travail" />
            </div>
        </Box>
    )
}

export default ProfilContent