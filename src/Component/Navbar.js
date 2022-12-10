import React, { Component } from "react";
import Form from "./Contact";
import Home from "./Home";
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
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark my-1">
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

                                <span className="navbar-text text-light">
                                    {props.date.toLocaleTimeString()}
                                </span>
                            </div>
                        </div>
                    </nav>
                    
                </div>
            </Router>
        </>

    );
}
