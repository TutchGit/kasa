import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carouselle from '../components/Carouselle';
import Info from '../components/Info';
import Dropdown from '../components/Dropdown';

import '../styles/App.css';
import { appartements } from '../datas/data';


function FicheLogement() {

    /* ---------------------------------------------------------------------------
    Get id from Router in "index.js", then check comparaison from appartement.id
    --------------------------------------------------------------------------- */

    const { id } = useParams();
    const appartement = appartements.find(appartement => appartement.id === id)

    /* ---------------------------------------------------------------------------
    If nothing if found, redirect to 404 error page
    --------------------------------------------------------------------------- */

    if (appartement === undefined) {
        console.log("bouyaaa")
        return <Navigate replace to="404" />;
    }

    /* ---------------------------------------------------------------------------
    Const needed cause both dropdown haev different name, content and display.
    --------------------------------------------------------------------------- */

    const infoDropdown = [
        {
            title: "description",
            content: appartement.description,
            isList: false
        },
        {
            title: "Equipements",
            content: appartement.equipments,
            isList: true
        }
    ]

    /* ---------------------------------------------------------------------------
                            SPECIFIC APPARTMENT PAGE
    Return Header, Carouselle, Info, loop on infoDropdown for Dropdown and Footer comp inside a Fragment
    Carouselle comp props send :
        pictures => array of pictures to display
        title => needed for the alt
    Info comp props send :
        title, location, ownerName, ownerImg => data to display
        tags => array of tags
        rating => number between 0 and 5
    --------------------------------------------------------------------------- */

    return (
        <React.Fragment>
            <Header />
            <div className="main_content">
                <Carouselle pictures={appartement.pictures} title={appartement.title}/>
                <Info
                title={appartement.title}
                location={appartement.location}
                ownerName={appartement.host.name}
                ownerImg={appartement.host.picture}
                tags={appartement.tags}
                rating={appartement.rating} />
                <div className='dropdown_fiche'>
                    {infoDropdown.map((info) => {
                        return <Dropdown key={info.title} title={info.title} content={info.content} isList={info.isList} classNameDescription="dropdown_description_fiche" classNameDisplay="dropdown_display_fiche" />
                    })}
                </div>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default FicheLogement