import Background from "../components/Background";
import Dropdown from "../components/Dropdown";
import '../styles/App.css';
import '../styles/Background.css'
import About from '../assets/backgroundPropos.png'

function Propos() {
    const aboutDropdown = [
        {
            title: "Fiabilité",
            content: "TEXT FIABILITE"
        },
        {
            title: "Respect",
            content: "TEXT RESPECT"
        },
        {
            title: "Service",
            content: "TEXT SERVICE"
        },
        {
            title: "Responsabilité",
            content: "TEXT RESPONSABILITE"
        }
    ]

    return (
        <div className="main_content">
            <Background className="about_img" img={About} />
            <div className="dropdown_about">
                {aboutDropdown.map((info) => {
                    return <Dropdown title={info.title} content={info.content} isList={false} classNameDescription="dropdown_description_about" classNameDisplay="dropdown_display_about" />
                })}
            </div>
        </div> 
    )
}

export default Propos
