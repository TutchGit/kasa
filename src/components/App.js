import '../styles/App.css';
import Tag from './Tag';
import Dropdown from './Dropdown';
import Thumb from './Thumb';
import Description from './Description';
import Footer from './Footer';

function App() {
  return (
    <div>
      <div className="Navbar">
        <div className="Logo">
          <img src="" alt="Kasa Logo" />
        </div>
      </div>
      <div className="menu">
        <div className="navigation">
          <p>Accueil</p>
        </div>
        <div className="navigation">
          <p>Propos</p>
        </div>
      </div>
    </div>
  )
}

export default App;
