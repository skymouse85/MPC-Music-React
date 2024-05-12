import React from 'react';
import logo from '../assets/icons/lightblueVibesAsset 1.svg';
import '../styles/Header.css';

function Header() {
    return (
        <header className="jumbotron jumbotron-fluid header">
        <div className="container">
            <div className="row">
                
                <div className="col-3 col-sm-3 col-md-2 align-self-center ml-20">
                    <a href="/">
                        <img src={logo} className="img-fluid pb-10" height="80" width="80" href="#"
                            alt="" />
                    </a>
                </div>
                <div className="col-md-8 d-flex justify-content-center align-self-center">
                    <h1>Mark Pascucci-Clifford</h1>
                </div>

            </div>
            <div className="row">
                <div className="col justify-content-center">
                    <p className="d-flex justify-content-center">Vibraphonist • Composer • Programmer</p>
                </div>
            </div>
        </div>

    </header> 
    );
}

export default Header;