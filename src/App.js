import './App.css';
import { useState } from 'react';
import Form from './Component/Contact';
import Home from './Component/Home';
import About from './Component/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
function Main() {
  return (

    <div className="container-fluid my-2">
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route exact path='/Form' element={<Form />}></Route>
          <Route exact path='/About' element={<About />}></Route>
        </Routes>
      </div>
    </div>

  );
}

export default Main;

