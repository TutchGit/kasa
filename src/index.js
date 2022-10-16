import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.css';
import App from './pages/App';
import Header from './components/Header';
import Footer from './components/Footer';
import FicheLogement from './pages/Fiche-Logement';
import Propos from './pages/A-Propos';
import Error from './pages/Error';
import Appartement from './components/Appartement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<React.Fragment><Header classNameNavHome="underline" /><App /><Footer /></React.Fragment>}></Route>
        <Route path="FicheLogement/:id" component={Appartement} element={<React.Fragment><Header /><FicheLogement /><Footer /></React.Fragment>}></Route>
        <Route path="A-Propos" element={<React.Fragment><Header classNameNavAbout="underline" /><Propos /><Footer /></React.Fragment>}></Route>
        <Route path="*" element={<React.Fragment><Header /><Error /><Footer /></React.Fragment>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
