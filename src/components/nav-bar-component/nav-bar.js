import React, { Component } from 'react';
import './nav-bar.css';
import profileIcon from '../../account-icon-check.png';
export default class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar-content">
                  <nav className="navbar navbar-expand-lg navbar-light">
                  <a className="navbar-brand" href="#">craigslist</a>
                  <div className="nav-middle">

                  </div>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                 </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="form-inline my-2 my-lg-0">
                   <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                   <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
               <button className="profile"><img src={profileIcon} /></button>
          
{/*  
                  <div class="dropdown-content">
                     <a href="#">Link 1</a>
                     <a href="#">Link 2</a>
                     <a href="#">Link 3</a>
                 </div> */}

              </div>
              </nav>
            </div>
        )
    }
}
