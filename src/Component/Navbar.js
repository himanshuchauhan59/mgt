import React, { Component } from "react";
import Form from "./Contact";
import Home from "./Home";
import "../App.css"
import About from "./About";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
export default function Navbar(props) {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}> </Route>
                    <Route exact path='/Form' element={<Form />}></Route>
                    <Route exact path='/About' element={<About />}></Route>
                </Routes>
                <div className="context">
                    <div className="context-2">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary my-1 fixed-bottom">
                            <div className="container-fluid">
                                <a className="navbar-brand" >{props.name}</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarText">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                        <li className="nav-item">
                                            <Link to="/" className="nav-link active">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/Form" className="nav-link ">contact</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/About" className="nav-link ">About</Link>
                                        </li>
                                    </ul>

                                    <span className="navbar-text text-light w-25 text-end">
                                        <div className="row d-flex justify-content-end align-items-center">
                                            <div className="col-3">
                                                <button className="btn btn-outline-light">Menu</button>
                                            </div>
                                            <div className="col-4">
                                                {props.date.toLocaleTimeString()}
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </nav>
                    </div>

                </div>
            </Router>
        </>

    );
}
