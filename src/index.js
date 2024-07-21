import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Com from './Component/Header';
import Mainimage from './Component/HeroSection';
import WeDo from './Component/WhatweDo';
import Cardd from './Component/HeroCard';
import { Discover } from './Component/Discovermore';
import { Service } from './Component/Services';
import { OurTeam } from './Component/AwesomeTeam';
import { User } from './Component/User';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Com />
    <Mainimage />
    <WeDo /> 
    <Discover />
    <Service />
    <OurTeam/>
    <User/>


  </React.StrictMode>
);
reportWebVitals();
