import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FirstParte from './first';
import PopulaireListeItem from './populairelisteitem';
import ImagePub from './imagepub';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirstParte/>
    <PopulaireListeItem/>
    <ImagePub/>
  </React.StrictMode>
);

reportWebVitals();
