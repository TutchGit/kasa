import Background from "../components/Background";
import Dropdown from "../components/Dropdown";
import '../styles/App.css';
import '../styles/Background.css'
import About from '../assets/backgroundPropos.png'

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

    return (
        <div className="main_content_home">
            <Background className="about_img" img={About} />
            <div className="dropdown_about">
                {aboutDropdown.map((info) => {
                    return <Dropdown key={info.title} title={info.title} content={info.content} isList={false} classNameDescription="dropdown_description_about" classNameDisplay="dropdown_display_about" />
                })}
            </div>
        </div> 
    )
}

export default Propos
