import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/App.css';
import '../styles/Error.css';

function Error() {
    return (
        <React.Fragment>
            <Header />
            <div className='main_content'>
                <p className='number_error'>404</p>
                <p className='error_message'>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/"><p className='error_back'>Retourner sur la page d'accueil</p></Link>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Error