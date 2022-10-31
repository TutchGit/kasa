import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Background from "../components/Background";
import Dropdown from "../components/Dropdown";

import '../styles/App.css';
import '../styles/Background.css'
import About from '../assets/backgroundPropos.png'


/* ---------------------------------------------------------------------------
Add another array with title and content if another dropdown needed.
---------------------------------------------------------------------------*/
function Propos() {
    const aboutDropdown = [
        {
            title: "Fiabilité",
            content: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        },
        {
            title: "Respect",
            content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            title: "Service",
            content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },
        {
            title: "Responsabilité",
            content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ]

/* ---------------------------------------------------------------------------
                                ABOUT PAGE
Return Header, Background, loop on aboutDropdown for Dropdown and Footer comp inside a Fragment
Background comp props needed :
    classname => used in "App.js" too with slight difference
    Img => background image
Dropdown comp props send :
    Key => needed for react. Use props.title for simplicity
    title, content => data used in aboutDropdown
    isList => Need to be FALSE ! Dropdown display only text and not list in "About"
    classNameDescription, classNameDisplay =>
        since dropdown are used in "Fiche-logement.js" too, but are slightly differents,
        a specific class is needed.
--------------------------------------------------------------------------- */

    return (
        <React.Fragment>
            <Header classNameNavAbout="underline" />
            <div className="main_content_home">
                <Background className="about_img" img={About} />
                <div className="dropdown_about">
                    {aboutDropdown.map((info) => {
                        return <Dropdown key={info.title} title={info.title} content={info.content} isList={false} classNameDescription="dropdown_description_about" classNameDisplay="dropdown_display_about" />
                    })}
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Propos
