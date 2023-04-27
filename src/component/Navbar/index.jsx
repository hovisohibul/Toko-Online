import React from 'react'
import style from './style.module.css'
import logo from './assets/logo.png'
import Button from '../Button'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid justify-content-around">
                    <a className="navbar-brand" href="#"><img src={logo} alt="" className={style['logo-brand']}/></a>
                    {/* <button className="navbar-toggler collapse navbar-collapse" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="d-flex justify-conten-end" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown ms-4">
                                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Program
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Online Course</a></li>
                                    <li><a className="dropdown-item" href="#">Mini bootcamp</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Bootcamp</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown ms-4">
                                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Bidang Ilmu
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Digital marketing</a></li>
                                    <li><a className="dropdown-item" href="#">Product management</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">English</a></li>
                                    <li><a className="dropdown-item" href="#">Programming</a></li>
                                </ul>
                            </li>
                            <li className="nav-item ms-4">
                                <a className="nav-link text-light" href="#">Tentang</a>
                            </li>
                            {/* <li className="nav-item ms-4">
                                <Button class={style['daftar']}>Masuk/Daftar</Button>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar