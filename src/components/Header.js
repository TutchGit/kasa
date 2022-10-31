import PropTypes from 'prop-types';
import '../styles/Header.css';
import Logo from '../assets/logoKasa.jpg';
import { Link } from 'react-router-dom';

function Header(props) {

    /* ---------------------------------------------------------------------------
                                  HEADER
    ClassName is used for a simple underline
    --------------------------------------------------------------------------- */ 
    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo Kasa" />
            </div>
            <div className="nav_menu">
                <Link className={props.classNameNavHome} to="/">Accueil</Link>
                <Link className={props.classNameNavAbout} to="/A-Propos">A propos</Link>
            </div>
        </div>
    )
}

Header.propTypes = {
    classNameNavHome: PropTypes.string,
    classNameNavAbout: PropTypes.string
}

export default Header