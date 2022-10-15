import '../styles/Header.css';
import Logo from '../assets/logoKasa.jpg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo Kasa" />
            </div>
            <div className="nav_menu">
                <Link to="/">Accueil</Link>
                <Link to="/A-Propos">A propos</Link>
            </div>
        </div>
    )
}

export default Header