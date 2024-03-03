import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FirstParte from './first';
import PopulaireListeItem from './populairelisteitem';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirstParte/>
    <PopulaireListeItem/>
  </React.StrictMode>
);

reportWebVitals();
