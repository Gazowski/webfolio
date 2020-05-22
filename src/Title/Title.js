import React from 'react'
import Grid from '@material-ui/core/Grid'
import Profil_pic from '../img/artisan-web.jpg'
import './Title.css'

function Title(title){
    return(
        <div>
            <Grid
                className='title'
                container
                direction="column"
                justify="center"
                alignItems="center"
                xs={12}>
                <h1>{title.title}</h1>
                <p>Artisan du WEB</p>
            </Grid>
            <div className='image'>
                <img src={Profil_pic} alt="artisan en tablier de travail" />
            </div>
        </div>          
    )
}

export default Title;