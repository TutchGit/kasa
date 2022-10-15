import '../styles/Footer.css'
import logoFooter from '../assets/logoFooter.png'

function Footer() {
    return (
        <div className="footer">
            <img src={logoFooter} alt="Kasa Logo Footer" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer