import React from "react";

function Navbar(props) {
    return (
        <> 
            <div>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="navbar.html">{props.Navbarname}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" href="navbar.html" aria-current="page" >{props.name}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="navbar.html">{props.author.name}</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="navbar.html">{DateTime}</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar