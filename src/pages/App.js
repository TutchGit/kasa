import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Background from '../components/Background';
import Thumb from '../components/Thumb';

import '../styles/App.css';
import Home from '../assets/backgroundHome.png'

/* ---------------------------------------------------------------------------
                                  HOME PAGE
Return Header, Background, Thumb and Footer comp inside a Fragment
Background comp props send :
    classname => used in "A-propos.js" too with slight difference
    Img => background image
    Title => only needed for home page. Text in-front
--------------------------------------------------------------------------- */ 

function App() {
  return (
    <React.Fragment>
      <Header classNameNavHome="underline" />
      <div className='main_content_home'>
        <Background className="home_img" img={Home} title="Chez vous, partout et ailleurs" />
        <Thumb />
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default App;
