import React from 'react'
import WebsiteLink from '../Website_Link/Website_Link'
import Gallery from '../Gallery/Gallery'

import CV from '../img/CV.svg'

/**
 * TITRE
 */
export const TITLE = {
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
    children:<img src={CV} alt="CV de l'auteur"/>,
}

/**
 * MY SITES
 */

const MY_SITES_CONTENT = {
    class : '--dark',
    id : 'siteWeb',
    button_title : 'Projets',
    title : 'Mes Projets',
    children : <WebsiteLink allSites={[
        {
            key:'01',
            title:'Gestion de stage',
            link: 'https://siteec2.gaelsurleweb.ca/ajdm',
            description: ["Premier projet étudiant individuel."," Première expérience avec PHP couplé avec Javascript.","Gestion de base données MYSQL en MVC."],
            tags: ['PHP','MySQL','Javascript','SASS','MVC'],
        },
        {
            key:'02',
            title:'Quiz animé',
            link: 'https://quizanime.gaelsurleweb.ca',
            description: ['Travail étudiant.','Programmation Javascript orienté objet avec animation CSS.'],
            tags: ['Javascript','Animation CSS','SASS','POO'],
        },
        {
            key:'03',
            title:'Boutique en ligne',
            link: 'https://siteec2.gaelsurleweb.ca/boutique-vaisselle',
            description:["Travail étudiant.","Programmation Javascript avec appel Ajax.","Gestion d'une base de données avec PHP / MYSQL.","Utilisation de GRID et SASS pour le style."],
            tags: ['POO','Javascript','AJAX','SASS'],
        },
    ]}/>,
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
  
export const ALL_CONTENTS=[
    PROFIL_CONTENT,
    PARCOURS_CONTENT,
    MY_SITES_CONTENT,
    MY_WORKS_CONTENT
]