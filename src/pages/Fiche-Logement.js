import Background from '../components/Background';
import Info from '../components/Info';
import Dropdown from '../components/Dropdown';
import '../styles/App.css';
import { appartements } from '../datas/data';
import { useParams } from 'react-router-dom';

function FicheLogement() {
    const { id } = useParams();

    const appartement = appartements.find(appartement => appartement.id === id)

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

    return (
        <div className="main_content">
            <Background className="fiche_img" img={appartement.cover}/>
            <Info
            title={appartement.title}
            location={appartement.location}
            ownerName={appartement.host.name}
            ownerImg={appartement.host.picture}
            tags={appartement.tags}
            rating={appartement.rating} />
            <div className='dropdown_fiche'>
                {infoDropdown.map((info) => {
                    return <Dropdown title={info.title} content={info.content} isList={info.isList} classNameDescription="dropdown_description_fiche" classNameDisplay="dropdown_display_fiche" />
                })}
            </div>
            
        </div>
    )
}

export default FicheLogement