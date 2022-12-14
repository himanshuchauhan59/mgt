import React from 'react'; 
import ReactDOM from 'react-dom/client';
import './index.css';

import Navbar from './Component/Navbar';
import Main  from './App';
import reportWebVitals from './reportWebVitals';
import Form from './Component/Contact';

const detail = {
  name: "MGT",
};  
const root = ReactDOM.createRoot(document.getElementById('mainSection'));
  root.render(
    <React.StrictMode>
      <Main/>
    </React.StrictMode>
  );
const nav = ReactDOM.createRoot(document.getElementById('navbar'));
  function tick()
  {
    nav.render(<Navbar name={detail.name} Coments={detail.Coments} author={detail.author} date={new Date()}/>);
  }
  setInterval(tick , 1000);

reportWebVitals();
