import Background from '../components/Background';
import Thumb from '../components/Thumb';
import '../styles/App.css';
import Home from '../assets/backgroundHome.png'

function App() {
  return (
    <div className='main_content'>
      <Background className="home_img" img={Home} title="Chez vous, partout et ailleurs" />
      <Thumb />
    </div>
  )
}

export default App;
