import { Link } from 'react-router-dom';
import '../styles/App.css';
import '../styles/Error.css';

function Error() {
    return (
        <div className='main_content'>
            <p className='number_error'>404</p>
            <p className='error_message'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/"><p className='error_back'>Retourner sur la page d'accueil</p></Link>
        </div>
    )
}

export default Error