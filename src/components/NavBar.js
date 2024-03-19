import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class NavBar extends Component {
    render() {
        return (
            <>
                <nav className={`navbar sticky-top navbar-expand-lg  navbar-${this.props.mode} bg-${this.props.mode}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">{this.props.title}</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Link</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/">Action</Link></li>
                                        <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                    </ul>
                                </li>
                                {/* <li className="nav-item"> */}
                                {/* <Link className="nav-link disabled" aria-disabled="true">Disabled</Link> */}
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/">general</Link>
                                </li>

                                <li className="nav-item">

                                    <Link className="nav-link active" to="/business">business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/sports">sports</Link>
                                </li>
                                <li className="nav-item">

                                    <Link className="nav-link active" to="/entertainment">entertainment</Link>
                                </li>
                                <li className="nav-item">

                                    <Link className="nav-link active" to="/science">science</Link>
                                </li>
                                <li className="nav-item">

                                    <Link className="nav-link active" to="/health">health</Link>
                                </li>
                                <li className="nav-item">

                                    <Link className="nav-link active" to="/technology">technology</Link>
                                </li>



                            </ul>
                            <div className={`form-check form-switch text-${this.props.mode === 'white' ? 'dark' : 'white'}`}>
                            
                                <input className="form-check-input" aria-checked={true} type="checkbox" role="switch" id="flexSwitchCheckDefault"  onClick={this.props.onClick} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark</label>
                            </div>
                            {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}
                        </div>
                    </div>
                </nav>

            </>
        )
    }
};

export { NavBar }