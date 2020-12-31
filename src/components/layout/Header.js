import React, { Component } from "react";
import LogoutButton from "./../login/LogoutButton";
import { Link } from "react-router-dom";

export default class header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand1" to="/">
              ADMIN
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link1" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>

                <li className="nav-item dropdown active">
                  <a
                    className="nav-link1 dropdown-toggle"
                    href="###"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Setting
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu1"
                    aria-labelledby="navbarDropdown"
                  >
                    <LogoutButton className="dropdown-item"/>
                    <Link className="dropdown-item" to="/profile" >Tài khoản</Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
