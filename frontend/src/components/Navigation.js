import React from 'react'
import {Link} from "react-router-dom"
import {Container} from "react-bootstrap"
const Navigation = () => {
    return (
        <Container>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">HandyMan</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-right navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/faq">Why Choose Us</Link>
                            
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/services">Services</Link>
                            
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="/about">About Me</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item dropdown">
                            <Link className="nav-link" to="/service-request">Request Service</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


        </Container>
    )
}

export default Navigation