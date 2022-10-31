import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './styles/index.css';

import FicheLogement from './pages/Fiche-Logement';
import Propos from './pages/A-Propos';
import Error from './pages/Error';
import App from './pages/App';

import Appartement from './components/Appartement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<App />}></Route>
        <Route path="FicheLogement/:id" component={Appartement} element={<FicheLogement />}></Route>
        <Route path="A-Propos" element={<Propos />}></Route>
        <Route path="404" element={<Error />}></Route>
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  </React.StrictMode>
);