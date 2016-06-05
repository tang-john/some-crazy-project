import React from 'react';
import {Component} from 'react';
import { Link } from 'react-router';


export default class Main extends Component {
  render() {
    return (
      <div className="sideBarLeft">
        <div className="header">Navigation</div>
        <ul className="nav">
          <li className="selected"><a href="/"><i className="fa fa-home"></i>Dashboard</a></li>
          <li><a href="#"><i className="fa fa-area-chart"></i>Graphs</a></li>
          <li><a href="#"><i className="fa fa-file-text-o" aria-hidden="true"></i>Reports</a></li>
          <li><a href="#"><i className="fa fa-database"></i>Analytics</a></li>
          <li><a href="#"><i className="fa fa-download"></i>Export</a></li>
        </ul>
          <div className="header">Preferences</div>
          <ul className="nav">
              <li className="selected"><a href="/"><span className="glyphicon glyphicon-home"></span> Dashboard</a></li>
              <li><a href="#"><i className="fa fa-area-chart"></i> Graphs</a></li>
              <li><a href="#"><i className="fa fa-file-text-o" aria-hidden="true"></i> Reports</a></li>
              <li><a href="#"><i className="fa fa-database"></i> Analytics</a></li>
              <li><a href="#"><i className="fa fa-download"></i> Export</a></li>
          </ul>
        <ul className="nav nav-sidebar">
          <li><a href="">Nav item again</a></li>
          <li><a href="">One more nav</a></li>
          <li><a href="">Another nav item</a></li>
        </ul>
      </div>
    )
  }
}
