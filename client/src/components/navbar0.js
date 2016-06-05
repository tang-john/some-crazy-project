import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router';


export default class NavBar extends Component {
  render() {
    return (
      <div>
        {this.renderProjectName()}
        {this.renderMenuMain()}
      </div>
    )
  }

  renderProjectName() {
    return (
        <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Portfolio Admin</a>
        </div>
    )
  }

  renderMenuMain() {
    return (
      <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li key="graphs">
              <Link to={"graphs"}>Graphs</Link>
            </li>
            <li key="contact">
              <Link to={"contact"}>Contact</Link>
            </li>
          </ul>
      </div>
    )
  }
}
